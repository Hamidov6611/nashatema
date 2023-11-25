import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../../service/url";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const UseFul = () => {
  const [data, setData] = useState([]);
  const getNewsData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/news_objects_list_views/`
      );
      setData(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  const toggleCard = (cardId) => {
    setData((prevCards) =>
      prevCards.map((card) =>
        card?.id === cardId ? { ...card, visible: true } : card
      )
    );
  };
  const toggleCard2 = (cardId) => {
    setData((prevCards) =>
      prevCards.map((card) =>
        card?.id === cardId ? { ...card, visible: false } : card
      )
    );
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Change when the element triggers the animation (0 = at the top of the window)
    });
  }, []);
  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor" />
        <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          Полезное
        </p>
      </div>

      <div className="my-[30px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3">
        {data?.map((c, i) => i < 3 && (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => toggleCard(c?.id)}
            onMouseLeave={() => toggleCard2(c?.id)}
          >
            <div className=" md:h-[342px]">
              <img
                src={url + c?.img}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            {c?.visible && (
              <div 
            
              className="absolute overflow-hidden rounded-b-lg bottom-0 gap-y-1 flex flex-col items-center justify-center left-0 h-[40%] w-full bg-modal2 backdrop-brightness-75">
                <div className="flex justify-center items-center flex-col"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <p className="text-[24px] md:text-[28px] text-white text-center font-semibold font-montserrat">
                  {c?.title}
                </p>
                <Link
                  to={"/"}
                  className="text-[20px] font-semibold font-inter  text-mainColor"
                >
                  Подробный
                </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseFul;
