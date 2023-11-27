"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Loader from "../../../components/Loader";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import NumberInput from "../../../components/inputComponent/NumberInput";
import TextInput from "@/app/dashboard/components/inputComponent/TextInput";
import Dropdown from "../../../components/inputComponent/Dropdown";
import BackButton from "@/app/dashboard/components/BackButton";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookie from "universal-cookie";
import carType from "../../../data/carType";
import transmission from "../../../data/transmission";

interface FormDataTypes {
  email: string;
  password: string;
  phone: string;
  location: string;
  role: string;
}

const EditClass = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<FormDataTypes>({
    email: "",
    password: "",
    phone: "",
    location: "",
    role: "",
  });

  // Fetching Data
  const path = usePathname();
  const id = path.split("/")[4];

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const Cookies = new Cookie();
        const token = Cookies.get("token");
        const res = await axios.get(`/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForm({
          email: res.data.data.email,
          password: res.data.data.password,
          phone: res.data.data.phone,
          location: res.data.data.location,
          role: res.data.data.role,
        });
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

  // Handle Email Input
  const [emailError, setEmailError] = useState<boolean>(false);
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(value)) {
      setEmailError(false);
      // Update your state for email
      setForm({ ...form, [name]: value });
    } else {
      setEmailError(true);
    }
  };

  //Handle Telephone Input
  const [telephoneError, setTelephoneError] = useState(false);
  const handleTelephoneInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Check if the input is a valid 12 digit using a regular expression
    if (/^08\d{10}$/.test(value)) {
      setTelephoneError(false);
      // Update your state or variable here
      setForm({ ...form, [name]: value });
    } else {
      setTelephoneError(true);
    }
  };

  // Submit Handler
  const [submitAvailable, setSubmitAvailable] = useState(false);

  useLayoutEffect(() => {
    if (
      form.email !== "" &&
      form.password !== "" &&
      form.phone !== "" &&
      form.location !== "" &&
      form.role !== "" &&
      !emailError &&
      !telephoneError
    ) {
      setSubmitAvailable(true);
    } else {
      setSubmitAvailable(false);
    }
  }, [form]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      event.preventDefault();
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.patch(`/api/user/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success("Data updated successfully");
      }
    } catch (err) {
      console.log(err);
      setTimeout(toast.error("Something went wrong"), 100);
    } finally {
      setLoading(false);
      setForm({
        email: "",
        password: "",
        phone: "",
        location: "",
        role: "",
      });
      setTimeout(() => {
        window.location.href = "/dashboard/user";
      }, 1000); // Delayed by 1000 milliseconds (2 seconds)
    }
  };

  const backHandler = () => {
    window.location.href = "/dashboard/user";
  };
  return (
    <>
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="md:p-12 p-6">
            <BackButton backHandler={backHandler} src="/images/left.png" />
            <Title />

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <section className="bg-white mt-4 md:mt-8 rounded-md p-6 md:p-10">
                <div className="w-full flex flex-col gap-y-8">
                  {/*Email*/}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-bold text-xl">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className={`w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 ${
                        emailError
                          ? "focus:border-[#D91010] border-[#D91010]"
                          : "border-[#B7B7B7]"
                      }`}
                      placeholder="Enter your email"
                      onChange={handleEmailInput}
                      defaultValue={form.email}
                    />
                    <i
                      className={`text-xs mt-2 ${
                        emailError ? "text-[#D91010]" : ""
                      }`}
                    >
                      {emailError ? "Please input a valid email address" : ""}
                    </i>
                  </div>

                  {/*Phone*/}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-bold text-xl">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className={`w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 ${
                        telephoneError
                          ? "focus:border-[#D91010] border-[#D91010]"
                          : "border-[#B7B7B7]"
                      }`}
                      placeholder="Enter your phone number"
                      onChange={handleTelephoneInput}
                      defaultValue={form.phone}
                    />
                    <i
                      className={`text-xs mt-2 ${
                        telephoneError ? "text-[#D91010]" : ""
                      }`}
                    >
                      {telephoneError
                        ? "Phone Number must be 12 digits and begin with '08' "
                        : "ex: 081293665211"}
                    </i>
                  </div>

                  {/*Location*/}
                  <TextInput
                    title="Location"
                    inputID="location"
                    placeholder="Enter your location"
                    onChange={handleInputChange}
                    value={form.location}
                    description=""
                  />

                  {/*Role*/}
                  <div className="flex flex-col">
                    <label htmlFor="admin" className="font-bold text-xl">
                      Admin
                    </label>
                    <input
                      type="text"
                      name="admin"
                      id="admin"
                      className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 bg-gray-300 text-gray-600"
                      defaultValue={form.role}
                      disabled={true}
                    />
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
          <Footer />
        </>
      )}
    </>
  );
};

export default EditClass;
