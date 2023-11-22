"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import NumberInput from "../../components/inputComponent/NumberInput";
import TextInput from "../../components/inputComponent/TextInput";
import Dropdown from "../../components/inputComponent/Dropdown";
import BackButton from "../../components/BackButton";
import transmission from "../../data/transmission";
import carType from "../../data/carType";
import axios from "axios";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";

interface transmission {
  transmission: string;
}

interface FormDataTypes {
    name: string;
    classId: number | undefined;
    phone: string;
    address: string;
    status: string;
}

export default function AddClass() {
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Form Data
  const [form, setForm] = useState<FormDataTypes>({
    name: "",
    classId: undefined,
    phone: "",
    address: "",
    status: "",
  });

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
      form.name !== "" &&
      form.classId !== undefined &&
      form.phone !== "" &&
      form.address !== "" &&
      form.status !== "" 
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
      const Cookie = new Cookies();
      const token = Cookie.get("token");
      const res = await axios.post("/api/student", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Data added successfully");
      } else if (res.status === 401) {
        window.location.href = "/unauthorized";
      }
    } catch (err) {
      console.log(err);
      setTimeout(toast.error("Something went wrong"), 100);
    } finally {
      setLoading(false);
      setForm({
        name: "",
        classId: undefined,
        phone: "",
        address: "",
        status: "",
      });
      setTimeout(() => {
        window.location.href = "/dashboard/class";
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
    }
  };

  // Back Handler
  const backHandler = () => {
    window.location.href = "/dashboard/class";
  };

  return (
    <>
      <Toaster />
      <div className="md:p-12 p-6">
        <BackButton backHandler={backHandler} src="/images/left.png" />
        <Title />

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <section className="bg-white mt-4 md:mt-8 rounded-md p-6 md:p-10">
            <div className="w-full flex flex-col gap-y-8">
            {/*Name*/}
            <TextInput 
                title="Name"
                inputID="name"
                placeholder="Enter your name"
                onChange={handleInputChange}
                value={undefined}
                description="" />

            {/*classID*/}
            <TextInput 
                title="ClassID"
                inputID="classId"
                placeholder="Enter your Class ID"
                onChange={handleInputChange}
                value={undefined}
                description="" />

            {/*Phone*/}
            <TextInput 
                title="Phone Number"
                inputID="phone"
                placeholder="Enter your phone number"
                onChange={handleInputChange}
                value={undefined}
                description="Ex: 081234567812" />

            {/*Address*/}
            <TextInput 
                title="Address"
                inputID="address"
                placeholder="Enter your Address"
                onChange={handleInputChange}
                value={undefined}
                description="" />

            {/*Status*/}
            <TextInput 
                title="Status"
                inputID="status"
                placeholder="Enter your status"
                onChange={handleInputChange}
                value={undefined}
                description="" />
                

              {/* Submit */}
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className={` ${
                    !submitAvailable ? "bg-[#B7B7B7]" : "bg-[#3C50E0]"
                  } text-white font-semibold text-base rounded-lg py-2 px-4 md:text-xl md:py-3 md:px-10`}
                  disabled={!submitAvailable}
                >
                  {loading ? (
                    <div className="flex items-center gap-x-3">
                      <span className="loading loading-spinner loading-sm md:loading-md"></span>
                      <p className="text-md">Loading</p>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
}
