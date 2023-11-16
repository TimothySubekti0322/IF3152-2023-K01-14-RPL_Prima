/* eslint-disable @next/next/no-async-client-component */
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

export default function Class() {
  // List Column
  const column: string[] = [
    "Id",
    "Price",
    "Duration",
    "Session",
    "Transmision",
    "Vehicle Type",
    "Action",
  ];

  // Number data in one page
  const dataPerPage = 10;

  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  // Fetch Raw Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://64c12de9fa35860baea02b67.mockapi.io/api/test/users"
        );
        setRawData(res.data);
        setData(res.data.slice(0, dataPerPage));
        setTotalPages(Math.ceil(res.data.length / dataPerPage));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
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
            <Title />
            <div className="flex flex-row items-center justify-between mt-4 md:mt-6 md:gap-x-96">
              <Search />
              <AddButton />
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
