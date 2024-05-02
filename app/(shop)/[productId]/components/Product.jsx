"use client";
import { useEffect } from "react";
import Image from "next/image";
import Counter from "./Counter";
import Footer from "./Footer";
import getProduct from "@/lib/getProduct";
import { useParams } from "next/navigation";
import realeted from "@/assets/realeted.svg";
import Head from "next/head";
import CarouselThumbs from "./CarouselThumbs";
import { useStore } from "@/lib/stor";
import { useRouter } from "next/navigation";
import getProductId from "../../actions/getProductId";

export default function Product({product}) {
 
  const router=useRouter()
  function handlRout(){
    router.push(`/${product.id}/${product.productName}`)
  }
  const counter = useStore((state) => state.counter);
  const totalPrice = counter * product.productPrice;

  return (
    <div className=" flex flex-col gap-3 md:gap-6  mt-4 md:w-6/12">
      <h1 className="font-medium text-3xl"> {product?.productName} </h1>
      <p className="font-medium text-sm ">
      {product?.description}
      </p>
      <h1 className="text-xl font-semibold  text-[#996534]">{totalPrice}</h1>
      <Counter />
      <div className="flex gap-[10px] ">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-[#A4CE4A]"
        >
          Add to cart
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-[#A4CE4A] "
          onClick={handlRout}
        >
          order now
        </button>
      </div>
    </div>
  );
}
