import React from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import gridImage from "@/assets/gridImage.png";
export default function Hero() {
  const fakeTable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" rounded-md m-4">
      <div className="w-full flex justify-start gap-[15px]">
        <p className="text-sm text-[#918B8B]">Healthy food</p>
        <p className="text-sm text-[#918B8B]">Organic food</p>
        <p className="text-sm text-[#918B8B]">Jam</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between mt-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">
          Showing Results for <span className="text-[#A4CE4A]">Food</span>
        </h1>
        <Dropdown />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  mt-5 ">
        {fakeTable.map((item, index) => (
          <div key={index}>
            <a
              className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
              href="#"
            >
              <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                <Image
                  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                  src={gridImage}
                  width={200}
                  height={200}
                  alt="Image Description"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
