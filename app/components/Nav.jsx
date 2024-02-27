import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <header className="flex mx-3 w-full items-center justify-between ">
      <Image src={logo} width={100} height={100} alt="Picture of the author" />

      <div className="relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute inset-y-0 left-0 pl-3 self-center mt-3  text-gray-400 pointer-events-none md:mt-3 "
        />
        <input
          type="text"
          className="py-3 px-4 pl-10 md:w-96 h-9 border-2 border-gray-200 border-solid rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Search your product here"
        />
      </div>

      <div className="flex justify-start items-center gap-[15px] p-2.5 m-1.5  ">
        <FontAwesomeIcon icon={faCartShopping} className="text-xl font-light" />
        <FontAwesomeIcon icon={faUser} className="text-xl font-light" />
      </div>


    </header>
  );
}
