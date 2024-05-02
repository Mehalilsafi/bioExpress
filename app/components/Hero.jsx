import React from "react"; // React components

// Custom components
import Dropdown from "./Dropdown"; // Custom component for dropdown functionality
import Product from "./Product"; // Custom component for displaying products

// Next.js components
import Link from "next/link"; // Next.js component for routing
import Image from "next/image"; // Next.js component for optimized images

// Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome icon component
import {} from "@fortawesome/free-solid-svg-icons"; // Specific Font Awesome icons

// SVG assets
import gridImage from "@/assets/gridImage.svg"; // SVG asset for grid images
import olive from "@/assets/olive.svg"; // SVG asset for olives
import { useCartStore } from "@/lib/stor";
import ProductAction from "../actions/getProduct";
export default async function Hero() {
  const productData = await ProductAction();

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
              key={product.id}
              productId={product.id}
              productName={product.productName}
              productPrice={product.productPrice}
              productImages={product.images}
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
