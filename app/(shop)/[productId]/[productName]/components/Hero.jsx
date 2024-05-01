"use client";
import React from "react";
import { useParams } from "next/navigation";
import Form from "./Form";
import getProductName from "@/lib/getProductName";
import Price from "./Price";

export default function Hero() {
  const params = useParams();
  const product = getProductName(params.productName);
  console.log("params from order page " + product);
  return (
    <div className="m-6 mt-24 grid grid-cols-4 gap-4 ">
      <div className="col-span-3">
        <Form />
      </div>
      <div className="col-span-1">
        <Price product={product} />
      </div>
    </div>
  );
}
