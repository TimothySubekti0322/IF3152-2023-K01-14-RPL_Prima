"useClient";

import { GoTrash } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";

interface dataProps {
  id: number;
  price: number;
  duration: string;
  session: number;
  transmision: string;
  vehicleType: string;
}

const Table: React.FC<{ column: string[]; data: dataProps[] }> = ({
  column,
  data,
}) => {
  const editHandler = (id: number) => {
    window.location.href = `/dashboard/class/edit/${id}`;
  };

  return (
    <div className="w-full md:h-[34rem] mb-10 overflow-x-auto">
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
          {data.map((item, index) => (
            <tr key={index} className="border-b-2 border-black">
              <td className="px-4 py-2 text-center ">{item.id}</td>
              <td className="px-4 py-2 text-center ">{item.price}</td>
              <td className="px-4 py-2 text-center ">{item.duration}</td>
              <td className="px-4 py-2 text-center ">{item.session}</td>
              <td className="px-4 py-2 text-center ">{item.transmision}</td>
              <td className="px-4 py-2 text-center ">{item.vehicleType}</td>
              <td className="px-4 py-2  flex flex-row items-center justify-center">
                <button
                  className="flex items-center justify-center text-white bg-green-500 rounded-md w-8 h-8"
                  onClick={() => editHandler(item.id)}
                >
                  <BiSolidEdit />
                </button>

                <button className="flex items-center justify-center text-white bg-red-500 rounded-md w-8 h-8 ml-4">
                  <GoTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
