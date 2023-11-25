"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Loader from "../../../components/Loader";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import NumberInput from "../../../components/inputComponent/NumberInput";
import TextInput from "../../../components/inputComponent/TextInput";
import Dropdown from "../../../components/inputComponent/Dropdown";
import BackButton from "@/app/dashboard/components/BackButton";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookie from "universal-cookie";
import carType from "../../../data/carType";
import transmission from "../../../data/transmission";

interface FormDataTypes {
  name: string;
  nik: string;
  address: string;
  phone: string;
}

const EditClass = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<FormDataTypes>({
    name: "",
    nik: "",
    address: "",
    phone: "",
  });

  // Fetching Data
  const path = usePathname();
  const id = path.split("/")[4];

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const Cookies = new Cookie();
        const token = Cookies.get("token");
        const res = await axios.get(`/api/instructor/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForm({
          name: res.data.data.name,
          nik: res.data.data.nik,
          address: res.data.data.address,
          phone: res.data.data.phone,
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
    try {
      event.preventDefault();
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.patch(`/api/instructor/${id}`, form, {
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
        name: "",
        nik: "",
        address: "",
        phone: "",
      });
      setTimeout(() => {
        window.location.href = "/dashboard/instructor";
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
    }
  };

  const backHandler = () => {
    window.location.href = "/dashboard/instructor";
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
                  {/* {Instructor name} */}
                  <TextInput
                    title="Instructor Name"
                    inputID="name"
                    placeholder="Enter instructor name"
                    onChange={handleInputChange}
                    value={form.name}
                    description=""
                  />

                  {/* {NIK} */}
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
                      defaultValue={form.nik}
                    />
                    <i
                      className={`text-xs mt-2 ${
                        nikError ? "text-[#D91010]" : ""
                      }`}
                    >
                      {nikError && "NIK must be 16 digits"}
                    </i>
                  </div>

                  {/* {Instructor address} */}
                  <TextInput
                    title="Instructor Address"
                    inputID="address"
                    placeholder="Enter instructor address"
                    onChange={handleInputChange}
                    value={form.address}
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
