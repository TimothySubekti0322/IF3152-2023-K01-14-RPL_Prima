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
  nik: string;
  address: string;
  phone: string;
}

export default function AddClass() {
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Form Data
  const [form, setForm] = useState<FormDataTypes>({
    name: "",
    nik: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Handle NIK input
  const [nikError, setNikError] = useState(false);
  const handleNIKInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Check if the input is a valid float using a regular expression
    if (/^\d{16}$/.test(value)) {
      setNikError(false);
      // Update your state or variable here
      setForm({ ...form, [name]: value });
    } else {
      setNikError(true);
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
      form.name !== "" &&
      form.nik !== "" &&
      form.address !== "" &&
      form.phone !== "" &&
      !nikError &&
      !telephoneError
    ) {
      setSubmitAvailable(true);
    } else {
      setSubmitAvailable(false);
    }
  }, [form]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    console.log(form);
    try {
      event.preventDefault();
      const Cookie = new Cookies();
      const token = Cookie.get("token");
      const res = await axios.post("/api/instructor", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Data added successfully");
      } else if (res.status === 401) {
        window.location.href = "/unauthorized";
      } else if (res.data.response.data.error.code == "P2002") {
        toast.error("NIK already exists");
      }
    } catch (err) {
      console.log(err);
      setTimeout(toast.error("Something when wrong"), 100);
    } finally {
      setLoading(false);
      setForm({
        name: "",
        nik: "",
        address: "",
        phone: "",
      });
      setTimeout(() => {
        window.location.href = "/dashboard/instructor";
      }, 1000); // Delayed by 1000 milliseconds (1 seconds)
    }
  };

  // Back Handler
  const backHandler = () => {
    window.location.href = "/dashboard/instructor";
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
              {/* {Instructor name} */}
              <TextInput
                title="Instructor Name"
                inputID="name"
                placeholder="Enter instructor name"
                onChange={handleInputChange}
                value={undefined}
                description=""
              />

              {/* NIK */}
              <div className="flex flex-col">
                <label htmlFor="nik" className="font-bold text-xl">
                  Instructor NIK
                </label>
                <input
                  type="text"
                  name="nik"
                  id="nik"
                  className={`w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 ${
                    nikError
                      ? "focus:border-[#D91010] border-[#D91010]"
                      : "border-[#B7B7B7]"
                  }`}
                  placeholder="NIK must be 12 digits"
                  onChange={handleNIKInput}
                  value={undefined}
                />
                <i
                  className={`text-xs mt-2 ${nikError ? "text-[#D91010]" : ""}`}
                >
                  {nikError && "NIK must be 16 digits"}
                </i>
              </div>

              {/* Instructor Address */}
              <TextInput
                title="Instructor Address"
                inputID="address"
                placeholder="Enter instructor address"
                onChange={handleInputChange}
                value={undefined}
                description=""
              />

              {/* {Instructor phone} */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-bold text-xl">
                  Instructor Phone Number
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
                  placeholder="Enter instructor phone number"
                  onChange={handleTelephoneInput}
                  value={undefined}
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
