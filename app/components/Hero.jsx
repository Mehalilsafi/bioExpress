import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import Image from "next/image";
import gridImage from "@/assets/gridImage.svg";
import olive from "@/assets/olive.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHouse } from "@fortawesome/free-solid-svg-icons";
import getProduct from "@/lib/getProduct";
import Product from "./Product";
export default function Hero() {
  const productData = getProduct();
  console.log("my data ", productData);
  return (
    <div className=" rounded-md m-4">
      <div className="w-full flex justify-start gap-[35px] h-[30px] mb-1.5 border-b border-gray-200 border-solid">
        <p className="text-sm text-[#918B8B]">Healthy food</p>
        <p className="text-sm text-[#918B8B]">Organic food</p>
        <p className="text-sm text-[#918B8B]">Jam</p>
      </div>
      <div className="flex flex-row justify-between items-center  my-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-0 p-3 md:p-0">
          Showing Results for <span className="text-[#A4CE4A]">Food</span>
        </h1>
        <Dropdown />
      </div>

      <div className="flex justify-center items-center md:items-stretch flex-col  lg:flex-row lg:justify-between lg:gap-4 w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-9/12 mt-7">
          {productData.map((product) => (
            <Product
              key={product.productId}
              id={product.productId}
              productName={product.productName}
              productPrice={product.productPrice}
              productUrl={product.url}
            />
          ))}
        </div>

        <div className="h-full">
          <Image
            className="mt-7"
            src={olive}
            width={200}
            height={400}
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
