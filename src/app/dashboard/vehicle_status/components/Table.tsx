"useClient";

import React, { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";
import DeleteModal from "../../components/DeleteModal";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface dataProps {
  id: number;
  plate: string;
  status: string;
}

const Table: React.FC<{ column: string[]; data: dataProps[] }> = ({
  column,
  data,
}) => {
  const Cookie = new Cookies();
  const token = Cookie.get("token");

  const updateStatusHandler = async (id: number, status: string) => {
    try {
      const form = { status: status };
      const res = await axios.patch(`/api/vehicle/status/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success("Status updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  const [openedBox, setOpenedBox] = useState<number>(0);

  const openBox = (id: number) => {
    if (openedBox == id) {
      setOpenedBox(0);
    } else {
      setOpenedBox(id);
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full md:h-[34rem] h-[38.5rem] mb-10 overflow-x-auto">
        <table className="md:w-full table-auto md:table-fixed">
          {/* Table header */}
          <thead>
            <tr className="bg-[#DAE0E6]">
              {column.map((item, index) => (
                <th key={index} className="px-4 py-2 text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b-2 border-black">
                <td className="px-4 py-2 text-center ">{item.id}</td>
                <td className="px-4 py-2 text-center whitespace-nowrap">
                  {item.plate}
                </td>
                <td className="px-4 py-2  flex flex-row items-center justify-center ">
                  <div className="relative">
                    <button
                      className={`${
                        item.status == "available"
                          ? "bg-lime-200 text-[#84CC16] hover:bg-lime-500 hover:text-lime-800"
                          : "bg-red-300 text-[#E02424] hover:bg-red-500 hover:text-red-700"
                      } font-bold items-center justify-center text-white  rounded-md w-44 py-2`}
                      style={{ display: "flex" }}
                      onClick={() => openBox(item.id)}
                    >
                      {item.status}
                    </button>
                    <div
                      className={`absolute h-18 bg-white z-10 rounded-md w-44 divide-y-2 ${
                        item.id != openedBox && "hidden"
                      }`}
                    >
                      {item.status == "available" ? (
                        <button
                          className=" rounded-md w-full h-16 flex items-center justify-center font-bold bg-red-300 text-red-600 hover:bg-red-500 hover:text-red-700"
                          onClick={() =>
                            updateStatusHandler(item.id, "unavailable")
                          }
                        >
                          unavailable
                        </button>
                      ) : (
                        <button
                          className="rounded-md w-full h-16 flex items-center justify-center font-bold bg-lime-200 text-lime-500 hover:bg-lime-500 hover:text-lime-800"
                          onClick={() =>
                            updateStatusHandler(item.id, "available")
                          }
                        >
                          available
                        </button>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
