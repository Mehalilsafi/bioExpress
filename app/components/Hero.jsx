import React from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import gridImage from "@/assets/gridImage.svg";
import olive from "@/assets/olive.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  const fakeTable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" rounded-md m-4">
      <div className="w-full flex justify-start gap-[35px] h-[30px] mb-1.5 border-b border-gray-200 border-solid">
        <p className="text-sm text-[#918B8B]">Healthy food</p>
        <p className="text-sm text-[#918B8B]">Organic food</p>
        <p className="text-sm text-[#918B8B]">Jam</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between my-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-0">
          Showing Results for <span className="text-[#A4CE4A]">Food</span>
        </h1>
        <Dropdown />
      </div>
      






      
      <div className="flex justify-between gap-[20px] w-full">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 w-9/12  mt-7">
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
                <div className="flex justify-between  ">


                <h3 className="font-medium text-lg">Jam</h3>
                <p className="font-medium text-lg text-[#996534] ">1000Da</p>
                </div>

                <div className="flex justify-between mt-3 ">
                <div>

                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
                <p className=" text-gray-500 dark:text-gray-400 ">
                 4.6
                </p>
                </div>
              </div>
            </a>
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