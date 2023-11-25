import React, { useEffect, useState } from "react";
import UserLayout from "../User/layout/UserLayout";
import axios from "axios";
import { url } from "../../service/url";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ReactStars from "react-stars";
import MyButton from "../User/components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductFromLocalStorage,
  setProductToLocalStorage,
} from "../../helpers/helpers";
import { addProduct, getProduct } from "../../store/slice/ProductSlice";
import Gallery from "../../Components/swiper/Gallery";
import Gallery2 from "../../Components/swiper/Gallery2";

const CatalogDetail = () => {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [count, setCount] = useState(1);
  const [image, setImages] = useState([])
  const { id } = useParams();
  let product = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const getOneProducts = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/product_deteile_views/${id}/`
      );
      // setProducts(data?.data?.results);
      setProducts(data);
     
    } catch (error) {
      console.log(error);
    }
  };
  const getProductData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_all_objects_list_views/`
      );
      setProducts2(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOneProducts();
    getProductData();
  }, [id]);
  const AddProduct = (item) => {
    // O'zi yangi item yaratish
    const updatedItem = { ...item, count: parseInt(count) };

    // Productlar o'zgaruvchisi
    let updatedProducts = [];

    // Agar serverdan olinmagan bo'lsa, local storage'dan olib kelamiz
    const oldProducts = getProductFromLocalStorage();

    // Agar product oldProducts'da mavjud bo'lsa, u bo'lib chiqarilsin
    if (oldProducts) {
      updatedProducts = oldProducts.filter(
        (product) => product.id !== item.id
      );
    }

    // Yangi productni oldProducts'ga qo'shamiz
    updatedProducts.push(updatedItem);

    // Reduxga yuboramiz
    dispatch(getProduct(updatedProducts));

    // Local storage'ga qayta saqlaymiz
    setProductToLocalStorage(updatedProducts);
    navigate("/basket")
    window.scrollTo({top: 0})
  };

  console.log(products)

 
  
  return (
    <UserLayout title={"Каталог"}>
      <div className="mt-[188px] lg:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="w-full hidden md:flex justify-between">
              <div className="w-[55%] ">
              <Gallery2 data={products[0]} />
                
              </div>
              <div className="w-[42%] ml-[2%] flex flex-col items-start">
                <p className="text-[21px]  md:text-[30px] text-navcolor border-b-2 border-mainColor">
                  {products[0]?.name}
                </p>
                <p className="mt-2 text-[18px] md:text-[22px] text-navcolor">
                  Цена:{" "}
                  <span className="mt-2 text-[18px] md:text-[22px] font-montserrat ml-3 text-mainColor">
                    {parseInt(products[0]?.price) > 0
                      ? products[0]?.price + " ₽"
                      : "Договорная"}
                  </span>
                </p>
                {/* <div className="mt-2">
                  <ReactStars
                    color1="#D4D4D4"
                    color2="#FF5C17"
                    value={3.3}
                    count={5}
                    size={31}
                  />
                </div> */}
                {products[0]?.length > 0 && <p>{products[0]?.seira}</p>}
                <p className="capitalize mt-6 text-[#0000008f]">рАЗМЕРЫ</p>

                <div className="w-[70%] mt-12 flex flex-col gap-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      Длинна L
                    </p>
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      {products[0]?.length_l} мм
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      Ширина B
                    </p>
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      {products[0]?.width_b} мм
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      Высота H
                    </p>
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      {products[0]?.height_h} мм
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      Вес
                    </p>
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      {products[0]?.scales} кг
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      Объем
                    </p>
                    <p className="text-navcolor text-[20px] font-montserrat font-medium">
                      {products[0]?.volume} м/куб.
                    </p>
                  </div>

                  <div className="flex w-full gap-x-2 2xl:gap-x-12 flex-row  mt-6">
                    <div className="min-w-[30%] flex flex-col gap-y-2">
                      <p className="text-navcolor text-[14px] lg:text-[18px] font-montserrat font-medium">
                        Колл-во
                      </p>
                      <input
                        className="outline-none h-[53px] bg-transparent rounded w-[60%] py-1 px-3 border-2 border-navcolor "
                        type="number"
                        defaultValue={1}
                        onChange={(e) => setCount(e.target.value)}
                      />
                    </div>
                    <div className="max-w-[70%] flex items-end">
                      <MyButton
                        title={"В корзину"}
                        callback={() => AddProduct(products[0])}
                        class1={
                          "h-[53px] w-[245px] flex items-center justify-center text-[16px] md:text-[18px]"
                        }
                      />
                    </div>
                  </div>

                  <p className="py-3 text-navcolor font-medium text-[14px] font-montserrat">
                    *Стоимость изделий может меняться в зависимости от объёма и
                    общей ситуации на строительном рынке. Представленные на
                    сайте цены на ЖБИ не являются публичной офертой.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile start*/}

            <div className="w-full  flex-col gap-y-4 md:hidden justify-between items-center">
              <div className="w-[100%] flex md:hidden flex-col items-start">
                <p className="text-[21px] md:text-[30px] text-navcolor border-b-2 border-mainColor">
                  {products[0]?.name}
                </p>
                <p className="mt-6 text-[18px] md:text-[22px] text-navcolor">
                  Цена:{" "}
                  <span className="mt-2 text-[18px] md:text-[22px] font-montserrat ml-3 text-mainColor">
                    {parseInt(products[0]?.price) > 0
                      ? products[0]?.price + " ₽"
                      : "Договорная"}
                  </span>
                </p>
                {/* <div className="mt-2">
                  <ReactStars
                    color1="#D4D4D4"
                    color2="#FF5C17"
                    value={3.3}
                    count={5}
                    size={31}
                  />
                </div> */}
                {products[0]?.length > 0 && <p>{products[0]?.seira}</p>}
                {/* <p className="capitalize mt-6 text-[#0000008f]">рАЗМЕРЫ</p> */}
              </div>
              <Gallery2 data={products[0]} />
            </div>

            <div className="w-[100%] flex md:hidden flex-col items-start">
              <div className="w-[100%] mt-12 flex flex-col gap-y-2">
                <div className="flex justify-between items-center bg-[#FAFAFA] py-2 px-4">
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    Длинна L
                  </p>
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    {products[0]?.length_l} мм
                  </p>
                </div>
                <div className="flex justify-between items-center bg-[#fff] py-2 px-4">
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    Ширина B
                  </p>
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    {products[0]?.width_b} мм
                  </p>
                </div>
                <div className="flex justify-between items-center bg-[#FAFAFA] py-2 px-4">
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    Высота H
                  </p>
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    {products[0]?.height_h} мм
                  </p>
                </div>
                <div className="flex justify-between items-center bg-[#fff] py-2 px-4">
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    Вес
                  </p>
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    {products[0]?.scales} кг
                  </p>
                </div>
                <div className="flex justify-between items-center bg-[#FAFAFA] py-2 px-4">
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    Объем
                  </p>
                  <p className="text-navcolor text-[18px] font-montserrat font-medium">
                    {products[0]?.volume} м/куб.
                  </p>
                </div>

                <div className="flex flex-row  justify-between mt-6">
                  <div className="w-[30%] flex flex-col items-center gap-y-2">
                    <p className="text-navcolor text-[18px] font-montserrat font-medium">
                      Колл-во
                    </p>
                    <input
                      className="outline-none bg-transparent h-[53px] rounded w-[60%] py-1 px-3 border-2 border-navcolor "
                      type="number"
                      defaultValue={1}
                      onChange={(e) => setCount(e.target.value)}
                    />
                  </div>
                  <div className="w-[65%] flex items-end">
                    <MyButton
                      callback={() => AddProduct(products[0])}
                      title={"В корзину"}
                      class1={
                        "h-[53px] w-[245px] flex items-center justify-center text-[18px]"
                      }
                    />
                  </div>
                </div>

                <p className="py-3 text-navcolor font-medium text-[14px] font-montserrat">
                  *Стоимость изделий может меняться в зависимости от объёма и
                  общей ситуации на строительном рынке. Представленные на сайте
                  цены на ЖБИ не являются публичной офертой.
                </p>
              </div>
            </div>
            {/* Mobile end*/}

            <div className="mt-12 md:mt-24">
              <p className="text-[23px] border-b-[3px] mb-4 w-[135px] border-mainColor font-semibold text-navcolor font-montserrat ">
                ОПИСАНИЕ
              </p>
              <p
                class="font-medium text-navcolor"
                dangerouslySetInnerHTML={{
                  __html: products[0]?.context,
                }}
              />
            </div>
          </div>
        </div>




        <div className="flex flex-col w-[92%] mm:w-[88%] mt-24 mx-auto">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[8px] h-[43px] bg-mainColor " />
            <p className="text-[#313131] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
              Другие товары
            </p>
          </div>

          <div
            className={`${
              products?.length > 0
                ? "grid grid-cols-1 md:grid-cols-2 mb-28 xl:grid-cols-3 my-8 gap-x-4 gap-y-4"
                : "flex"
            } `}
          >
            {products2?.map((c, i) => (
              <div className="flex flex-col shadow-md rounded-lg" key={i}>
                <div>
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {c?.product?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="h-[212px] md:h-[300px]">
                          <img
                            src={`${url}${item?.img}`}
                            className="h-full w-full rounded-lg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <p className="my-4 font-semibold text-[18px] md:text-[22px] flex justify-center line-clamp-1">
                    {c?.name}
                  </p>
                  <p className="flex justify-center font-medium text-[16px] md:text-[18px] line-clamp-1 text-mainColor">
                    {parseInt(c?.price) > 0 ? c?.price + " " : "Договорная"}₽
                  </p>
                  <div className="my-4 flex justify-center">
                    <MyButton title={"Подробнее"} class1={"px-12 mm:px-20"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </UserLayout>
  );
};

export default CatalogDetail;
