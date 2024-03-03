"use client";

import React from "react";
import Logo from '@/assets/logo.svg'; 
import Image from 'next/image';
const NavBar = () => {
    return (
        <div className=" p-4 flex justify-between items-center fixed w-full ">
        
        
                <div className="w-150 h-8 mr-5">

                <Image src={Logo} alt="Logo" />
                </div>
            
            

        </div>
    );
    };

export default NavBar;
