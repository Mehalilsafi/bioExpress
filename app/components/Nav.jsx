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
    <header className="flex mx-3.5 w-full items-center justify-between p-2.5 ">
      <Image src={logo} width={100} height={100} alt="Picture of the author" />

      <div className="flex gap-3">
        <input
          type="text"
          className="py-3 px-4 md:w-96 border-2 border-gray-200 border-solid rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Search your product here"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="self-center mt-1 md:mt-0"
        />
      </div>

      <div className="flex justify-start items-center gap-[15px] p-2.5 m-1.5  ">
        <FontAwesomeIcon icon={faCartShopping} className="text-xl font-light" />
        <FontAwesomeIcon icon={faUser} className="text-xl font-light" />
      </div>
    </header>
  );
}
