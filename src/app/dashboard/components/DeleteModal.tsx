import React, { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface DeleteModalProps {
  dialogID: string;
  dataID: number;
  apiURL: string;
}

const DeleteModal: FC<DeleteModalProps> = ({ dialogID, dataID, apiURL }) => {
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Delete API
  const deleteHandler = async () => {
    setLoading(true);
    try {
      const deletedData = await axios.delete(apiURL + dataID);
      if (deletedData.status === 200) {
        toast.success("Data deleted successfully");
        setTimeout(() => {
          window.location.href = "/dashboard/class";
        }, 2000); // Delayed by 2000 milliseconds (2 seconds)
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <dialog id={dialogID} className="modal">
        <div className="modal-box bg-white text-black flex flex-col items-center px-0">
          <img src="/images/trash_img.png" alt="trash" className="w-1/2" />
          <p className="font-bold text-lg mt-4 md:text-xl">
            You are about to delete a data
          </p>
          <p className="mt-4 text-[#7D7C7C]">
            This will delete your data from database
          </p>
          <p className="text-[#7D7C7C]">are you sure ?</p>

          {/* Cancel Button */}
          <div className="flex flex-row justify-around items-center mt-6 w-full md:w-[70%] ">
            <div className="modal-action my-auto">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-transparent text-black hover:bg-[#EEEEEE] hover:border-[#F2F2F2] shadow-md border-[#F1F1F1] px-12 ">
                  Cancel
                </button>
              </form>
            </div>

            {/* Delete Button */}
            <button
              className={`btn ${
                loading ? "bg-red-300 px-6" : "bg-red-600 px-12"
              } bg-red-600 hover:bg-red-800 text-white shadow-md border-0`}
              onClick={() => deleteHandler()}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm md:loading-md"></span>
                  <p className="text-sm">Loading</p>
                </>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
        {/* Click Outside */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DeleteModal;
