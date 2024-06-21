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
import Dropdown from "./Dropdown";

export default function Nav() {
  return (
    <header className="flex w-full items-center justify-between fixed top-0 bg-white z-[50] ml-4 ">
      <Link href="/">
        <Image src={logo} width={130} alt="Picture of the author" />
      </Link>

      <div className="flex justify-start items-center gap-[15px] p-2.5 mr-5  ">
        <Link href="/wishlist">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl font-light"
          />
        </Link>
        <Dropdown />
      </div>
    </header>
  );
}
