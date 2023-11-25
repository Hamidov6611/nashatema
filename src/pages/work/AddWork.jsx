import axios from "axios";
import React, { useState } from "react";
import { url } from "../../service/url";
import Cookies from "js-cookie";

const AddWork = ({ setIsOpen, getData }) => {
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState("");
  const closeHandler = () => setIsOpen(false);
  const AddWork = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(`${url}/a_admin_panel/api/jobs_category_list_views/`, {
        name,
      }, config);
      getData();
      setIsOpen(false);
      setAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-modal flex items-center justify-center z-50">
      <form
        onSubmit={AddWork}
        className="rounded-md w-[90%] md:w-[50%] p-4 lg:w-[30%] h-[220px] bg-white"
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
        {/* {alert && (
          <div
            id="alert-3"
            class="flex items-center p-4 fixed top-[20px] z-50 right-[20px] mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">Работа добавлена</div>
            <button
              onClick={() => setAlert(false)}
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-3"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )} */}
        <div className="flex w-full my-8">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
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

export default AddWork;
