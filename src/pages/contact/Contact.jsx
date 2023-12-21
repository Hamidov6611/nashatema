import React, { useState } from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";
import HeroNews from "../User/components/HeroNews";
import axios from "axios";
import { url } from "../../service/url";

const Contact = () => {
  const [alert, setAlert] = useState(false);
  const [postData, setPostData] = useState({
    full_name: "",
    phone: "",
    content: "",
  });

  const InputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/b_sayt/api/forma_sayts_views/`,
        postData
      );
      console.log(data);
      setAlert(true);
      setPostData({ full_name: "", phone: "", content: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserLayout
      title={"Контакты | NashaTema! В Санкт-Петербурге и Ленинградской области"}
      desc={
        "Производство железобетонных изделий в Санкт-Петербурге и Ленинградской области"
      }
    >
      <div className=" mt-[188px] lg:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                Контакты
              </p>
            </div>
            <p className="text-[18px] md:w-[53%] md:text-[20px] text-navcolor font-medium font-montserrat">
              Нам очень важно знать мнение клиентов о нашей работе. Напишите нам
              свои пожелания или закажите обратный звонок. Мы свяжемся с вами в
              самое ближайшее время!
            </p>
            {/*  LEFT */}
            <div className="w-full flex md:flex-row my-12 md:my-20 flex-col md:ap-x-[20%] gap-y-6">
              <div className="flex w-full flex-col gap-y-4 md:px-6 py-4">
                <div className="flex gap-x-8 items-center bg-[#F5F5F5] px-4 py-3 w-full">
                  <div className="w-6 h-6">
                    <img
                      src="/Vector (3).svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[19px] md:text-[16px] 2xl:text-[22px] text-navcolor font-medium font-montserrat">
                    +79812588511, +79119278511, +79111198511, +79939878511
                  </p>
                </div>
                <div className="flex gap-x-8 items-center bg-[#fff] px-4 py-3 w-full">
                  <div className="w-6 h-6">
                    <img
                      src="/Vector (1).svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[19px] md:text-[16px] 2xl:text-[22px] text-navcolor font-medium font-montserrat">
                    info@naschatema.ru,  nashatemaspb@mail.ru
                  </p>
                </div>
                <div className="flex gap-x-8 items-center bg-[#F5F5F5] px-4 py-3 w-full">
                  <div className="sm:w-8 w-12 h-16 sm:h-8">
                    <img
                      src="/Vector (8).svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[17px] sm:text-[19px] md:text-[16px] 2xl:text-[22px] text-navcolor font-medium font-montserrat">
                    Ленинградская обл, Заневское городское поселение, ул. Янино,
                    д. 2
                  </p>
                </div>
                <div className="flex gap-x-8 items-center bg-[#fff] px-4 py-3 w-full">
                  <div className="w-6 h-6">
                    <img
                      src="/Vector (9).svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[19px] md:text-[16px] 2xl:text-[22px] text-navcolor font-medium font-montserrat">
                    ПН-ПТ 9:00 до 18:00
                  </p>
                </div>
              </div>
              {alert && (
                <div
                  id="alert-3"
                  class="flex items-center p-4 fixed top-[20px] z-50 right-[20px] mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <div class="ml-3 text-sm font-medium">
                    Ваша заявка отправлена
                  </div>
                  <button
                    onClick={() => setAlert(false)}
                    type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                    data-dismiss-target="#alert-3"
                    aria-label="Close"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <form
                onSubmit={submitHandler}
                className="flex w-full flex-col gap-y-4 shadow-md border rounded-[2px] px-6 md:px-12 py-4"
              >
                <div className="flex gap-x-4 items-center  px-4 py-2 w-full">
                  <p className="text-[19px] md:text-[16px] 2xl:text-[22px] lg:text-[33px] text-[#000] font-semibold font-montserrat">
                    Оставьте сообщение
                  </p>
                </div>

                <div className="flex flex-col gap-y-6 mt-8">
                  <div className="flex items-center">
                    <div className="absolute w-[26px] h-[29px]">
                      <img
                        src="/Vector (6).svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <input
                      value={postData.full_name}
                      name="full_name"
                      onChange={InputChange}
                      type="text"
                      className=" outline-none py-2 px-12 text-navcolor bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="absolute w-[26px] h-[29px]">
                      <img
                        src="/Vector (3).svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <input
                      value={postData.phone}
                      name="phone"
                      onChange={InputChange}
                      type="text"
                      className=" outline-none py-2 px-12 text-navcolor bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
                      placeholder="Номер телефона"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="absolute w-[26px] h-[29px]">
                      <img
                        src="/Vector (11).svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <input
                      name="content"
                      value={postData.content}
                      onChange={InputChange}
                      type="text"
                      className=" outline-none py-2 px-12 text-navcolor bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
                      placeholder="Введите ваше сообщение"
                      required
                    />
                  </div>
                </div>
                <div className="md:flex hidden justify-center items-center my-6">
                  <MyButton
                    submit={true}
                    title={"Оставить заявку"}
                    class1={"px-8 lg:px-12"}
                  />
                </div>
                <MyButton
                  submit={true}
                  title={"Оставить заявку"}
                  class1={"px-8 lg:px-12 md:hidden"}
                />
              </form>
            </div>
          </div>
        </div>
        <HeroNews />
      </div>
      <div className="w-[92%] mb-12 dd:w-[90%] flex mm:w-[88%] mx-auto">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A445e82627b076e393700b23faa09f4018a27874703d4bfbff03551ad4ac90aec&amp;source=constructor"
          className="rounded-md"
          width="100%"
          height="478"
          frameborder="0"
        ></iframe>
      </div>
    </UserLayout>
  );
};

export default Contact;
