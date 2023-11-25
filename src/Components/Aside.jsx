import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebar = () => setIsSidebarOpen(false);

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 absolute text-sm text-[#fff] rounded-lg sm:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="#fff"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-[70%] sm:w-[30%] md:w-[25%] lg:w-[15%] h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full relative px-3 py-4 overflow-y-auto bg-[#24303f] dark:bg-[#24303f]">
          <ul className="space-y-2 font-medium">
            <li className="w-full h-full flex justify-center items-center mb-8">
              <img src="/Logo.svg" alt="" />
            </li>
            <li>
              <Link
                to={"/category"}
                onClick={handleSidebar}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Категория</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/sub-category"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Подкатегория
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </Link>
            </li>
            <li>
              <Link
                to={"/product"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 1a9 9 0 00-9 9a9 9 0 009 9a9 9 0 009-9a9 9 0 00-9-9zm-1 1a8 8 0 100 16a8 8 0 000-16z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 7.414V10a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="ml-3">Продукт</span>
              </Link>
            </li>
            <li>
              <Link to={'/work-cat'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                className="h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  
                  viewBox="0 0 34 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01522 7.07692H25.9861M8.01522 7.07692C7.08332 7.07692 6.6162 7.07692 6.26026 7.26137C5.94717 7.42362 5.6928 7.68232 5.53327 8.00075C5.35191 8.36276 5.35191 8.837 5.35191 9.78478V18.5848C5.35191 20.4803 5.35191 21.4283 5.71463 22.1523C6.03369 22.7892 6.54243 23.307 7.16862 23.6315C7.8798 24 8.81128 24 10.6715 24H23.3273C25.1875 24 26.1176 24 26.8288 23.6315C27.455 23.307 27.966 22.7891 28.2851 22.1522C28.6474 21.4289 28.6474 20.4828 28.6474 18.5909V9.76943C28.6474 8.83187 28.6474 8.3608 28.4671 8.00075C28.3075 7.68232 28.052 7.42362 27.7389 7.26137C27.3829 7.07692 26.918 7.07692 25.9861 7.07692M8.01522 7.07692H5.31082C3.89795 7.07692 3.19194 7.07692 2.79096 6.82572C2.25585 6.49049 1.95245 5.87673 2.0061 5.23988C2.04633 4.76224 2.46687 4.18458 3.30932 3.0279C3.55299 2.69335 3.67485 2.52603 3.82399 2.39829C4.02286 2.22795 4.25885 2.10699 4.5118 2.04585C4.70151 2 4.90514 2 5.31453 2H28.6839C29.0933 2 29.2974 2 29.4872 2.04585C29.7401 2.10699 29.976 2.22795 30.1749 2.39829C30.324 2.52603 30.4463 2.69257 30.69 3.02712C31.5324 4.18379 31.9537 4.76215 31.9939 5.23978C32.0476 5.87663 31.7431 6.49049 31.208 6.82572C30.807 7.07692 30.0993 7.07692 28.6864 7.07692H25.9861M13.6717 15.5385H20.3276"
                    stroke="currentColor"
                    stroke-opacity="0.8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ml-3">Категория работы</span>
              </Link>
            </li>
            <li>
              <Link to={'/work'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                className="h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  
                  viewBox="0 0 34 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01522 7.07692H25.9861M8.01522 7.07692C7.08332 7.07692 6.6162 7.07692 6.26026 7.26137C5.94717 7.42362 5.6928 7.68232 5.53327 8.00075C5.35191 8.36276 5.35191 8.837 5.35191 9.78478V18.5848C5.35191 20.4803 5.35191 21.4283 5.71463 22.1523C6.03369 22.7892 6.54243 23.307 7.16862 23.6315C7.8798 24 8.81128 24 10.6715 24H23.3273C25.1875 24 26.1176 24 26.8288 23.6315C27.455 23.307 27.966 22.7891 28.2851 22.1522C28.6474 21.4289 28.6474 20.4828 28.6474 18.5909V9.76943C28.6474 8.83187 28.6474 8.3608 28.4671 8.00075C28.3075 7.68232 28.052 7.42362 27.7389 7.26137C27.3829 7.07692 26.918 7.07692 25.9861 7.07692M8.01522 7.07692H5.31082C3.89795 7.07692 3.19194 7.07692 2.79096 6.82572C2.25585 6.49049 1.95245 5.87673 2.0061 5.23988C2.04633 4.76224 2.46687 4.18458 3.30932 3.0279C3.55299 2.69335 3.67485 2.52603 3.82399 2.39829C4.02286 2.22795 4.25885 2.10699 4.5118 2.04585C4.70151 2 4.90514 2 5.31453 2H28.6839C29.0933 2 29.2974 2 29.4872 2.04585C29.7401 2.10699 29.976 2.22795 30.1749 2.39829C30.324 2.52603 30.4463 2.69257 30.69 3.02712C31.5324 4.18379 31.9537 4.76215 31.9939 5.23978C32.0476 5.87663 31.7431 6.49049 31.208 6.82572C30.807 7.07692 30.0993 7.07692 28.6864 7.07692H25.9861M13.6717 15.5385H20.3276"
                    stroke="currentColor"
                    stroke-opacity="0.8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ml-3">Работа</span>
              </Link>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="file: h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="ml-3">Корзинка</span>
              </a>
            </li>

            <li>
              <Link
                to={"/news"}
                className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                </svg>
                <span className="ml-3">Новости</span>
              </Link>
            </li>

            <li>
              <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Выход</span>
              </a>
            </li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="absolute bottom-[3%] flex justify-end w-full right-[2%]"
          >
            <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Закрывать</span>
            </a>
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
