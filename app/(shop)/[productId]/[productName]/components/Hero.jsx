
import React from "react";
import { useParams } from "next/navigation";
import Form from "./Form";
import Price from "./Price";
import getProductByName from "../actions/getProductByName";
export default async function Hero({params}) {
  const {productName} = params
  const decodedProductName = decodeURIComponent(productName);
   const product = await getProductByName(decodedProductName);
  console.log("params from order page " + productName);
  return (
    <div className="m-6 mt-24 grid grid-cols-4 gap-4 ">
      <div className="col-span-4 lg:col-span-3">
        <Form />
      </div>
      <div className="lg:col-span-1 col-span-4 ">
        <Price product={product} />
      </div>
    </div>
  );
}
