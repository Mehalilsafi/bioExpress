"use client";

import React, { useState } from "react";
import Image from "next/image";
import produt from "@/assets/product.svg";
import Counter from "./Counter";
import Footer from "./Footer";
export default function Hero() {
  const photoArr = [1, 2, 3];
  const [counter, setCounter] = useState(0);

  return (
    <div className="m-3">
      <div className="">
        <div className="flex flex-col gap-[20px]">
          <Image
            src={produt}
            width={500}
            height={500}
            alt="Picture of the author"
          />

          <div className="flex items-center justify-between ">
            {photoArr.map((ele) => (
              <Image
                src={produt}
                width={100}
                height={100}
                alt="Picture of the author"
                key={ele}
              />
            ))}
          </div>
        </div>

        <div className=" flex flex-col gap-3 mt-4">
          <h1 className="font-medium text-3xl"> Jam </h1>
          <p className="font-medium text-sm ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            excepturi, officiis sunt quisquam eligendi optio et dolorum nihil
            vero, cumque iste, tempora incidunt deleniti eaque maiores impedit!
            Atque, nobis illo.
          </p>
          <h1 className="text-xl font-semibold  text-[#996534]">750 Da</h1>
          <Counter counter={counter} setCounter={setCounter} />
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
            >
              order now
            </button>
          </div>
        </div>
      </div>
  
    <Footer/>

    </div>
  );
}
