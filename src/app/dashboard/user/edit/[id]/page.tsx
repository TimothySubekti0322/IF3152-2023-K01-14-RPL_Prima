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
        console.log(form);
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

  // Submit Handler
  const [submitAvailable, setSubmitAvailable] = useState(false);

  useLayoutEffect(() => {
    if (
        form.email !== "" &&
        form.password !== "" &&
        form.phone !== "" &&
        form.location !== "" &&
        form.role !== "" 
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
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
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
             <TextInput 
                title="Email"
                inputID="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
                value={form.email}
                description="" />

            {/*Password*/}
            <TextInput 
                title="Password"
                inputID="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
                value={form.password}
                description="" />

            {/*Phone*/}
            <TextInput 
                title="Phone Number"
                inputID="phone"
                placeholder="Enter your phone number"
                onChange={handleInputChange}
                value={form.phone}
                description="Ex: 081234567812" />

            {/*Location*/}
            <TextInput 
                title="Location"
                inputID="location"
                placeholder="Enter your location"
                onChange={handleInputChange}
                value={form.location}
                description="" />

            {/*Role*/}
            <TextInput 
                title="Role"
                inputID="role"
                placeholder="Enter your role"
                onChange={handleInputChange}
                value={form.role}
                description="" />

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
