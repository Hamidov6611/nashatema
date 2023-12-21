import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../../service/url";
import img from "../../../assets/Logo (1).svg";
import { FaWhatsapp, FaTelegram, FaPhone, FaTimes, FaVk } from "react-icons/fa";

const Footer = () => {
  const [main, setMain] = useState([]);
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const getNewsData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/news_objects_list_views/`
      );
      console.log(data);
      setNews(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNewsData();
  }, []);

  const topFunction2 = (id) => {
    navigate(`/new/${id}`);
    window.scrollTo({
      top: 0,
    });
  };
  const topFunction = () => {
    window.scrollTo({ top: 0 });
  };
  const getMainCategory = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/main_category_list_views/`
      );
      setMain(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMainCategory();
  }, []);
  return (
    <div className="min-h-[370px] bg-navcolor w-full px-[5%] py-[3%]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
        <Link
          to={"/"}
          onClick={topFunction}
          className="w-full flex justify-center items-center sm:justify-start sm:items-start my-6 sm:my-0"
        >
          <img src={img} alt="" />
        </Link>
        <div className="flex flex-col gap-y-2 w-full justify-center items-center sm:justify-start sm:items-start">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[5.27px] h-[25px] bg-mainColor " />
            <p className="text-[#fff] text-[18px] md:text-[23px] uppercase font-semibold">
              Страницы
            </p>
          </div>

          <Link
            to={"/about-us"}
            onClick={topFunction}
            className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
          >
            О компании
          </Link>
          <Link
            to={"/catalog"}
            onClick={topFunction}
            className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
          >
            Каталог товаров
          </Link>
          <Link
            to={"/new"}
            onClick={topFunction}
            className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
          >
            Полезное
          </Link>
          <Link
            to={"/contact"}
            onClick={topFunction}
            className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
          >
            Контакты
          </Link>
          <Link
            to={"/new"}
            onClick={topFunction}
            className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
          >
            Новости и статьи
          </Link>
        </div>

        <div className="flex flex-col gap-y-2 w-full justify-center items-center sm:justify-start sm:items-start">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[5.27px] h-[25px] bg-mainColor " />
            <p className="text-[#fff] text-[18px] md:text-[23px] uppercase font-semibold">
              Новости
            </p>
          </div>

          {news?.map((c, i) => {
            if (i < 5) {
              return (
                <div
                  onClick={() => topFunction2(c?.id)}
                  className="text-white text-[16px] md:text-[18px] text-center md:text-start font-medium font-montserrat"
                >
                  {c?.title}
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-col gap-y-2 w-full justify-center items-center sm:justify-start sm:items-start">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[5.27px] h-[25px] bg-mainColor " />
            <p className="text-[#fff] text-[18px] md:text-[23px] uppercase font-semibold">
              Контакты
            </p>
          </div>

          <div className=" flex flex-col items-center md:items-start gap-y-3">
            <div className="flex items-center gap-x-4">
              <div className="w-[29.97px] h-[32.14px]">
                <img src="/Vector.svg" alt="" className="w-full h-full " />
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                Ленинградская обл, Заневское городское поселение, ул. Янино, д.
                2
              </p>
            </div>
            <div className="flex gap-x-4">
              <div className="w-[18.97px] h-[23.14px]">
                <img src="/Vector (1).svg" alt="" className="w-full h-full " />
              </div>
              <Link
                to="mailto:info@naschatema.ru"
                className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
              >
                info@naschatema.ru
              </Link>
            </div>
            <div className="flex gap-x-4">
              <div className="w-[18.97px] h-[23.14px]">
                <img src="/Vector (1).svg" alt="" className="w-full h-full " />
              </div>
              <Link
                to="mailto:info@naschatema.ru"
                className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal"
              >
                nashatemaspb@mail.ru
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex gap-x-4">
                <div className="w-[18.97px] h-[23.14px]">
                  <img
                    src="/Vector (3).svg"
                    alt=""
                    className="w-full h-full "
                  />
                </div>
                <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                  +79812588511
                </p>
              </div>
              <div className="flex gap-x-4">
                <div className="w-[18.97px] h-[23.14px]">
                  <img
                    src="/Vector (3).svg"
                    alt=""
                    className="w-full h-full "
                  />
                </div>
                <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                  +79119278511
                </p>
              </div>
              <div className="flex gap-x-4">
                <div className="w-[18.97px] h-[23.14px]">
                  <img
                    src="/Vector (3).svg"
                    alt=""
                    className="w-full h-full "
                  />
                </div>
                <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                  +79111198511
                </p>
              </div>
              <div className="flex gap-x-4">
                <div className="w-[18.97px] h-[23.14px]">
                  <img
                    src="/Vector (3).svg"
                    alt=""
                    className="w-full h-full "
                  />
                </div>
                <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                  +79939878511
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Link
                to={"https://t.me/+79812588511"}
                className={`border-2 text-mainColor hover:transition-all duration-200 hover:scale-110 cursor-pointer ease-in-out hover:border-navcolor hover:text-navcolor border-mainColor hover:bg-primary w-[40px] h-[40px] rounded-full bg-navcolor flex items-center justify-center`}
              >
                <FaTelegram fontSize={"20px"} />
              </Link>
              <Link
                to={"https://api.whatsapp.com/send?phone=79812588511"}
                className={`border-2 text-mainColor hover:transition-all duration-200 hover:scale-110 cursor-pointer ease-in-out hover:border-navcolor hover:text-navcolor border-mainColor hover:bg-primary w-[40px] h-[40px] rounded-full bg-navcolor flex items-center justify-center`}
              >
                <FaWhatsapp fontSize={"20px"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
