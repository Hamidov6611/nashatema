import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MyRedButton from "./MyRedButton";
import { navData } from "../../../data";
import { useSelector } from "react-redux";
import img from "../../../assets/Logo (1).svg";
import axios from "axios";
import { url } from "../../../service/url";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const productCount = useSelector((state) => state.product?.products);
  const navigate = useNavigate();
  const menuHandler = () => {
    setIsMenu((prev) => !prev);
    setSearch("")
  }
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const menuHandlerClose = () => {
    setSearch("")
    setIsMenu(false);
    window.scrollTo({
      top: 0,
    });
  };
  const topFunction = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/catalog?search=${search}`)
  }
  const getSearchData = async (search) => {
    setSearch(search)
    console.log(search)
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/product_filter_view/?search=${search}`
      );
      setData(data?.results)
      console.log(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  const sendCatalog = async (id, name) => {
    setIsMenu(false)
    navigate(`/catalog/${id}/${name?.replace(/\//g, "").replace(" ", "_")}`);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="w-[100%]  flex flex-col ">
      <div className="w-[92%] dd:w-[90%] hidden lg:flex mm:w-[88%] mx-auto h-[117px] items-center bg-navcolor rounded-b-[20px]">
        <div className="flex flex-row items-center justify-between gap-x-4 w-full px-[2%] mm:px-[4%]">
          <div className="flex gap-3 items-center">
            <img src="/Vector.svg" alt="" />
            <p className="text-white font-montserrat leading-normal text-[18px] md:text-[20px]">
              Деревня Янино 2, Лен Обл.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/Vector (1).svg" alt="" />
            <Link
              to="mailto:info@naschatema.ru"
              className="text-white font-montserrat hidden mm:block leading-normal text-[18px] md:text-[20px]"
            >
              info@naschatema.ru
            </Link>
          </div>
          <Link
            to={"/"}
            onClick={topFunction}
            className="w-[160px] dd:w-[223px] h-[74px]"
          >
            <img src="/Logo (1).svg" className="w-full h-full" alt="" />
          </Link>
          <div className="flex gap-3 items-center">
            <img src="/Vector (3).svg" alt="" />
            <Link
              to={"tel: +79812588511"}
              className="text-white font-montserrat hidden mm:block leading-normal text-[18px] md:text-[20px]"
            >
              +79812588511
            </Link>
          </div>
          <MyRedButton
            title={"Обратный звонок"}
            callback={() => {
              navigate("/contact");
              window.scrollTo({ top: 200 });
            }}
          />
        </div>
      </div>
      <div className="w-full bg-navcolor fixed top-0 left-0 h-[98px] rounded-b-[10px] flex items-center justify-between px-[6%] lg:hidden z-50">
        <Link to={"/"} onClick={topFunction}>
          <img src={img} alt="" className="w-[157px]" />
        </Link>
        <div onClick={menuHandler} className="cursor-pointer">
          <img src="/Vector (4).svg" alt="" className="w-[21px] h-[15px]" />
        </div>
        {isMenu && (
          <div className="absolute top-[40px] right-0 z-20 rounded-[10px] w-[90%] flex flex-col lg:hidden min-h-[480px] bg-white shadow-3xl">
            <div className="w-full flex justify-around items-center h-[100px] px-[3%]">
              <Link to={"/"}>
                <img src="/Logo (2).svg" alt="" className="w-[213px]" />
              </Link>
              <div onClick={menuHandler} className="cursor-pointer">
                <img
                  src="/Vector (5).svg"
                  alt=""
                  className="w-[18px] h-[18px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-3 px-[8%] w-full mt-[20px] text-[#313131]/70 font-medium text-[20px] font-montserrat">
              <form onSubmit={handleSubmit}>
              <input
                value={search}
                onChange={(e) => getSearchData(e.target.value)}
                  type="text"
                  className="border-2 border-[#313131] rounded-md py-1 px-1 placeholder:text-[#313131]"
                  placeholder="Поиск продукта..."
                />
                {data?.length > 0 && search?.length > 0 && (
                  <div className="w-full h-[60vh] overflow-y-auto bg-white absolute border p-3 rounded-md left-0 top-[170px] z-20 flex flex-col">
                  {data?.map((c, i) => (
                    <div key={i} className="z-30 border-b border-navcolor">
                      <div className="w-24 h-24">
                        <img src={c?.product[0]?.img} alt="" className="w-full h-full" />
                      </div>
                        <p className="text-[14px] font-montserrat text-blue-700 cursor-pointer" onClick={() => sendCatalog(c?.id, c?.name)}>{c?.name}</p>
                        <p className="text-[12px] font-normal line-clamp-6 mb-3">{c?.description}</p>
                    </div>
                  ))}
                </div>
                )}
              </form>
              <Link onClick={menuHandlerClose} to={"/"}>
                Главная
              </Link>
              <Link onClick={menuHandlerClose} to={"/about-us"}>
                О компании
              </Link>
              <Link onClick={menuHandlerClose} to={"/catalog"}>
                Каталог товаров
              </Link>
              <Link onClick={menuHandlerClose} to={"/new"}>
                Новости и полезное
              </Link>
              <Link onClick={menuHandlerClose} to={"/contact"}>
                Контакты
              </Link>
              <Link onClick={menuHandlerClose} to={"/basket"}>
                Корзина
              </Link>
            </div>
            <div className="flex flex-col mb-4 px-[8%] gap-y-4 mt-4">
              <div className="flex gap-x-6">
                <img
                  src="/Vector (3).svg"
                  alt=""
                  className="w-[28px] h-[28px]"
                />
                <p className="text-[#313131]/70 font-medium text-[20px] font-montserrat">
                  +79812588511
                </p>
              </div>
              <div className="flex gap-x-6">
                <img
                  src="/Vector (1).svg"
                  alt=""
                  className="w-[28px] h-[28px]"
                />
                <p className="text-[#313131]/70 font-medium text-[20px] font-montserrat">
                  info@naschatema.ru
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[84%] hidden mm:w-[70%] h-[80px] mx-auto lg:flex justify-between items-center bg-white">
        
        <nav className="flex w-full">
          <ul className="flex justify-between w-full items-center">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className={`
               text-navcolor
            font-montserrat leading-normal text-[18px] md:text-[20px]`}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                activeClassName="active"
                className={`
               text-navcolor
            font-montserrat leading-normal text-[18px] md:text-[20px]`}
              >
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                activeClassName="active"
                className={`
               text-navcolor
            font-montserrat leading-normal text-[18px] md:text-[20px]`}
              >
                Каталог товаров
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                activeClassName="active"
                className={`
               text-navcolor
            font-montserrat leading-normal text-[18px] md:text-[20px]`}
              >
                Новости и полезное
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                className={`
               text-navcolor
            font-montserrat leading-normal text-[18px] md:text-[20px]`}
              >
                Контакты
              </NavLink>
            </li>
            <li>
            <form onSubmit={handleSubmit} className="relative">
                <input
                value={search}
                onChange={(e) => getSearchData(e.target.value)}
                  type="text"
                  className="border-2 border-[#313131] rounded-md py-1 px-1 placeholder:text-[#313131]"
                  placeholder="Поиск продукта..."
                />
                {data?.length > 0 && search?.length > 0 && (
                  <div className="w-full h-[60vh] overflow-y-auto bg-white absolute border p-3 rounded-md left-0 top-[40px] z-20 flex flex-col">
                  {data?.map((c, i) => (
                    <div key={i} className="z-30 border-b border-navcolor">
                      <div className="w-24 h-24">
                        <img src={c?.product[0]?.img} alt="" className="w-full h-full" />
                      </div>
                        <p className="text-[14px] font-montserrat text-blue-700 cursor-pointer" onClick={() => sendCatalog(c?.id, c?.name)}>{c?.name}</p>
                        <p className="text-[12px] font-normal line-clamp-6 mb-3">{c?.description}</p>
                    </div>
                  ))}
                </div>
                )}
              </form>
            </li>
            <li className="flex gap-x-2">
              <NavLink
                to="/basket"
                activeClassName="active"
                className={`
               text-navcolor
            font-montserrat leading-normal text-[18px] md:text-[20px]`}
              >
                <div className="relative">
                  <img src="/Vector (2).svg" alt="" />
                  <div className="absolute  right-[-9px] top-[-12px] bg-[#FF0000] flex items-center justify-center text-white tetx-[13px] font-montserrat font-medium rounded-full w-[20px] h-[20px]">
                    <p>{productCount?.length > 0 ? productCount?.length : 0}</p>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
