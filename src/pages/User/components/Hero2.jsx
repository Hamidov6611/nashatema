import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const Hero2 = () => {
  const navigate = useNavigate()
  const sendContact = () => {
    navigate('/contact')
    window.scrollTo({top: 200})
  }
  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col  ">
      <div className="relative flex w-full flex-col lg:flex-row">
        <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[8px] h-[43px] bg-mainColor " />
            <h1 className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
              О нашей компании
            </h1>
          </div>
          <span className="text-[16px] md:w-[50%] md:text-[18px] font-medium text-lightGray mt-4">
          Наша компания была создана с целью помочь покупателям железобетонных изделий найти нужную продукцию в кратчайшие сроки и по разумным ценам.  
          </span>
          <span className="text-[16px] md:w-[50%] md:text-[18px] font-medium text-lightGray mt-4">
          Мы собрали наиболее полный справочник ЖБИ который будет полезен проектным институтам, строительным компаниям и торгующим организациям.  
          </span>
          <span className="text-[16px] md:w-[50%] md:text-[18px] font-medium text-lightGray mt-4">
          На нашем сайте Вы найдёте описание изделий, размеры и ГОСТы по которым они производятся.  
          </span>
          

          <div className="mt-[6%]">
            <MyButton title={"Оставить заявку"} callback={sendContact} />
          </div>
        </div>
        <div className="lg:absolute mt-4 hidden lg:flex lg:right-0 lg:mt-0 lg:w-[47%]">
          <img src="/Фотка.svg" alt="" className="w-full h-full" />
        </div>
        <div className="w-[90%] mr-0 ml-[10%] mt-[35px] lg:hidden flex justify-end ">
          <img src="/Фотка.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
