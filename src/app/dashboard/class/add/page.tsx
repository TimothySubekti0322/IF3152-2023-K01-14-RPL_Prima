"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import NumberInput from "../../components/inputComponent/NumberInput";
import Dropdown from "../../components/inputComponent/Dropdown";
import BackButton from "../../components/BackButton";
import transmission from "../../data/transmission";
import carType from "../../data/carType";

interface transmission {
  transmission: string;
}

export default function AddClass() {
  const [form, setForm] = useState({
    price: "",
    duration: "",
    session: "",
    transmission: "",
    vehicleType: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const [durationError, setDurationError] = useState(false);
  const handleFloatInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Check if the input is a valid float using a regular expression
    if (/^(\d+\.?\d*|\.\d+)$/.test(value) || value === "") {
      setDurationError(false);
      // Update your state or variable here
      setForm({ ...form, [name]: value });
    } else {
      setDurationError(true);
    }
  };

  // Submit Handler
  const [submitAvailable, setSubmitAvailable] = useState(false);

  useLayoutEffect(() => {
    if (
      form.price !== "" &&
      form.duration !== "" &&
      form.session !== "" &&
      form.transmission !== "" &&
      form.vehicleType !== "" &&
      !durationError
    ) {
      setSubmitAvailable(true);
    } else {
      setSubmitAvailable(false);
    }
  }, [form, durationError]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  // Back Handler
  const backHandler = () => {
    window.location.href = "/dashboard/class";
  };

  return (
    <>
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
                  Submit
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
