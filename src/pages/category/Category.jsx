import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/layout/Layout";
import { IconButton, Pagination } from "@mui/material";
import axios from "axios";
import { url } from "../../service/url";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCategory from "../../Components/category/AddCategory";
import RemoveCategory from "../../Components/category/RemoveCategory";
import EditCategory from "../../Components/category/editCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [pageSize, setPageSize] = useState(Number);
  const [pageId, setPageId] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState(Number);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/a_admin_panel/api/main_category_list_views/?page=${pageId}`
      );
      setPageSize(data?.data?.count);
      console.log(data);
      setCategory(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [pageId]);
  const handleRemove = (id) => {
    setItemId(id);
    setIsRemove(true);
  };
  const handleEdit = (id) => {
    setItemId(id);
    setIsEdit(true);
  };
  return (
    <AdminLayout>
      <div className="min-h-[100vh] py-16 ">
        <div className=" w-[90%] lg:w-[98%] mx-auto mb-12 ml-[6%] sm:ml-[1%] items-center mt-2 flex justify-between">
          <p className="text-white font-semibold text-[20px]">Категория</p>
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{ cursor: "pointer" }}
          >
            <AddCircleOutlineIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
        <div class="rounded-sm  border-stroke bg-[#24303f] w-[98%] mx-auto px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
          <div class="max-w-full overflow-x-auto">
            <table class="w-full table-auto">
              <thead className="bg-[#313d4a]">
                <tr class="bg-gray-2 text-left dark:bg-meta-4">
                  <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Категория
                  </th>

                  <th class="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>

              {isOpen && (
                <AddCategory setIsOpen={setIsOpen} getData={getData} />
              )}
              {isRemove && (
                <RemoveCategory
                  setIsRemove={setIsRemove}
                  getData={getData}
                  id={itemId}
                />
              )}
              {isEdit && (
                <EditCategory
                  setIsOpen={setIsEdit}
                  getData={getData}
                  id={itemId}
                />
              )}

              <tbody>
                {category?.map((c, index) => (
                  <tr key={index}>
                    <td class="border-b border-[#eee] py-5 pl-2 dark:border-strokedark xl:pl-11">
                      <h5 class="font-medium text-black dark:text-white">
                        {c?.name}
                      </h5>
                    </td>

                    <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div class="flex items-center justify-center sm:justify-start space-x-3.5">
                        {/* <button
                          data-modal-target="authentication-modal"
                          data-modal-toggle="authentication-modal"
                          class="hover:text-primary"
                        >
                          <svg
                            class="fill-yellow-400"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button> */}
                        <button
                          onClick={() => handleRemove(c?.id)}
                          class="hover:text-primary"
                        >
                          <svg
                            class="fill-red-600"
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
                        </button>
                        <button
                          onClick={() => handleEdit(c?.id)}
                          class="hover:text-primary fill-green-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 md:mt-24 flex w-full justify-center ">
          <Pagination
            sx={{ color: "white" }}
            count={
              pageSize % 10 != 0
                ? Math.floor(pageSize / 10) + 1
                : Math.floor(pageSize / 10)
            }
            onChange={(e, value) => setPageId(value)}
            variant="outlined"
            shape="rounded"
            color="secondary"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Category;
