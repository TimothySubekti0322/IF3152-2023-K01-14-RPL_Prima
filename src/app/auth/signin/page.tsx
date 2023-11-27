"use client";

import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Loader from "./Loader";

interface Form {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Signin = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  // Check if user is already logged in
  useLayoutEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (token) {
      window.location.href = "/dashboard/class";
    } else {
      setLoading(false);
    }
  }, []);

  // Handle Form
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, rememberMe: !form.rememberMe });
  };

  //handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingSubmit(true);
    try {
      const res = await axios.post("/api/auth/", form);
      console.log(res.data);
      if (res.data.status === 200) {
        console.log(res.data);
        const cookies = new Cookies();
        if (res.data.rememberMe) {
          cookies.set("token", res.data.token, {
            path: "/",
            expires: new Date(Date.now() + 12096e5),
          });
          cookies.set("payload", res.data.payload, {
            path: "/",
            expires: new Date(Date.now() + 12096e5),
          });
        } else {
          cookies.set("token", res.data.token, { path: "/" });
          cookies.set("payload", res.data.payload, { path: "/" });
        }
        setEmailError(false);
        setPasswordError(false);
        if (res.data.payload.role === "Admin") {
          window.location.href = "/dashboard/student";
        } else {
          window.location.href = "/dashboard/class";
        }
      } else if (res.data.status === 404) {
        setEmailError(true);
      } else if (res.data.status === 401) {
        setPasswordError(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col sm:flex-row-reverse h-screen w-screen bg-[#1D2333] sm:bg-white">
          {/* Image Section */}
          <section className="flex justify-center items-center sm:w-1/2 sm:bg-[#1D2333]">
            <div className="p-4 flex-1 flex justify-center items-center sm:px-48 sm:h-full">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-56 sm:w-full"
              />
            </div>
          </section>

          {/* Form Section */}

          <section className="flex flex-col px-8 sm:flex-1 sm:pt-12 xl:pt-20 2xl:pt-40 sm:px-24">
            <form onSubmit={handleSubmit}>
              <p className="hidden sm:block text-[#1D2333] text-5xl font-bold">
                Sign In
              </p>

              {/* email */}
              <div className="flex flex-col sm:mt-10">
                <label
                  htmlFor="email"
                  className="font-bold text-lg sm:text-[#1D2333]"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  className={`p-2 border border-gray-300 ${
                    emailError && "border-red-500 border-2"
                  } rounded-md mt-4 text-[#1C2434] sm:bg-[#1C2434] sm:text-[#E5E5E5] 2xl:py-4 2xl:px-4`}
                  onChange={handleInputChange}
                  required
                />
                <i className="text-red-700">
                  {emailError && "Email not registered"}
                </i>
              </div>

              {/* Password input */}
              <div className="flex flex-col mt-8 sm:mt-10">
                <label
                  htmlFor="email"
                  className="font-bold text-lg sm:text-[#1D2333]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className={`p-2 border border-gray-300 ${
                    passwordError && "border-red-500 border-2"
                  } rounded-md mt-4 text-[#1C2434] sm:bg-[#1C2434] sm:text-[#E5E5E5] 2xl:py-4 2xl:px-4`}
                  onChange={handleInputChange}
                  required
                />
                <i className="text-red-700">
                  {passwordError && "Password incorrect"}
                </i>
              </div>

              {/* remember me */}
              <div className="flex items-center h-5 mt-8 sm:mt-10">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  onChange={handleRememberMe}
                />
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="rememberMe"
                    className="text-white sm:text-[#1D2333] sm:text-base"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#83CE71] mt-8 rounded-md text-[#1C2434] font-bold sm:mt-10"
              >
                {loadingSubmit ? (
                  <div className="flex flex-row gap-x-2 justify-center items-center">
                    <span className="loading loading-spinner loading-sm md:loading-md"></span>
                    <p className="text-sm md:text-base">Loading</p>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Signin;
