"use client";

import React, { useEffect } from "react";
import axios from "axios";

const Page = () => {
  useEffect(() => {
    const fetchData = async () => {
      //const form = { email: "admin@gmail.com", password: "admin" };
      const form = {
        name: "test",
      };
      //   const res = await axios.get("http://localhost:8080/menu");
      const res2 = await axios.post("http://localhost:8080/test", form);
      const res3 = await axios.get("http://localhost:8080/test");
      const res4 = await axios.patch("http://localhost:8080/test/1", form);
      const res5 = await axios.delete("http://localhost:8080/test/1");
      //   console.log(res.data);
      console.log(res2.data);
      console.log(res3.data);
      console.log(res4.data);
      console.log(res5.data);
    };
    fetchData();
  }, []);

  return <div>TestAuth</div>;
};

export default Page;
