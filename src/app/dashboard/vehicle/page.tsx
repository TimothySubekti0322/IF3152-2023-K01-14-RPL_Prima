"use client";

import { useState, useEffect } from "react";
import Title from "../components/Title";
import Search from "../components/Search";
import AddButton from "../components/AddButton";
import Table from "./components/Table";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Class() {
  // List Column
  const column: string[] = [
    "Id",
    "Plate",
    "Vehicle Type",
    "Transmission",
    "Distance",
    "Last Service",
    "Status",  
  ];

  const pageData: string[] = [
    "id",
    "plate",
    "vehicleType",
    "transmission",
    "distance",
    "lastService",
    "status",
  ];
  // Number data in one page
  const dataPerPage = 10;

  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  // Fetch Raw Data
  useEffect(() => {
    const fetchData = async (token: string) => {
      try {
        setLoading(true);
        const res = await axios.get("/api/vehicle", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 401) {
          window.location.href = "/unauthorized";
        } else {
          setRawData(res.data);
          setData(res.data.slice(0, dataPerPage));
          setTotalPages(Math.ceil(res.data.length / dataPerPage));
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const Cookie = new Cookies();
    const role = Cookie.get("payload").role;
    if (role === "Admin") {
      window.location.href = "/unauthorized";
    } else {
      const token: string = Cookie.get("token");
      fetchData(token);
    }
  }, []);

  // Handle Data Change
  useEffect(() => {
    const start = (page - 1) * dataPerPage;
    const end = start + dataPerPage;
    setData(rawData.slice(start, end));
  }, [page]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="md:px-12 md:py-8 p-6">
            <div className="flex flex-row justify-between items-center">
              <Title />
              <div className="md:hidden">
                <AddButton />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 md:mt-6 md:gap-x-96">
              <Search
                options={pageData}
                rawData={rawData}
                setData={setData}
                setTotalPages={setTotalPages}
              />
              <div className="hidden md:w-auto md:block">
                <AddButton />
              </div>
            </div>

            {/* Table */}
            <section className="bg-white mt-6 md:mt-8 rounded-md p-4 md:p-10">
              <Table column={column} data={data} />
              <div className="w-full flex justify-center">
                <Pagination
                  totalPages={totalPages}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className=" mt-4 md:mt-6">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
