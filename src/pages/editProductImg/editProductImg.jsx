import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/layout/Layout";
import axios from "axios";
import { url } from "../../service/url";
import { useParams } from "react-router-dom";
import EditImage from "./editImage";
import RemoveImage from "./deleteImg";

const EditProductImg = () => {
  const [images, setImages] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [imgId, setImgId] = useState(Number);
  const [isRemove, setIsRemove] = useState(false);
  const { id } = useParams();
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/img_product_views/${id}/`
      );
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  const editHandler = (id) => {
    setImgId(id);
    setIsEdit(true);
  };
  const removeHandler = (id) => {
    setImgId(id);
    setIsRemove(true);
  };

  return (
    <AdminLayout>
      <div className="min-h-[100vh]">
        <div className=" w-[90%] md:px-6 mt-6 py-10 lg:w-[98%] mx-auto mb-12 ml-[6%] sm:ml-[1%]  md:mt-2 flex flex-col">
          <p className="text-white font-semibold text-[20px]">
            Изменить изображение продукта
          </p>
          {isEdit && (
            <EditImage id={imgId} setIsEdit={setIsEdit} getData={getData} />
          )}
          {isRemove && (
            <RemoveImage setIsRemove={setIsRemove} id={imgId} getData={getData} />
          )}
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
            {images?.map((c, index) => (
              <div key={index} className="h-[300px] relative">
                <div className="absolute right-[2%] top-[2%] flex flex-col gap-y-2">
                  <div
                    onClick={() => editHandler(c?.id)}
                    className="p-2 bg-yellow-400 rounded-lg cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                    </svg>
                  </div>
                  <div 
                  onClick={() => removeHandler(c?.id)}
                  className="p-2 bg-red-500 rounded-lg cursor-pointer">
                    <svg
                      class="fill-[#343434]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src={`${url}${c?.img}`}
                  alt="image"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditProductImg;
