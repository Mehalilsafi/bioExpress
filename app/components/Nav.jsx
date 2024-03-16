import React from "react"; // React components

import Image from "next/image"; // Next.js component for optimized images
import Link from "next/link"; // Next.js component for routing

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome icon component
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Specific Font Awesome icons

import logo from "@/assets/logo.svg"; // Image asset for logo


export default function Nav() {
  return (
    <header className="flex w-full items-center justify-between fixed top-0 bg-white z-[50] ml-4 ">
      <Image src={logo} width={130}  alt="Picture of the author" />

      <div className="relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute inset-y-0 left-0 pl-3  mt-3  text-gray-400 pointer-events-none md:mt-3 "
        />
        <input
          type="text"
          className="py-3 px-4 pl-10 md:w-96 h-9 border border-gray-200 border-solid rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Search your product here"
        />
      </div>

      <div className="flex justify-start items-center gap-[15px] p-2.5 mr-5  ">
      <Link href="/wishlist"><FontAwesomeIcon icon={faCartShopping} className="text-xl font-light" /></Link> 
        <FontAwesomeIcon icon={faUser} className="text-xl font-light" />
      </div>
    </header>
  );
}
