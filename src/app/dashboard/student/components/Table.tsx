"useClient";

import React, { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";
import DeleteModal from "../../components/DeleteModal";
import Cookies from "universal-cookie";
import { use } from "react";

interface dataProps {
  id: number;
  name: String;
  classId: number;
  phone: String;
  address: String;
  status: String;
}

const Table: React.FC<{ column: string[]; data: dataProps[] }> = ({
  column,
  data,
}) => {
  const Cookie = new Cookies();
  const role = Cookie.get("payload").role;

  const [deleteID, setDeleteID] = useState<number>(0);

  const editHandler = (id: number) => {
    window.location.href = `/dashboard/student/edit/${id}`;
  };

  const showModalHandler = (id: number) => {
    setDeleteID(id);
    const modal = document.getElementById("my_modal_5");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  return (
    <>
      <div className="w-full md:h-[36rem] h-[38.5rem] mb-10 overflow-x-auto">
        <table className="md:w-full table-auto">
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
                <td className="px-4 py-2 text-center ">{item.name}</td>
                <td className="px-4 py-2 text-center ">{item.classId}</td>
                <td className="px-4 py-2 text-center ">{item.phone}</td>
                <td className="px-4 py-2 text-center ">{item.address}</td>
                <td className="px-4 py-2 text-center ">{item.status}</td>
                {role == "Admin" && (
                  <td className="px-4 py-2  flex flex-row items-center justify-center">
                    {/* Edit */}
                    <button
                      className="items-center justify-center text-white bg-green-500 rounded-md w-8 h-8 sm:tooltip"
                      data-tip="Edit"
                      style={{ display: "flex" }}
                      onClick={() => editHandler(item.id)}
                    >
                      <BiSolidEdit />
                    </button>

                    {/* Delete Button */}

                    <button
                      className="flex items-center justify-center text-white bg-red-500 rounded-md w-8 h-8 ml-4 sm:tooltip"
                      style={{ display: "flex" }}
                      onClick={() => showModalHandler(item.id)}
                    >
                      <GoTrash />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <DeleteModal
        dialogID="my_modal_5"
        dataID={deleteID}
        apiURL="/api/student/"
      />
    </>
  );
};

export default Table;
