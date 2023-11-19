"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import NumberInput from "../../components/inputComponent/NumberInput";
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
  price: number | undefined;
  duration: number | undefined;
  session: number | undefined;
  transmission: string;
  vehicleType: string;
}

export default function AddClass() {
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Form Data
  const [form, setForm] = useState<FormDataTypes>({
    price: undefined,
    duration: undefined,
    session: undefined,
    transmission: "",
    vehicleType: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Handle Duration Input
  const [durationError, setDurationError] = useState(false);
  const handleFloatInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Check if the input is a valid float using a regular expression
    if (/^(\d+\.?\d*|\.\d+)$/.test(value) || value === "") {
      setDurationError(false);
      // Update your state or variable here
      setForm({ ...form, [name]: parseFloat(value) });
    } else {
      setDurationError(true);
    }
  };

  // Submit Handler
  const [submitAvailable, setSubmitAvailable] = useState(false);

  useLayoutEffect(() => {
    if (
      form.price !== undefined &&
      form.duration !== undefined &&
      form.session !== undefined &&
      form.transmission !== "" &&
      form.vehicleType !== "" &&
      !durationError
    ) {
      setSubmitAvailable(true);
    } else {
      setSubmitAvailable(false);
    }
  }, [form, durationError]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      event.preventDefault();
      const Cookie = new Cookies();
      const token = Cookie.get("token");
      const res = await axios.post("/api/class", form, {
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
        price: undefined,
        duration: undefined,
        session: undefined,
        transmission: "",
        vehicleType: "",
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
              {/* Harga */}
              <NumberInput
                title="Price"
                inputID="price"
                placeholder="Enter Class Price"
                onChange={handleInputChange}
                value={undefined}
                description="Price in Rupiah"
              />

              {/* Durasi */}
              <div className="flex flex-col">
                <label htmlFor="duration" className="font-bold text-xl">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  className={`w-4/5 rounded-lg border-2  mt-4 ${
                    durationError
                      ? "focus:border-[#D91010] border-[#D91010]"
                      : "border-[#B7B7B7]"
                  }`}
                  placeholder="e.g 2.5"
                  pattern="^\d+\.?\d*|\.\d+$"
                  onChange={handleFloatInputChange}
                />
                <i
                  className={`text-xs mt-2 ${
                    durationError ? "text-[#D91010]" : ""
                  }`}
                >
                  {durationError
                    ? "Duration must be float or number"
                    : "Duration in hours "}
                </i>
              </div>

              {/* Jumlah Sesi */}
              <NumberInput
                title="Session"
                inputID="session"
                placeholder="Enter Class Session"
                onChange={handleInputChange}
                value={undefined}
                description=""
              />

              {/* Transmisi kendaraan */}
              <Dropdown
                title="Vehicle Transmission"
                inputID="transmission"
                placeholder="Select Vehicle Transmission"
                onChange={handleInputChange}
                value={undefined}
                data={transmission}
              />

              {/* Jenis Kendaraan */}
              <Dropdown
                title="Vehicle Type"
                inputID="vehicleType"
                placeholder="Select Vehicle type"
                onChange={handleInputChange}
                value={undefined}
                data={carType}
              />

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
