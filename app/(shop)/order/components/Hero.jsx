'use client'
import React from "react";

import Form from "./Form";
import Price from "./Price";

export default  function Hero(data) {


  return (
    <div className="m-6 mt-24 grid grid-cols-4 gap-4 ">
      <div className="col-span-4 lg:col-span-3">
        <Form  data={data}/>
      </div>
      <div className="lg:col-span-1 col-span-4 ">
        <Price />
      </div>
    </div>
  );
}
