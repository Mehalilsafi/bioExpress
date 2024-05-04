
import React from "react";

import Form from "./Form";
import Price from "./Price";

export default async function Hero() {

 
  return (
    <div className="m-6 mt-24 grid grid-cols-4 gap-4 ">
      <div className="col-span-3">
        <Form />
      </div>
      <div className="col-span-1">
        <Price />
      </div>
    </div>
  );
}
