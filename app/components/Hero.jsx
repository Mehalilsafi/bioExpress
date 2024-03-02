'use client'
import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import Image from "next/image";
import gridImage from "@/assets/gridImage.svg";
import olive from "@/assets/olive.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHouse } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  const fakeTable = [
    {
      productId: 1,
      productName: "Jam",
      productPrice: 10.99,
      url: gridImage,
    },
    {
      productId: 2,
      productName: "orange",
      productPrice: 15.99,
      url: gridImage,
    },
    {
      productId: 3,
      productName: "cheas",
      productPrice: 20.49,
      url:gridImage,
    },
    {
      productId: 4,
      productName: "meat",
      productPrice: 18.49,
      url: gridImage,
    },
    {
      productId: 5,
      productName: "banana",
      productPrice: 12.99,
      url: gridImage,
    },
   
  ];
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
          {fakeTable.map((item, index) => (
            <div key={index} className="relative group">
              <div className="relative">
                <a
                  className="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <Image
                      className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                      src={item.url}
                      width={200}
                      height={200}
                      alt="Image Description"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-lg">{item.productName}</h3>
                      <p className="font-medium text-lg text-[#996534]">
                        {item.productPrice}
                      </p>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-amber-300"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-amber-300"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-amber-300"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-amber-300"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-amber-300"
                        />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">4.6</p>
                    </div>
                  </div>
                </a>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <Link href="/wishlist">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                      Add to Cart
                    </button>
                  </Link>
                  <Link href={{
                    pathname:'/product',
                    query:{
                      productId: item.productId,
                      productName: item.productName, 
                      productPrice: item.productPrice, 
                      productUrl:item.url
                    },
                  }}>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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
