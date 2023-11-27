"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import NumberInput from "../../components/inputComponent/NumberInput";
import TextInput from "../../components/inputComponent/TextInput";
import Dropdown from "../../components/inputComponent/Dropdown";
import BackButton from "../../components/BackButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import transmission from "../../data/transmission";
import carType from "../../data/carType";
import axios from "axios";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";
import { format } from "path";
import formatDate from "../date";

interface transmission {
  transmission: string;
}

interface FormDataTypes {
  plate: string;
  vehicleType: string;
  transmission: string;
  distance: number | undefined;
  lastService: string;
}

export default function AddClass() {
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Form Data
  const [form, setForm] = useState<FormDataTypes>({
    plate: "",
    vehicleType: "",
    transmission: "",
    distance: undefined,
    lastService: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  useLayoutEffect(() => {
    setForm({ ...form, lastService: formatDate(selectedDate) });
  }, [selectedDate]);

  // Submit Handler
  const [submitAvailable, setSubmitAvailable] = useState(false);

  useLayoutEffect(() => {
    if (
      form.plate !== "" &&
      form.vehicleType !== "" &&
      form.transmission !== "" &&
      form.distance !== undefined &&
      form.lastService !== ""
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
      const res = await axios.post("/api/vehicle", form, {
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
        plate: "",
        vehicleType: "",
        transmission: "",
        distance: undefined,
        lastService: "",
      });
      setTimeout(() => {
        window.location.href = "/dashboard/vehicle";
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
    }
  };

  // Back Handler
  const backHandler = () => {
    window.location.href = "/dashboard/vehicle";
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
              {/*Plate*/}
              <TextInput
                title="Plate"
                inputID="plate"
                placeholder="Enter plate"
                onChange={handleInputChange}
                value={undefined}
                description=""
              />

              {/*Vehicle Type*/}
              <Dropdown
                title="Vehicle Type"
                inputID="vehicleType"
                placeholder="Select Vehicle type"
                onChange={handleInputChange}
                value={undefined}
                data={carType}
              />

              {/*Transmission*/}
              <Dropdown
                title="Vehicle Transmission"
                inputID="transmission"
                placeholder="Select Vehicle Transmission"
                onChange={handleInputChange}
                value={undefined}
                data={transmission}
              />

              {/*Distance*/}
              <NumberInput
                title="Distance"
                inputID="distance"
                placeholder="Enter Vehicle Distance"
                onChange={handleInputChange}
                value={undefined}
                description=""
              />
                
              {/*Last Service*/}
              <div className="flex flex-col">
                <label htmlFor="lastService" className="font-bold text-xl">
                  Last Service
                </label>

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Enter Last Service"
                  dateFormat={"dd/MM/yyyy"}
                  customInput={
                    <input className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 bg-white p-2" />
                  }
                />
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


