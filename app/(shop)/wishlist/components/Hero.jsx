"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import olive from "@/assets/olive.svg";
import Counter from "./Counter";
import { useCartStore } from "@/lib/stor";
import getProduct from "@/lib/getProduct";
export default function Hero() {
  const cartItems = useCartStore((state) => state.cartItems);
  const Products = getProduct();
  console.log("prduct Data is here " + cartItems);

  return (
    <div className="m-4">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl font-bold"
          />
          <h1 className="text-2xl font-bold">Wish List</h1>
        </div>
        {<p className="">{`Cart -> Place order -> Pay -> Order Complete`}</p>}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex  items-center">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-default-checkbox"
          />
          <label
            htmlFor="hs-default-checkbox"
            className="text-2xl ms-3 font-bold"
          >
            All items
          </label>
        </div>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] "
        >
          order now
        </button>
      </div>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <div className="flex flex-col gap-5 ">
          {Products.map((product) => (
            <div
              key={product}
              className="flex items-center h-[200px] p-3 gap-4 rounded bg-white"
            >
              <input
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id={`hs-default-checkbox-${product}`}
              />
              <Image
                src={product.url}
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-2xl">{product.productName}</h1>
                <p className="max-w-lg text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus officiis adipisci nostrum
                </p>
              </div>
              <div className="flex items-end gap-[10px]">
                <Counter />
                <FontAwesomeIcon icon={faTrash} className="mb-3" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image
            src={olive}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
