import React from "react";
import './red.css'
const MyRedButton = ({ callback, title, class1 }) => {
  return <button onClick={callback} className={`font-medium px-[20px] md:font-semibold text-[16px] md:text-[18px] my-button ${class1}`}>{title}</button>;
};

export default MyRedButton;
