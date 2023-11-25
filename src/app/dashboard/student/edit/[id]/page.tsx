"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Loader from "../../../components/Loader";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import TextInput from "@/app/dashboard/components/inputComponent/TextInput";
import Dropdown from "../../../components/inputComponent/Dropdown";
import BackButton from "@/app/dashboard/components/BackButton";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookie from "universal-cookie";
import studentStatus from "../../../data/studentStatus";

interface FormDataTypes {
  name: string;
  classId: number | undefined;
  phone: string;
  address: string;
  status: string;
}

const EditClass = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<FormDataTypes>({
    name: "",
    classId: undefined,
    phone: "",
    address: "",
    status: "",
  });

  const [classId, setClassId] = useState<number[]>([]);

  // Fetching Data
  const path = usePathname();
  const id = path.split("/")[4];

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const Cookies = new Cookie();
        const token = Cookies.get("token");
        const res = await axios.get(`/api/student/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForm({
          name: res.data.data.name,
          classId: res.data.data.classId,
          phone: res.data.data.phone,
          address: res.data.data.address,
          status: res.data.data.status,
        });
        const resClass = await axios.get("/api/class/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClassId(resClass.data);
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
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.patch(`/api/student/${id}`, form, {
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
        classId: undefined,
        phone: "",
        address: "",
        status: "",
      });
      setTimeout(() => {
        window.location.href = "/dashboard/student";
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
    }
  };

  const backHandler = () => {
    window.location.href = "/dashboard/student";
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
                  {/*Name*/}
                  <TextInput
                    title="Name"
                    inputID="name"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                    value={form.name}
                    description=""
                  />

                  {/*classID*/}
                  <Dropdown
                    title="ClassID"
                    inputID="classId"
                    placeholder="Enter your Class ID"
                    onChange={handleInputChange}
                    value={String(form.classId)}
                    data={classId}
                  />

                  {/*Phone*/}
                  <TextInput
                    title="Phone Number"
                    inputID="phone"
                    placeholder="Enter your phone number"
                    onChange={handleInputChange}
                    value={form.phone}
                    description="Ex: 081234567812"
                  />

                  {/*Address*/}
                  <TextInput
                    title="Address"
                    inputID="address"
                    placeholder="Enter your Address"
                    onChange={handleInputChange}
                    value={form.address}
                    description=""
                  />

                  {/*Status*/}
                  <Dropdown
                    title="Status"
                    inputID="status"
                    placeholder="Enter your status"
                    onChange={handleInputChange}
                    value={form.status}
                    data={studentStatus}
                  />

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
