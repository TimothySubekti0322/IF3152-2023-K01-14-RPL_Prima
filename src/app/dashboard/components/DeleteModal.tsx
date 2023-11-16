import React, { FC } from "react";

interface DeleteModalProps {
  dialogID: string;
  dataID: number;
}

const DeleteModal: FC<DeleteModalProps> = ({ dialogID, dataID }) => {
  // Delete API
  const deleteHandler = async () => {
    console.log(dataID);
  };

  return (
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
        <div className="flex flex-row justify-around items-center mt-6 w-4/5 md:w-3/5 ">
          <div className="modal-action my-auto">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-transparent text-black hover:bg-[#EEEEEE] hover:border-[#F2F2F2] shadow-md border-[#F1F1F1] px-6">
                Cancel
              </button>
            </form>
          </div>

          {/* Delete Button */}
          <button
            className="btn bg-red-600 hover:bg-red-800 text-white shadow-md border-0 px-6"
            onClick={() => deleteHandler()}
          >
            Delete
          </button>
        </div>
      </div>
      {/* Click Outside */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DeleteModal;
