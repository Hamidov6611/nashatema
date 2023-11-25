import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../service/url";
import "./index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditCategory = ({ setIsOpen, getData, id }) => {
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
  const [seira, setSeira] = useState("")
  const [volume, setVolume] = useState("")
  const [scales, setScales] = useState("")
  const [height_h, setHeight] = useState("")
  const [width_b, setWidth] = useState("")
  const [length_l, setLength] = useState("")
  const [price, setPrice] = useState("")
  const [name, setName] = useState("")
  const [context, setContext] = useState("")
  
  const [cat, setCat] = useState([]);
  const [id_category, setIdCategory] = useState(Number);
  const [file, setFile] = useState(null);
  const [subData, setSubData] = useState([])
  const closeHandler = () => setIsOpen(false);
  const [idCat, setIdCat] = useState([])

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

  const getOldData = async () => {
    console.log(id)
    const {data} = await axios.get(`${url}/a_admin_panel/api/product_crud_views/${id}/`)
    // setPostData({name: data[0]?.name, price: data[0]?.price, length_l: data[0]?.length_l, width_b: data[0]?.width_b, scales: data[0]?.scales, height_h: data[0]?.height_h, context: data[0]?.context, volume: data[0]?.volume, seira: data[0]?.seira})
    setName(data[0]?.name)
    setPrice(data[0]?.price)
    setLength(data[0]?.length_l)
    setWidth(data[0]?.width_b)
    setScales(data[0]?.scales)
    setHeight(data[0]?.height_h)
    setContext(data[0]?.context)
    setVolume(data[0]?.volume)
    setSeira(data[0]?.seira)
    setFile(data[0]?.product?.img)
    setIdCategory(data[0]?.id_catgeory?.id)
    console.log(data)
  }

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const getSubCategory = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/main_category_list_views`
      );
      setSubData(data?.data?.results)
    } catch (error) {
      console.log(error);
    }
  };
  const getIdCategory = async (id) => {
    const { data } = await axios.get(
      `${url}/b_sayt/api/category_list_views/${id}/`
    );
    console.log(data)
    setIdCat(data)
  }

  useEffect(() => {
    getSubCategory();
    getCategoryData();
    getOldData()
  }, [id]);

  const editProduct = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let i = 0; i < Object.values(file).length; i++) {
        data.append("img", Object.values(file)[i]);
        console.log(Object.values(file)[i]);
      }
      data.append("id_catgeory", id_category)
      data.append("name", name);
      data.append("price", price);
      data.append("length_l", length_l);
      data.append("height_h", height_h);
      data.append("width_b", width_b);
      data.append("scales", scales);
      data.append("volume", volume);
      data.append("context", context);
      data.append("seira", seira);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.put(
        `${url}/a_admin_panel/api/product_crud_views/${id}/`,
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
        onSubmit={editProduct}
        className="rounded-md w-[90%] md:w-[50%] p-4 lg:w-[30%] h-[600px] overflow-y-auto bg-white"
      >
        <div className="w-full flex items-center justify-between text-[#343434] font-semibold text-[16px]">
          <p>Редактировать продукт</p>
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
              value={seira}
              name="seira"
              onChange={(e) => setSeira(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Серия"
            />
             <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Имя"
            />
            <input
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Цена"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-x-4 gap-y-4 text-[#343434]">
            <input
              value={length_l}
              name="length_l"
              onChange={(e) => setLength(e.target.value)}
              type="number"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Длина"
            />
            <input
              value={width_b}
              name="width_b"
              onChange={(e) => setWidth(e.target.value)}
              type="number"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Ширина"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-x-4 gap-y-4 text-[#343434]">
            <input
              value={scales}
              name="scales"
              onChange={(e) => setScales(e.target.value)}
              type="number"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Весы"
            />
            <input
              value={volume}
              name="volume"
              onChange={(e) => setVolume(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Объем"
            />
          </div>
          <input
            value={height_h}
            name="height_h"
            onChange={(e) => setHeight(e.target.value)}
            type="text"
            className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            placeholder="высота"
          />
          <CKEditor
            editor={ClassicEditor}
            data={context}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              setContext(data);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#343434] text-white font-semibold py-2 rounded-lg"
        >
          Редактировать
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
