"use client";

import React, { useEffect } from "react";
import axios from "axios";

const Page = () => {
  useEffect(() => {
    const fetchData = async () => {
      const form = {
        name: "Hot Deals 14 days New New",
        price: 50000,
        description: "this package is valid for 14 days",
        quota: 40,
      };
      const res = await axios.get("http://localhost:8080/user/quota/1");
      // const res2 = await axios.post("http://localhost:8080/auth", form, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      console.log(res.data);
      // console.log(res2.data);
    };
    fetchData();
  }, []);

  return <div>TestMenu</div>;
};

export default Page;
