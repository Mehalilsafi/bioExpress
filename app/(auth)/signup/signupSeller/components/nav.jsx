"use client";

import React from "react";
import Logo from '@/assets/logo.svg'; 
import Image from 'next/image';
import Link from "next/link";
const NavBar = () => {
    return (
        <header className=" p-4 flex top-0 justify-between items-center fixed w-full ">
        
        
                <div className="w-150 mr-5">

                <Link href='/'>
      <Image src={Logo} width={130}  alt="Picture of the author" />
      </Link>
                </div>
            
            

        </header>
    );
    };

export default NavBar;
