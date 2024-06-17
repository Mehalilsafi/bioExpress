"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import sidBarImage from "@/assets/sidebare.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faShirt,
  faBagShopping,
  faWandMagicSparkles,
  faGlobe,
  faComment,
  faTable,
  faMartiniGlassCitrus,
  faJar,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "@/lib/stor";
import logo from "@/assets/logo.svg"; // Image asset for logo

export default function SideBar({ publicity, categories }) {
  const itemsButtom = [
    // { icon: faGlobe, text: "Our scial " },
    { icon: faComment, text: "About Us", link: "/AboutUs" },
  ];
  const useGetCategories = useCategory((state) => state.setCategory);
  function HandleFilter(category) {
    useGetCategories(category);
  }

  const currentPage = "side_bar_publicity";
  const filteredPublicity = publicity?.filter(
    (item) => item.page == currentPage
  );
  console.log("filterd page depend on the page Name", categories);

  return (
    <div className=" p-3 ">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600 mt-16"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>

        <svg
          className="flex-shrink-0 size-6 md:hidden"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700 md:mt-[100px]  border border-transparent"
      >
        <Image
          src={logo}
          width={130}
          className="md:hidden"
          alt="Picture of the author"
        />
        <div className="px-6 flex align-middle gap-3">
          <FontAwesomeIcon
            icon={faTable}
            className="text-xl font-light text-[#A4CE4A]"
          />
          <h2 className="flex-none text-xl font-semibold dark:text-white">
            {" "}
            categories
          </h2>
        </div>
        <div className="flex flex-col w-full justify-center gap-4 m-3 border-b border-gray-200 border-solid">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center p-2 gap-3 hover:bg-gray-100 hover:rounded-xl hover:justify-center transition-all duration-300 "
            >
              <FontAwesomeIcon
                icon={faStarOfLife}
                className="text-md font-light text-[#A4CE4A] "
              />
              <p
                className="hover:text-[#A4CE4A]"
                onClick={() => HandleFilter(item.categoryName)}
              >
                {item.categoryName}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full justify-center gap-4 m-3">
          <div className="flex items-center justify-start  p-2 gap-3">
            <FontAwesomeIcon
              icon={faComment}
              className="text-xl font-light text-[#A4CE4A]"
            />
            <Link href='/aboutUs'>
            <p>About Us</p>
            </Link>
          </div>
        </div>

        {filteredPublicity?.length > 0 && (
          <Image
            src={filteredPublicity[0]?.imageUrl}
            width={200}
            height={400}
            alt="side_bar_publicity"
          />
        )}
      </div>
    </div>
  );
}
