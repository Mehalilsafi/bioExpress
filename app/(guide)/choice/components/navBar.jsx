"use client";

import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className=" p-4 flex justify-between items-center fixed w-full z-10">
      <div className="flex items-center">
        <div className="w-100 h-8 mr-5">
          <Link href="/">
            <Image src={Logo} width={130} alt="Picture of the author" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
