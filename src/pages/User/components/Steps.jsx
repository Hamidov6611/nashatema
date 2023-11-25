import React, { useState } from "react";
import MyBlackButton from "./MyBlackButton";
import CONSULTATION from "./CONSULTATION";

const Steps = () => {
  const [isConsultation, setIsConsulTation] = useState(true);
  const onConsultaion = () => setIsConsulTation(false);
  return (
    <>
      {isConsultation ? (
        <div className="lg:mt-[300px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col ">
          <div className="flex gap-3 mb-6 items-center  w-[92%] mm:w-[88%] mx-auto">
            <div className="w-[8px] h-[43px] bg-mainColor" />
            <p className="text-[#313131] uppercase text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
              ПРОСТЫе ШАГИ ДЛЯ НАЧАЛА РАБОТЫ!
            </p>
          </div>

          <div className="mt-6 px-[6%] py-[3%] min-h-[608px] w-[98%] mx-auto rounded-[20px] bg-navcolor">
            <div className="w-full  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-y-4">
              <div className="flex flex-col items-center justify-center">
                <div className="h-[203px] flex md:mr-[80px]">
                  <img
                    src="/11.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-center md:text-start text-[24px] lg:text-[30px] font-semibold uppercase font-montserrat">
                    Оставьте <span className="text-mainColor">Заявку</span>
                  </p>
                  <p className="mt-4 md:mr-[80px] font-normal text-[18px] text-center md:text-[19px] text-white">
                    И мы свяжемся с вами для обсуждения деталей
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:mt-6">
                <div className="h-[203px] md:mr-[80px]">
                  <img
                    src="/22.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-center md:text-start text-[24px] lg:text-[30px] font-semibold uppercase font-montserrat">
                    Уточним <span className="text-mainColor">Детали</span>
                  </p>
                  <p className="mt-4 md:mr-[80px] font-normal text-[18px] text-center md:text-[19px] text-white">
                    Наши менеджеры зададут уточняющие вопросы и оформят заказ.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:mt-6">
                <div className="h-[203px] md:mr-[80px]">
                  <img
                    src="/33.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-center md:text-start text-[24px] lg:text-[30px] font-semibold uppercase font-montserrat">
                    Договор И <span className="text-mainColor">Оплата</span>
                  </p>
                  <p className="mt-4 md:mr-[80px] font-normal text-[18px] text-center md:text-[19px] text-white">
                    После подписания договора и оплаты аванса заказ сразу идет в
                    производство.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[203px] md:mr-[80px]">
                  <img
                    src="/44.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-center md:text-start text-[24px] lg:text-[30px] font-semibold uppercase font-montserrat">
                    Доставка <span className="text-mainColor">Изделий</span>
                  </p>
                  <p className="mt-4 md:mr-[80px] font-normal text-[18px] text-center md:text-[19px] text-white">
                    Мы осуществляем доставку ЖБИ по всему Петербургу
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center my-[50px]">
              <MyBlackButton
                title={"Оставить заявку"}
                callback={onConsultaion}
              />
            </div>
          </div>
        </div>
      ) : (
        <CONSULTATION />
      )}
    </>
  );
};

export default Steps;
