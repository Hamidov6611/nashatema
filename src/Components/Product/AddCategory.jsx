import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../service/url";
import "./index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddCategory = ({ setIsOpen, getData }) => {
  const [postData, setPostData] = useState({
    name: "",
    price: "",
    length_l: "",
    width_b: "",
    height_h: "",
    scales: "",
    volume: "",
    context: "",
    seira:""
  });

  const [cat, setCat] = useState([]);
  const [name, setName] = useState("");
  const [id_category, setIdCategory] = useState(Number);
  const [file, setFile] = useState(null);
  const [subData, setSubData] = useState([]);
  const closeHandler = () => setIsOpen(false);
  const [idCat, setIdCat] = useState([]);

  const getCategoryData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/main_category_list_views/`
      );
      setCat(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const getSubCategory = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/main_category_list_views`
      );
      setSubData(data?.data?.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getIdCategory = async (id) => {
    const { data } = await axios.get(
      `${url}/b_sayt/api/category_list_views/${id}/`
    );
    console.log(data);
    setIdCat(data);
  };
  console.log(id_category);

  useEffect(() => {
    getSubCategory();
    getCategoryData();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let i = 0; i < Object.values(file).length; i++) {
        data.append("img", Object.values(file)[i]);
        console.log(Object.values(file)[i]);
      }
      data.append("id_catgeory", id_category);
      data.append("name", postData.name);
      data.append("price", postData.price);
      data.append("length_l", postData.length_l);
      data.append("height_h", postData.height_h);
      data.append("width_b", postData.width_b);
      data.append("scales", postData.scales);
      data.append("volume", postData.volume);
      data.append("context", postData.context);
      data.append("seira", postData.seira)
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        `${url}/a_admin_panel/api/product_list_views/`,
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

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-modal flex items-center justify-center z-50">
      <form
        onSubmit={addProduct}
        className="rounded-md w-[90%] md:w-[50%] p-4 lg:w-[30%] h-[600px] overflow-y-auto bg-white"
      >
        <div className="w-full flex items-center justify-between text-[#343434] font-semibold text-[16px]">
          <p>Добавить продукт</p>
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
        <div className="flex w-full my-8 flex-col gap-y-4">
          <label htmlFor="fileInput" className="custom-file-upload">
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files)}
              multiple
              accept="image/*"
            />
            <span>Выберите файл</span>
          </label>
          <select
            onChange={(e) => getIdCategory(e.target.value)}
            className="outline-none bg-transparent border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
          >
            <option className="text-slate-300">Категория</option>
            {subData?.map((c, i) => (
              <option value={c?.id} key={c?.id}>
                {c?.name}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setIdCategory(e.target.value)}
            className="outline-none bg-transparent border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
          >
            <option className="text-slate-300">Подкатегория</option>
            {idCat?.map((c, i) => (
              <option value={c?.id} key={c?.id}>
                {c?.name}
              </option>
            ))}
          </select>
          <div className="flex md:flex-row flex-col gap-x-4 gap-y-4 text-[#343434]">
            <input
              value={postData.seira}
              name="seira"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Серия"
            />
            <input
              value={postData.name}
              name="name"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Имя"
            />
            <input
              value={postData.price}
              name="price"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Цена"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-x-4 gap-y-4 text-[#343434]">
            <input
              value={postData.length_l}
              name="length_l"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Длина"
            />
            <input
              value={postData.width_b}
              name="width_b"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Ширина"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-x-4 gap-y-4 text-[#343434]">
            <input
              value={postData.scales}
              name="scales"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Весы"
            />
            <input
              value={postData.volume}
              name="volume"
              onChange={handleOnchange}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Объем"
            />
          </div>
          <input
            value={postData.height_h}
            name="height_h"
            onChange={handleOnchange}
            type="text"
            className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            placeholder="высота"
          />
          <CKEditor
            editor={ClassicEditor}
            data={postData.context}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              setPostData({ ...postData, context: data });
            }}
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

export default AddCategory;
