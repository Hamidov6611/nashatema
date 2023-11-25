import React, { useEffect, useState } from "react";
import MyButton from "./MyButton";
import axios from "axios";
import { url } from "../../../service/url";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const HeroNews = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate()
  const getNewsData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/news_objects_list_views/`
      );
      setNews(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNewsData()
  }, [])

  const topFunction = (id) => {
    navigate(`/new/${id}`);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor " />
        <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          Новости
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4 gap-y-4">
        {news?.map((item, index) => index < 3 &&   (
          <div className="flex flex-col gap-y-4 my-shadow2 rounded-[5px]">
            <div className="h-[321px]">
              <img
                src={url + item?.img}
                alt="Rectangle 99.png"
                className="w-full h-full rounded-[5px]"
              />
            </div>
            <div className="flex flex-col gap-y-2 px-3 md:px-6">
              <p className="text-[21px] w-[90%] md:text-[26px] uppercase text-navcolor font-medium md:font-semibold font-montserrat border-b-[3px] border-b-mainColor">
                {item?.title}
              </p>
              <p className="text-navcolor text-[18px] md:text-[21px] font-medium font-montserrat">
              {moment(item?.date).format("YYYY.MM.DD")}
              </p>
              <p className="text-slate-600 text-[18px] md:text-[21px] font-medium font-montserrat" 
              dangerouslySetInnerHTML={{
                __html: (item?.content )
              }}
              />
            </div>
            <div className="px-3 md:px-6 mb-4">
              <MyButton title={"Подробнее"} callback={() => topFunction(item?.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroNews;
