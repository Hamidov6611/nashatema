import React, { useEffect, useState } from "react";
import { completed } from "../../../data";
import { url } from "../../../service/url";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import MyButton from "./MyButton";
import { Select } from "@mui/material";

const Completed = () => {
  const [arr, setArr] = useState(completed);
  const [data, setData] = useState([]);
  const [work, setWork] = useState([]);
  const [workId, setWorkId] = useState(Number);
  const getData = async () => {
    const { data } = await axios.get(
      `${url}/b_sayt/api/jobs_categoryn_list_views/`
    );
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleButton = (id) => {
    id != "all" && (arr[0].visible = false);
    console.log(id);
    setData((prevCards) =>
      prevCards.map((card) =>
        card?.id === id
          ? { ...card, visible: true }
          : { ...card, visible: false }
      )
    );
    setArr((prevCards) =>
      prevCards.map((card) =>
        card?.id === id
          ? { ...card, visible: true }
          : { ...card, visible: false }
      )
    );
    id != "all" ? sortByCategoryName(id) : getWorkData();
  };

  const getWorkData = async () => {
    try {
      const { data } = await axios.get(`${url}/b_sayt/api/jobs_list_views/`);
      setWork(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkData();
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Change when the element triggers the animation (0 = at the top of the window)
    });
  }, []);

  const toggleWork = (id) => {
    setWork((prevCards) =>
      prevCards.map((card) =>
        card?.id === id ? { ...card, visible: true } : card
      )
    );
  };

  const toggleWorkOver = (id) => {
    setWork((prevCards) =>
      prevCards.map((card) =>
        card?.id === id ? { ...card, visible: false } : card
      )
    );
  };

  async function sortByCategoryName() {
    try {
      if (workId) {
        const { data } = await axios.get(
          `${url}/b_sayt/api/jobs_category_get_views${parseInt(workId)}/`
        );
        setWork(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    sortByCategoryName();
  }, [workId]);


  console.log(workId)

  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor" />
        <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          ВЫПОЛНЕННЫЕ РАБОТЫ
        </p>
      </div>

      <div className="md:hidden w-full">
        <select
          className="w-full md:hidden outline-none bg-transparent border-navcolor text-navcolor border-2 py-3 px-2 rounded-md"
          onChange={(e) => setWorkId(e.target.value)}
        >
          {data?.map((item, index) => (
            <option
              key={index}
              value={item?.id}
              className="px-[2%] text-navcolor font-medium  my-1 text-[15px]"
            >
              {item?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden md:flex flex-row flex-wrap gap-x-4 gap-y-4">
        {arr.slice(0, 1)?.map((c, index) =>
          c.visible ? (
            <div
              onClick={() => toggleButton(c?.id)}
              key={index}
              className="rounded h-[48px] cursor-pointer text-white hover:text-navcolor hover:border-white flex items-center justify-center my-shadow-red border-mainColor border px-6 md:px-12"
            >
              <p className="font-medium text-[18px]">{c?.title}</p>
            </div>
          ) : (
            <div
              onClick={() => toggleButton(c?.id)}
              key={index}
              className="rounded h-[48px] cursor-pointer flex items-center text-navcolor hover:text-white transition-all duration-150 ease-in-out justify-center my-shadow hover:border-mainColor  border px-6 md:px-12"
            >
              <p className="font-medium text-[18px] ">{c?.title}</p>
            </div>
          )
        )}
        {data?.map((c, index) =>
          c.visible ? (
            <div
              onClick={() => toggleButton(c?.id)}
              key={index}
              className="rounded h-[48px] cursor-pointer text-white hover:text-navcolor hover:border-white flex items-center justify-center my-shadow-red border-mainColor border px-6 md:px-12"
            >
              <p className="font-medium text-[18px]">{c?.name}</p>
            </div>
          ) : (
            <div
              onClick={() => toggleButton(c?.id)}
              key={index}
              className="rounded h-[48px] cursor-pointer flex items-center text-navcolor hover:text-white transition-all duration-150 ease-in-out justify-center my-shadow hover:border-mainColor  border px-6 md:px-12"
            >
              <p className="font-medium text-[18px]">{c?.name}</p>
            </div>
          )
        )}
      </div>

      <div className="mt-6 grid gap-x-4 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {work?.map((item, index) => (
          <div
            onMouseEnter={() => toggleWork(item?.id)}
            onMouseLeave={() => toggleWorkOver(item?.id)}
            key={index}
            className="flex flex-col h-[400px] md:h-[600px] rounded-xl"
          >
            <div className="h-[60%]">
              <img src={url + item?.img} className="h-full w-full" />
            </div>
            {item?.visible && (
              <div
                data-aos="fade-up"
                className="h-[40%] gap-y-2 w-full flex flex-col items-center justify-center"
              >
                <p className="text-[18px] md:text-[20px] text-navcolor font-semibold font-montserrat">
                  {item?.title}
                </p>
                <p className="line-clamp-1 text-[15px] md:text-[16px] text-navcolor font-medium font-montserrat">
                  {item?.content}
                </p>
                <MyButton title={"подробнее"} class1={"capitalize px-12"} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Completed;
