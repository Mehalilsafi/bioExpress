import React from "react";
import Link from 'next/link'; 
import Logo from '@/assets/logo.svg'; 
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className="p-4 flex justify-between items-center fixed top-0 w-full z-10">
            <div className="flex items-center">
                <div className="w-100 mr-5">
                    <Image src={Logo} alt="Logo" />
                </div>
            </div>
            <div>
                <Link href="/choice"> 
                    <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] mr-6"
                    >
                        Join Us
                    </button>
                </Link>
                <Link href="/signin"> 
                    <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] mr-6"
                    >
                        Sign in
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
