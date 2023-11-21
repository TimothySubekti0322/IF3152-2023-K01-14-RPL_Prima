"use client";

import React, { useState, ChangeEvent, useLayoutEffect } from "react";
import Loader from "../../../components/Loader";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import NumberInput from "../../../components/inputComponent/NumberInput";
import Dropdown from "../../../components/inputComponent/Dropdown";
import BackButton from "@/app/dashboard/components/BackButton";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookie from "universal-cookie";
import carType from "../../../data/carType";
import transmission from "../../../data/transmission";

interface FormDataTypes {
  price: number | undefined;
  duration: number | string | undefined;
  session: number | undefined;
  transmission: any;
  vehicleType: any;
}

const EditClass = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<FormDataTypes>({
    price: undefined,
    duration: undefined,
    session: undefined,
    transmission: "",
    vehicleType: "",
  });

  // Fetching Data
  const path = usePathname();
  const id = path.split("/")[4];

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const Cookies = new Cookie();
        const token = Cookies.get("token");
        const res = await axios.get(`/api/class/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForm({
          price: res.data.data.price,
          duration: res.data.data.duration,
          session: res.data.data.session,
          transmission: res.data.data.transmission,
          vehicleType: res.data.data.vehicleType,
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
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.patch(`/api/class/${id}`, form, {
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

  const backHandler = () => {
    window.location.href = "/dashboard/class";
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
                   {/*Plate*/}
              <TextInput
                title="Plate"
                inputID="plate"
                placeholder="Enter plate"
                onChange={handleInputChange}
                value={undefined}
                data={carType}
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
              <TextInput
                title="Last Service"
                inputID="lastService"
                placeholder="Enter Last Service"
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
