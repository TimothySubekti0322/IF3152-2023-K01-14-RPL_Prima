"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { FiEyeOff, FiEye } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookie from "universal-cookie";

interface FormDataTypes {
  password: string;
}

const ChangePassword = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<FormDataTypes>({
    password: "",
  });

  const [currentPassword, setCurrentPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Password visibility toogle Condition
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [password2Visible, setPassword2Visible] = useState<boolean>(false);

  // Fetching Data
  const Cookies = new Cookie();
  const token = Cookies.get("token");
  const id = Cookies.get("payload").id;

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCurrentPassword(res.data.data.password);
      } catch (err) {
        toast.error("Error fetching data");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };

  // Submit Handler
  const [submitAvailable, setSubmitAvailable] = useState(false);

  useLayoutEffect(() => {
    if (form.password !== undefined && confirmPassword !== "") {
      setSubmitAvailable(true);
    } else {
      setSubmitAvailable(false);
    }
  }, [form, confirmPassword]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      event.preventDefault();
      if (form.password !== confirmPassword) {
        toast.error("Password does not match");
        return;
      }
      const res = await axios.patch(`/api/user/changepassword/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success("Data updated successfully");
      }
      setLoading(false);
      setForm({
        password: "",
      });
      setTimeout(() => {
        window.location.reload();
      }, 500); // Delayed by 2000 milliseconds (2 seconds)
    } catch (err) {
      console.log(err);
      setTimeout(toast.error("Something went wrong"), 100);
      setLoading(false);
      setForm({
        password: "",
      });
      setTimeout(() => {
        window.location.reload();
      }, 500); // Delayed by 2000 milliseconds (2 seconds)
    }
  };
  return (
    <>
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="md:p-12 p-6">
            <Title />

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <section className="bg-white mt-4 md:mt-8 rounded-md p-6 md:p-10">
                <div className="w-full flex flex-col gap-y-8">
                  {/* Current password*/}
                  <div className="flex flex-col">
                    <label
                      htmlFor="current_password"
                      className="font-bold text-xl"
                    >
                      Current Password
                    </label>
                    <input
                      type="text"
                      name="current_password"
                      id="current_password"
                      className="w-full md:w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 bg-gray-300 text-gray-600"
                      defaultValue={currentPassword}
                      disabled={true}
                    />
                  </div>

                  {/* New Password */}
                  <div className="flex flex-col">
                    <label htmlFor="password" className="font-bold text-xl">
                      New Password
                    </label>
                    <div className="w-full md:w-4/5 relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        className=" w-full rounded-lg border-2 border-[#B7B7B7] mt-4"
                        onChange={handleInputChange}
                      />
                      <button
                        className="absolute right-4 top-6"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        type="button"
                      >
                        {passwordVisible ? (
                          <FiEye style={{ fontSize: "1.5rem" }} />
                        ) : (
                          <FiEyeOff style={{ fontSize: "1.5rem" }} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm new Password */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="confirm_password"
                      className="font-bold text-xl"
                    >
                      Confirm New Password
                    </label>
                    <div className="w-full md:w-4/5 relative">
                      <input
                        type={password2Visible ? "text" : "password"}
                        name="confirm_password"
                        id="confirm_password"
                        className="w-full rounded-lg border-2 border-[#B7B7B7] mt-4"
                        onChange={handleConfirmPasswordChange}
                      />
                      <button
                        className="absolute right-4 top-6"
                        onClick={() => setPassword2Visible(!password2Visible)}
                        type="button"
                      >
                        {password2Visible ? (
                          <FiEye style={{ fontSize: "1.5rem" }} />
                        ) : (
                          <FiEyeOff style={{ fontSize: "1.5rem" }} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="w-full flex justify-center items-center">
                    <button
                      type="submit"
                      className={` ${
                        !submitAvailable ? "bg-[#B7B7B7]" : "bg-[#3C50E0]"
                      } text-white font-semibold text-base rounded-lg py-2 px-4 md:text-xl md:py-3 md:px-10`}
                      disabled={!submitAvailable ? true : false}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </section>
            </form>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default ChangePassword;
