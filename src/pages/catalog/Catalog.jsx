import React, { useEffect, useState } from "react";
import UserLayout from "../User/layout/UserLayout";
import axios from "axios";
import { url } from "../../service/url";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MyButton from "../User/components/MyButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PaginationBar from "./Pagination";

const Catalog = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [search, setSearch] = useState();
  const [isCat, setIsCat] = useState(false);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(Number);
  const [pageId, setPageId] = useState(1);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isStepTrue = queryParams.get("main");
  const isStepTrue2 = queryParams.get("status") === "true";
  const searchProduct = queryParams.get("search");

  const getCategoryData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/main_category_list_views/`
      );
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  async function getProductByMainCategoryId(id) {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_main_category_list_views/${id}/`
      );
      return data?.data?.results;
    } catch (error) {
      console.log(error);
    }
  }

  const toggleButton = async (id) => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/category_list_views/${id}/`
      );
      setCategory((prevCards) =>
        prevCards.map((card) =>
          card?.id === id
            ? { ...card, visible: !card.visible, data }
            : { ...card, visible: false, data: [] }
        )
      );
      const product = await getProductByMainCategoryId(id);
      setProducts(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isStepTrue2) {
      toggleButton(isStepTrue);
    }
  }, [isStepTrue]);

  const getProductData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_all_objects_list_views/?page=${pageId}`
      );
      setProducts(data?.data?.results);
      setPageSize(data?.data?.count);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductData2 = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_all_objects_list_views/?page=${pageId + 1}`
      );
      setProducts2(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
    getProductData2();
  }, [pageId]);

  const sendCatalog = async (id, name) => {
    navigate(`/catalog/${id}/${name?.replace(/\//g, "").replace(" ", "_")}`);
    window.scrollTo({
      top: 0,
    });
  };
  const getProductByIdCategory = async (id) => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_category_list_views/${id}/`
      );
      setProducts(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = async () => {
    if (search?.length == 0) {
      getProductData();
    }
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/product_filter_view/?search=${search}`
      );
      setProducts(data?.results);
      console.log(data);
      setPageSize(data?.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  // Функция для добавления текста к заголовкам товаров
  function добавитьТекстКЗаголовкам() {
    const заголовкиТоваров = document.querySelectorAll(".заголовок-товара"); // Замените '.заголовок-товара' на класс, используемый для заголовков товаров на вашем сайте
    заголовкиТоваров.forEach((заголовок) => {
      заголовок.textContent += " Купить в Санкт-Петербурге и Лен области";
    });
  }

  // Функция для добавления текста к описанию товаров
  function добавитьТекстКОписанию() {
    const описанияТоваров = document.querySelectorAll(".описание-товара"); // Замените '.описание-товара' на класс, используемый для описаний товаров на вашем сайте
    описанияТоваров.forEach((описание) => {
      описание.textContent +=
        " Работаем по Санкт-Петербургу и Ленинградской области";
    });
  }

  // Функция для добавления текста к h1 названиям товаров
  function добавитьТекстКH1() {
    const h1Товаров = document.querySelectorAll("h1"); // Выберите все h1 на странице (предполагается, что это заголовки товаров)
    h1Товаров.forEach((h1) => {
      h1.textContent += " Санкт-Петербург и Лен область";
    });
  }

  // Запускаем функции при загрузке страницы
  window.addEventListener("DOMContentLoaded", () => {
    добавитьТекстКЗаголовкам();
    добавитьТекстКОписанию();
    добавитьТекстКH1();
  });
  useEffect(() => {
    setTimeout(async () => {
      if (searchProduct?.length > 0) {
        // setSearch(searchProduct);
        try {
          const { data } = await axios.get(
            `${url}/b_sayt/api/product_filter_view/?search=${searchProduct}`
          );
          setProducts(data?.results);
          console.log(data);
          setPageSize(data?.count);
        } catch (error) {
          console.log(error);
        }
      }
    }, 1000);
  }, [searchProduct]);

  console.log(search)
  return (
    <UserLayout
      title={"Каталог ЖБИ товаров по приятным ценнам в Санкт-Петербурге!"}
      desc={
        "Выбрать и купить железобетонные изделия в интернет-магазине вам поможет информация по размеру, весу, ценам, фото и другим характеристикам в каталоге товаров! Работем в Спб и Ленинградской обл."
      }
    >
      <div className="mt-[188px] lg:mt-[100px] gap-y-4 flex flex-col mb-3">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] lg:w-[90%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
                Каталог
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] flex justify-between  mx-auto  mb-6 ">
        <div
          onClick={() => setIsCat(true)}
          className="p-3 w-[176px] md:hidden flex cursor-pointer items-center shadow-md rounded-lg justify-between"
        >
          <p className="text-[18px] text-navcolor font-montserrat font-semibold">
            Категории
          </p>
          <img src="/Vector (16).svg" alt="" />
        </div>
      </div>
      {isCat && (
        <div className="">
          <div className="w-[90%] absolute bg-white left-0 top-[140px] overflow-y-auto h-[500px] z-40 my-shadow2 rounded-md">
            <div className="flex md:hidden w-[90%] pl-[5%] pb-6 flex-col gap-y-3 mt-4">
              <div
                onClick={() => setIsCat(false)}
                className="flex cursor-pointer w-full justify-end"
              >
                <img src="/clear.svg" alt="" className="w-[18px] h-[18px] " />
              </div>
              <div className="flex w-full items-center mb-6 justify-between">
                <p className="text-[22px] font-semibold font-montserrat text-[#000]">
                  Категории
                </p>
              </div>
              {category?.map((c, i) => (
                <div className="flex flex-col">
                  <div
                    key={i}
                    onClick={() => toggleButton(c.id)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <p className="text-[21px] w-[80%] font-semibold text-navcolor font-montserrat">
                      {c?.name}
                    </p>
                    <div
                    // onClick={() => toggleButton(c.id)}
                    >
                      {c?.visible ? (
                        <img
                          src="/Vector (14).svg"
                          alt=">"
                          className="cursor-pointer"
                        />
                      ) : (
                        <img
                          src="/Vector (15).svg"
                          alt=">"
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                  {c?.visible &&
                    c?.data?.map((item) => (
                      <p
                        onClick={() => {
                          getProductByIdCategory(item?.id);
                          setIsCat(false);
                          window.scrollTo({ top: 0 });
                        }}
                        className="text-[21px] pl-6 cursor-pointer font-medium  font-montserrat"
                      >
                        {item?.name}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className=" w-[92%] lg:w-[90%] mm:w-[88%] flex justify-between gap-[50px] mm:gap-[100px] mx-auto mb-24 ">
        <div className="hidden md:flex  flex-col w-[30%] mm:w-[24%]">
          <div className="hidden md:flex   justify-center py-3 items-center px-12 bg-navcolor">
            <p className="text-[22px] font-semibold font-montserrat text-white">
              Категории
            </p>
          </div>
          <div className="hidden md:flex w-[90%] pl-4 flex-col gap-y-3 mt-4">
            {category?.map((c, i) => (
              <div className="flex flex-col">
                <div
                  key={i}
                  onClick={() => toggleButton(c.id)}
                  className="flex cursor-pointer items-center justify-between"
                >
                  <p className="text-[14px] lg:text-[16px] mm:text-[18px] w-[80%] font-semibold font-montserrat">
                    {c?.name}
                  </p>
                  <div
                  // onClick={() => toggleButton(c.id)}
                  >
                    {c?.visible ? (
                      <div className="w-[14px] h-[14px]">
                        <img
                          src="/Vector (14).svg"
                          alt=">"
                          className="cursor-pointer w-full h-full"
                        />
                      </div>
                    ) : (
                      <img
                        src="/Vector (15).svg"
                        alt=">"
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                {c?.visible &&
                  c?.data?.map((item) => (
                    <p
                      onClick={() => getProductByIdCategory(item?.id)}
                      className="text-[16px] mm:text-[18px] pl-6 cursor-pointer font-medium  font-montserrat"
                    >
                      {item?.name}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col px-[2%] w-[70%]">
          <div className="flex md:flex-row flex-col gap-y-2 mb-4 justify-between md:items-center">
            <p className="text-[18px] mm:text-[21px] text-navcolor font-medium font-montserrat">
              Показ всех 4 элементов
            </p>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="поиск..."
              className="placeholder:text-navcolor outline-none mm:w-[280px] py-2 px-1 mm:px-4 bg-transparent border rounded text-[18px] mm:text-[21px] text-navcolor font-medium font-montserrat"
            />
            <select className="outline-none mm:w-[280px] py-3 px-1 mm:px-4 bg-transparent border rounded text-[18px] mm:text-[21px] text-navcolor font-medium font-montserrat">
              <option>Исходная сортировка</option>
              <option>По популярности</option>
              <option>По возрастанию цены</option>
              <option>По убыванию цены</option>
            </select>
          </div>
          <div
            className={`${
              products?.length > 0
                ? "grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"
                : "flex"
            } `}
          >
            {products?.length > 0 ? (
              products?.map((c, i) => (
                <div className="flex flex-col shadow-md rounded-lg" key={i}>
                  <div>
                    <Swiper
                      pagination={true}
                      navigation
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      color="red"
                    >
                      {c?.product?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="h-[212px] md:h-[300px]">
                            <img
                              src={item?.img}
                              className="h-full w-full object-cover rounded-lg"
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
                      {parseInt(c?.price) > 0 ? c?.price + " " : "Договорная"}
                    </p>
                    <div
                      onClick={() => sendCatalog(c?.id, c?.name)}
                      className="my-4 flex justify-center"
                    >
                      <MyButton title={"Подробнее"} class1={"px-12 mm:px-20"} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full justify-center items-center h-[100px] my-12 border border-mainColor rounded-lg">
                <p className="text-[20px] md:text-[22px] lg:text-[28px] text-mainColor">
                  Нет продукта
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile products */}
        <div className="w-full md:hidden flex flex-col ">
          <div className="flex sm:flex-row flex-col gap-y-6 mb-4 justify-between md:items-center">
            <p className="text-[18px] mm:text-[21px] text-navcolor font-medium font-montserrat">
              Показ всех 4 элементов
            </p>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="поиск..."
              className="placeholder:text-navcolor outline-none mm:w-[280px] py-2 px-2 mm:px-4 bg-transparent border rounded text-[18px] mm:text-[21px] text-navcolor font-medium font-montserrat"
            />

            <select className="outline-none mm:w-[280px] py-3 px-1 mm:px-4 bg-transparent border rounded text-[18px] mm:text-[21px] text-navcolor font-medium font-montserrat">
              <option>Исходная сортировка</option>
              <option>По популярности</option>
              <option>По возрастанию цены</option>
              <option>По убыванию цены</option>
            </select>
          </div>
          <div
            className={`${
              products?.length > 0
                ? "w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4"
                : "flex"
            } `}
          >
            {products?.length > 0 ? (
              products?.map((c, i) => (
                <div className="flex flex-col shadow-md rounded-lg" key={i}>
                  <div>
                    <Swiper
                      pagination={true}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {c?.product?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="h-[212px] md:h-[300px]">
                            <img
                              src={item?.img}
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
                    <div
                      onClick={() => sendCatalog(c.id, c?.name)}
                      className="my-4 flex justify-center"
                    >
                      <MyButton title={"Подробнее"} class1={"px-12 mm:px-20"} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full justify-center items-center h-[100px] my-12 border border-mainColor rounded-lg">
                <p className="text-[20px] md:text-[22px] lg:text-[28px] text-navcolor">
                  Нет продукта
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <PaginationBar pageSize={pageSize} setPageId={setPageId} />

      <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto mt-16 sm:mt-0">
        <div className="flex gap-3 mb-6 items-center">
          <div className="w-[8px] h-[43px] bg-mainColor " />
          <p className="text-[#313131] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
            Другие товары
          </p>
        </div>

        <div
          className={`${
            products?.length > 0
              ? "grid grid-cols-1 sm:grid-cols-2 mb-28 lg:grid-cols-3 my-8 gap-x-4 gap-y-4"
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
                          src={item?.img}
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
                  <MyButton
                    title={"Подробнее"}
                    class1={"px-12 mm:px-20"}
                    callback={() => sendCatalog(c?.id, c?.name)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default Catalog;
