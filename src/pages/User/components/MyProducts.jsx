import axios from "axios";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { url } from "../../../service/url";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const MyProducts = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/product_list_views/`
      );
      setProduct(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Change when the element triggers the animation (0 = at the top of the window)
    });
  }, []);

  const toggleCard2 = (cardId) => {
    console.log(cardId);
    setProduct((prevCards) =>
      prevCards.map((card) =>
        card?.id === cardId ? { ...card, visible: true } : card
      )
    );
  };
  const toggleCard = (cardId) => {
    console.log(cardId);
    setProduct((prevCards) =>
      prevCards.map((card) =>
        card?.id === cardId ? { ...card, visible: false } : card
      )
    );
  };
  const sendCatalog = (id) => {
    console.log(id);
    navigate(`/catalog/${id}`);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="lg:mt-[300px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor" />
        <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          Наша продукция
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3 sticky">
        {product?.map(
          (c, index) =>
            index < 2 && (
              <div
                className="shadow-2xl rounded-lg  gap-y-3 border"
                onMouseEnter={() => toggleCard2(c?.id)}
                onMouseLeave={() => toggleCard(c?.id)}
              >
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
                <div
                  className="flex flex-col my-6 md:hidden"
                  data-aos="fade-up"
                >
                  <div className="h-[53px] flex items-start justify-center">
                    <p className="text-center line-clamp-2 text-navcolor text-[17px] md:text-[19px] font-semibold">
                      {c?.name}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <MyButton
                      title={"В каталог"}
                      class1={"font-semibold text-[18px] px-12 border"}
                      callback={() => sendCatalog(c?.id)}
                    />
                  </div>
                </div>
                {c?.visible && (
                  <div className="hidden md:flex flex-col my-6 ">
                    <div
                      className="h-[53px] flex items-start justify-center"
                      data-aos="fade-up"
                    >
                      <p className="text-center line-clamp-2 text-navcolor text-[17px] md:text-[19px] font-semibold">
                        {c?.name}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <MyButton
                        title={"В каталог"}
                        class1={"font-semibold text-[18px] px-12 border"}
                        callback={() => sendCatalog(c?.id)}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MyProducts;
