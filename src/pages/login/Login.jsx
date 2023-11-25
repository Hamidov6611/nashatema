import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../service/url";
import Cookies from "js-cookie";

export const Login = () => {
  const navigate = useNavigate()
  const [postData, setPostData] = useState({ username: "", password: "" });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post(`${url}/api/token/`, postData)
      Cookies.set("token", data?.access)
      Cookies.set("admin", JSON.stringify(postData))
      navigate('/category')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-inter font-medium text-[20px]">Login</p>
              <div className="flex flex-col gap-y-3 mt-6">
                <input
                  type="text"
                  name="username"
                  value={postData.username}
                  onChange={handleOnchange}
                  className="outline-none border rounded-lg border-slate-600 py-2 px-2"
                  placeholder="Login"
                />
                <input
                  type="password"
                  name="password"
                  value={postData.password}
                  onChange={handleOnchange}
                  className="outline-none border rounded-lg border-slate-600 py-2 px-2"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="bg-slate-600 py-2 rounded-lg text-white text-[17px] font-inter font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
