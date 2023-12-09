import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp, FaTelegram, FaPhone, FaTimes, FaVk, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './index.css'

const UserLayout = ({ children, title, desc, h1 }) => {
  const [isContact, setIsContact] = useState(true);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <h1>{h1}</h1>
      </Helmet>

      <header>
        <Navbar />
      </header>
      <main className="w-[100%] flex flex-row justify-between">
        <div className="w-[100%]">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>

      {!isContact && (
        <div className="fixed z-[9999] right-[3%] md:right-[1%] top-[62vh] md:top-[65vh] lg:top-[68vh] gap-y-2 mr-[-4px] flex flex-col items-center justify-center">
          <Link
            to={"https://t.me/+79812588511"}
            className={`border-2 text-primary hover:transition-all duration-200 hover:scale-110 cursor-pointer ease-in-out hover:border-navcolor hover:text-navcolor border-primary hover:bg-primary w-[50px] h-[50px] rounded-full bg-navcolor flex items-center justify-center`}
          >
            <FaTelegram fontSize={"20px"} />
          </Link>
          <Link
            to={"https://api.whatsapp.com/send?phone=79812588511"}
            className={`border-2 text-primary hover:transition-all duration-200 hover:scale-110 cursor-pointer ease-in-out hover:border-navcolor hover:text-navcolor border-primary hover:bg-primary w-[50px] h-[50px] rounded-full bg-navcolor flex items-center justify-center`}
          >
            <FaWhatsapp fontSize={"20px"} />
          </Link>
          <Link
            to={"tel: +79812588511"}
            className={`border-2 text-primary hover:transition-all duration-200 hover:scale-110 cursor-pointer ease-in-out hover:border-navcolor hover:text-navcolor border-primary hover:bg-primary w-[50px] h-[50px] rounded-full bg-navcolor flex items-center justify-center`}
          >
            <FaPhoneAlt fontSize={"20px"} />
          </Link>
          
          <div className="w-[6px] h-[6px] rounded-full border border-navcolor bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full border border-navcolor bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full border border-navcolor bg-white"></div>
          <div
            onClick={() => setIsContact(true)}
            className={`border-2 text-primary hover:transition-all hover:border-navcolor duration-200 hover:scale-110 cursor-pointer ease-in-out hover:text-navcolor border-primary hover:bg-primary w-[50px] h-[50px] rounded-full bg-navcolor flex items-center justify-center`}
          >
            <FaTimes fontSize={"18px"} />
          </div>
        </div>
      )}
      {isContact && (
        <div
          onClick={() => setIsContact(false)}
          className={`rotateIn fixed z-[9999] right-[3%] md:right-[1%] top-[90vh] border-2 text-primary hover:transition-all duration-200 hover:scale-110 cursor-pointer ease-in-out hover:text-navcolor hover:border-navcolor border-primary hover:bg-primary ${
            !isContact ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"
          } rounded-full bg-navcolor flex items-center justify-center rotate-90 `}
        >
          <FaPhone fontSize={"20px"} />
        </div>
      )}
    </>
  );
};

// UserLayout.defaultProps = {
//   title: "NashaTema - Железобетонные изделия!",
//   desc: "Качественные ЖБИ изделия по ГОСТ и доставка по Санкт-Петербургу и области.",
// };

export default UserLayout;
