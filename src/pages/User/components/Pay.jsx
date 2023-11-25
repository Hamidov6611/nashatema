import React, { useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import emailjs from "@emailjs/browser";

import MyButton from "./MyButton";
import { toast } from "react-toastify";

const Pay = ({ setIsPay, basket }) => {
  const form = useRef();
  const [sendData, setSendData] = useState({
    user_name: "",
    last_name: "",
    phone: "",
    context: "",
  });
  const InputChange = (e) => {
    const { name, value } = e.target;
    setSendData({ ...sendData, [name]: value });
  };
  const closeModal = () => setIsPay(false);
  const submitHandler = () => {
    emailjs
      .sendForm(
        "service_l60yge3",
        "template_v4x3mz2",
        form.current,
        "fE6GEC9nsyangEtJE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setIsPay(false)
      toast.success("Благодарим за ваш заказ, в ближайшее время с вами свяжется наш менеджер")
  };
  function calculateTotal(basket) {
    let total = 0;

    for (let i = 0; i < basket.length; i++) {
      const product = basket[i];

      // "price" ni numberga o'tkazib olish
      const price = parseFloat(product.price);

      // Agar "price" number bo'lsa, jami summasini qo'shamiz
      if (!isNaN(price)) {
        total += price * parseInt(product.count, 10); // count ni numberga o'tkazib olish
      }
    }

    return total;
  }
  let totalSum = calculateTotal(basket);
  let text = "";
  let sum = 0;

  basket?.map((c, idx) => {
    console.log(typeof parseInt(c.count));
    if (
      typeof parseInt(c.price) == "number" &&
      typeof parseInt(c.count) == "number"
    ) {
      sum += parseInt(c?.price) * parseInt(c?.count);
    }
    text += `${idx + 1}) name: ${c?.name} | price: ${c.price ? c?.price : "Договорная"} | count: ${
      c.count
    } \n`;
  });

  let send = `Имя: ${sendData.user_name}, Фамилия: ${sendData.last_name}, Тел: ${sendData.phone}, Комментарий: ${sendData.context} \n ${text} \n ИТОГО: ${totalSum} + "Договорная" Если там есть`;
  return (
    <div className="fixed w-full h-screen top-0 left-0 flex justify-center items-center bg-black/80 z-10">
      <form
        ref={form}
        className="lg:w-[40%] w-[95%] md:w-[80%] p-6 relative min-h-[44vh] bg-white z-[9999] rounded-lg border"
      >
        <div
          className="flex w-full justify-end cursor-pointer text-[#FF5C17] hover:text-navcolor"
          onClick={closeModal}
        >
          <AiOutlineCloseCircle size={24} />
        </div>
        <p className="text-center text-[20px] md:text-[28px] font-montserrat font-medium text-navcolor">
          Оформить заказ
        </p>
        <div className="mt-4 flex flex-col gap-y-2">
          <textarea
            name="message"
            value={send}
            className="hidden"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            name="user_email"
            type="hidden"
            className="hidden"
            value={"example@gmail.com"}
          />
          <input
            value={sendData.user_name}
            name="user_name"
            onChange={InputChange}
            type="text"
            required
            className="outline-none border-navcolor px-3 placeholder:text-navcolor border-2 rounded-md py-2"
            placeholder="Имя"
          />
          <input
            value={sendData.last_name}
            name="last_name"
            onChange={InputChange}
            type="text"
            required
            className="outline-none border-navcolor px-3 placeholder:text-navcolor border-2 rounded-md py-2"
            placeholder="Фамилия"
          />
          <input
            value={sendData.phone}
            name="phone"
            onChange={InputChange}
            type="text"
            required
            className="outline-none border-navcolor px-3 placeholder:text-navcolor border-2 rounded-md py-2"
            placeholder="Номер телефона"
          />
          <textarea
            value={sendData.context}
            name="context"
            onChange={InputChange}
            required
            className="outline-none border-navcolor px-3 placeholder:text-navcolor border-2 rounded-md py-2 resize-none"
            id=""
            placeholder="Комментарий"
          ></textarea>
        </div>
        <div className="w-full mt-4 flex justify-center">
          <MyButton
            title={"Оформить"}
            callback={submitHandler}
            class1={"rounded-md border-2"}
          />
        </div>
      </form>
    </div>
  );
};

export default Pay;
