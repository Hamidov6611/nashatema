import React, { useEffect, useState } from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../service/url";
import { removeProduct } from "../../store/slice/ProductSlice";
import Pay from "../User/components/Pay";

const Basket = () => {
  let product = useSelector((state) => state.product.products);
  const [isPay, setIsPay] = useState(false)
  const [count, setCount] = useState(Number);
  const dispatch = useDispatch();
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );
  const RemoveProduct = (id) => {
    console.log(id);
    dispatch(removeProduct(id));
    setBasket(JSON.parse(localStorage.getItem("product")) || []);
  };
  const sumTotal = () => {
    const totalSum = basket.reduce(
      (sum, item) => sum + parseInt(item.count) * parseInt(item.price),
      0
    );
    setCount(totalSum);
  };
  const changeSum = (e, item) => {
    let num = parseInt(e.target.value);
    let price = parseInt(item?.price);
    const total = price * num;
    console.log(total);
    setBasket((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id
          ? { ...card, itogo: total, count: e.target.value }
          : card
      )
    );
    sumTotal();
  };
  useEffect(() => {
    sumTotal();
  }, [basket]);
  console.log(basket)
  function calculateTotal(basket) {
    let total = 0;

    for (let i = 0; i < basket.length; i++) {
        const product = basket[i];

        // "price" ni numberga o'tkazib olish
        const price = parseFloat(product.price);

        // Agar "price" number bo'lsa, jami summasini qo'shamiz
        if (!isNaN(price)) {
            total += price * parseInt(product.count, 10); // count ni numberga o'tkazib olish
        }
    }

    return total;
}
let totalSum = calculateTotal(basket)
  return (
    <UserLayout
      title={"Корзина товаров | ЖБИ - NashaTema работаем в СПБ и Ленинградской области"}
      desc={
        "NashaTema - Железобетонные изделия по приятным ценнам! Санкт-Петербург и Ленинградская область"
      }
    >
      <div className=" mt-[188px] lg:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                Корзина
              </p>
            </div>
          </div>
        </div>

        {basket?.length < 1 && (
          <div className="flex w-full items-center justify-center px-8 min-h-[20vh]">
            <p className="text-navcolor font-semibold text-[18px] lg:text-[24px]">
              Нет товаров в корзине
            </p>
          </div>
        )}
        {isPay && (
          <Pay setIsPay={setIsPay} basket={basket} />
        )}
        {basket?.length > 0 && (
          <>
            <div className=" w-[92%] mm:w-[88%] mx-auto flex flex-row justify-between items-center">
              <div className="hidden md:flex justify-center items-center  w-[40%]">
                <p className="text-[20px] font-medium text-navcolor font-montserrat">
                  Товар
                </p>
              </div>
              <div className="hidden md:flex justify-center items-center  w-[20%]">
                <p className="text-[20px] font-medium text-navcolor font-montserrat">
                  Цена
                </p>
              </div>
              <div className="hidden md:flex justify-center items-center  w-[20%]">
                <p className="text-[20px] font-medium text-navcolor font-montserrat">
                  Колличество
                </p>
              </div>
              <div className="hidden md:flex justify-center items-center  w-[20%]">
                <p className="text-[20px] font-medium text-navcolor font-montserrat">
                  Итого
                </p>
              </div>
            </div>
          </>
        )}
        {basket.length > 0 &&
          basket?.map((c) => (
            <div className=" w-[92%] mm:w-[88%] relative mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center shadow-lg border  rounded p-3">
              <>
                <div
                  onClick={() => RemoveProduct(c?.id)}
                  className="absolute top-2 right-2 md:hidden w-[24px] h-[27px]"
                >
                  <img
                    src="/Vector (13).svg"
                    alt=""
                    className="w-full h-full cursor-pointer"
                  />
                </div>
                <div className="flex gap-x-4 py-8 justify-center w-full  md:w-[40%]">
                  <div className="w-[122px] h-[98px]">
                    <img
                      src={url + c?.product[0]?.img}
                      alt=""
                      className="h-full w-full rounded-md object-cover object-center"
                    />
                  </div>
                  <div className="w-[68%] flex flex-col">
                    <p className="text-[19px] md:text-[22px] font-semibold text-navcolor font-montserrat">
                      {c?.name}
                    </p>
                    <p
                      className="text-[15px] md:text-[19px] line-clamp-2 font-medium text-navcolor font-montserrat"
                      dangerouslySetInnerHTML={{
                        __html: c?.context,
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-x-8 justify-between md:hidden">
                  <div className="flex flex-col items-center gap-y-2">
                    <p className="text-[15px] font-medium text-navcolor font-montserrat">
                      Колл-во
                    </p>
                    <input
                      min={"1"}
                      type="number"
                      defaultValue={c?.count}
                      // value={count}
                      onChange={(e) => changeSum(e, c)}
                      className="w-[80px] outline-none border-navcolor border-2 rounded-md px-2"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <p className="text-[15px] font-medium text-navcolor font-montserrat">
                      Цена
                    </p>
                    <p className="text-[15px] font-medium text-navcolor font-montserrat">
                      {parseInt(c?.price)?.length > 0 ? c?.price : "Договорная"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <p className="text-[15px] font-medium text-navcolor font-montserrat">
                      Итого
                    </p>
                    <p className="text-[15px] font-medium text-navcolor font-montserrat">
                      {/* {c?.price?.length > 0
                        ? parseInt(c?.price) * count
                        : "Договорная"} */}
                      {c?.itogo
                        ? c?.itogo
                        : (c?.price && c?.count) ? parseInt(c?.price) * parseInt(c?.count) : "Договорная"}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center items-center  w-[20%]">
                  <p className="text-[20px] font-medium text-navcolor font-montserrat">
                    Договорная
                  </p>
                </div>
                <div className="hidden md:flex justify-center items-center  w-[20%]">
                  <p className="text-[20px] font-medium text-navcolor font-montserrat">
                    <input
                      min={"1"}
                      type="number"
                      defaultValue={c?.count}
                      onChange={(e) => changeSum(e, c)}
                      className="w-[80px] outline-none border-navcolor border-2 rounded-md px-2"
                    />
                  </p>
                </div>
                <div className="hidden md:flex justify-center items-center  w-[20%] relative">
                  <p className="text-[20px] font-medium text-navcolor font-montserrat">
                  {c?.itogo
                        ? c?.itogo
                        : (c?.price && c?.count) ? parseInt(c?.price) * parseInt(c?.count) : "Договорная"}
                  </p>
                  <div
                    onClick={() => RemoveProduct(c?.id)}
                    className="absolute bottom-[-30px] right-2 w-[27.27px] h-[30px] cursor-pointer"
                  >
                    <img
                      src="/Vector (13).svg"
                      alt=""
                      className="w-full h-full cursor-pointer"
                    />
                  </div>
                </div>
              </>
            </div>
          ))}
      </div>

      {basket?.length > 0 && (
        <>
          <div className="mt-[100px] flex justify-end  w-[92%] mm:w-[88%] mx-auto gap-x-12 mb-12 mr-[21%]">
            <p className="text-[19px] md:text-[21px] font-semibold text-navcolor font-montserrat">
              ИТОГО
            </p>
            <p className="text-[19px] md:text-[21px] font-semibold text-navcolor font-montserrat">
              {totalSum}₽
            </p>
          </div>
          <div className=" mb-[50px] flex justify-end flex-col md:flex-row px-4 md:px-0 md:w-[92%] mm:w-[88%] mx-auto">
            <MyButton callback={() => setIsPay(true)} title={"оформить"} class1={"uppercase px-12 lg:px-20"} />
          </div>
        </>
      )}
    </UserLayout>
  );
};

export default Basket;
