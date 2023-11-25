import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../service/url";
import "./index.css";
import Cookies from "js-cookie";

const AddMyWork = ({ setIsOpen, getData }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [jobs_category, setJob] = useState(null);
  const closeHandler = () => setIsOpen(false);

  const getWorkData = async () => {
    try {
      const token = Cookies.get("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/jobs_category_list_views/`,
        config
      );
      console.log(data);
      setData(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const AddWork = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = new FormData();
      data?.append("title", name);
      data?.append("content", content);
      data?.append("jobs_category", jobs_category);
      data?.append("img", file);
      const res = await axios.post(
        `${url}/a_admin_panel/api/jobs_list_views/`,
        data,
        config
      );
      console.log(res);
      getData();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorkData();
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-modal flex items-center justify-center z-50">
      <form
        onSubmit={AddWork}
        className="rounded-md w-[90%] md:w-[50%] p-4 lg:w-[30%] min-h-[220px] bg-white"
      >
        <div className="w-full flex items-center justify-between text-[#343434] font-semibold text-[16px]">
          <p>Добавить работа</p>
          <svg
            onClick={closeHandler}
            className="cursor-pointer"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.468 11.468C11.2593 11.6767 11.0137 11.7808 10.7314 11.7803C10.449 11.7808 10.2035 11.6767 9.99482 11.468L6.31197 7.78515L2.62913 11.468C2.42043 11.6767 2.17466 11.781 1.89182 11.781C1.60996 11.781 1.36468 11.6767 1.15599 11.468C0.947292 11.2593 0.842699 11.0138 0.842208 10.7314C0.842699 10.4491 0.947292 10.2036 1.15599 9.99486L4.83883 6.31201L1.15599 2.62916C0.947292 2.42047 0.842945 2.1747 0.842945 1.89186C0.842945 1.61 0.947292 1.36472 1.15599 1.15602C1.36468 0.94733 1.61021 0.842737 1.89256 0.842246C2.17491 0.842737 2.42043 0.94733 2.62913 1.15603L6.31197 4.83887L9.99482 1.15603C10.2035 0.94733 10.4488 0.842983 10.7307 0.842983C11.0135 0.842983 11.2593 0.94733 11.468 1.15602C11.6767 1.36472 11.7808 1.61024 11.7803 1.89259C11.7808 2.17495 11.6767 2.42047 11.468 2.62916L7.78511 6.31201L11.468 9.99486C11.6767 10.2036 11.781 10.4488 11.781 10.7307C11.781 11.0135 11.6767 11.2593 11.468 11.468Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="my-8 w-full flex">
          <label htmlFor="fileInput" className="custom-file-upload">
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
              multiple
              accept="image/*"
            />
            <span>Выберите файл</span>
          </label>
        </div>
        <div className="flex w-full my-8">
          <select
            onChange={(e) => setJob(e.target.value)}
            type="text"
            className="outline-none border w-full py-[11px] bg-transparent border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            placeholder="Название категории"
          >
            <option disabled value="Название категории">Название категории</option>
            {data?.map((c, index) => (
              <option key={index} value={c?.id}>
                {c?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full my-8">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            placeholder="Название категории"
          />
        </div>
        <div className="flex w-full my-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="outline-none resize-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            placeholder="Название категории"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#343434] text-white font-semibold py-2 rounded-lg"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddMyWork;
