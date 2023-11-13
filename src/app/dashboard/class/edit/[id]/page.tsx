"use client";

import { FC, useState } from "react";
import Loader from "../../../components/Loader";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";

interface pageProps {
  params: { id: number };
}

const EditClass: FC<pageProps> = ({ params }) => {
  const [loading, setLoading] = useState(false);

  const backHandler = () => {
    window.location.href = "/dashboard/class";
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="md:p-12 p-6">
            <button onClick={() => backHandler()}>
              <img
                src="/images/left.png"
                alt=""
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </button>
            <Title />
            This is Edit page for class with id {params.id}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default EditClass;
