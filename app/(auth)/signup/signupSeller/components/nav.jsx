"use client";

import React from "react";
import Logo from '@/assets/logo.svg'; 
import Image from 'next/image';
const NavBar = () => {
    return (
        <header className=" p-4 flex top-0 justify-between items-center fixed w-full ">
        
        
                <div className="w-150 mr-5">

                <Image src={Logo} alt="Logo" />
                </div>
            
            

        </header>
    );
    };

export default NavBar;
