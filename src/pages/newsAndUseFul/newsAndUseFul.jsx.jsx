import React, { useEffect, useState } from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";
import HeroNews from "../User/components/HeroNews";
import Reviews from "../User/components/Reviews";
import axios from "axios";
import { url } from "../../service/url";
import { useParams } from "react-router-dom";

const NewsAndUseful = () => {
  const [news, setNews] = useState(null)
  const {id} = useParams()
  const getNewsDetailData = async () => {
    try {
      const {data} = await axios.get(`${url}/b_sayt/api/news_deteiles_views/${id}/`)
      setNews(data[0])
      console.log(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNewsDetailData()
  }, [])
  return (
    <UserLayout title={"Новости и полезное"}>
      <div className=" mt-[188px] lg:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className=" flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto min-h-[45vh]">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                Новости и полезное
              </p>
            </div>

            <p className="text-[16px] md:w-[39%] md:text-[18px] font-medium text-lightGray mt-4" 
            dangerouslySetInnerHTML={{
              __html: news?.content,
            }}
            />
          </div>
          <div className="lg:absolute mt-4 hidden lg:flex lg:right-0 lg:mt-0 lg:w-[47%]">
            <img src={url+news?.img} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="w-[95%] mx-auto mt-[35px] lg:hidden">
            <img src={url+news?.img} alt="" className="flex w-full rounded-md h-full" />
          </div>
        </div>
      </div>

      <HeroNews />
      {/* <div className="my-12"></div> */}

      <Reviews />
    </UserLayout>
  );
};

export default NewsAndUseful;
