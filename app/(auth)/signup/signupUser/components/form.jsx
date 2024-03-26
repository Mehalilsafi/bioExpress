import React from 'react';
import signup from '@/assets/signup.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle
} from "@fortawesome/free-solid-svg-icons";

const UserSignup = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen gap-8 mx-auto p-20 ">
        
            <div className="hidden md:flex items-center justify-center">
                <div className="w-100 h-100">
                    <Image src={signup} alt="Welcome SVG"  />
                </div>
            </div>

        
            <div className="md:w-full md:max-w-md">
                <div className="flex flex-col items-center justify-center bg-[#EBF1E1] p-10 rounded-md">
                    <h2 className="text-2xl mb-10 font-bold">Join Us!</h2>

        <form className="flex flex-col w-full">


            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white text-[#918A8A]">Username</label>

            <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter your username here"/>   

            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white mt-6 text-[#918A8A]">Email</label>

            <input
            type="email"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter your email here"/>


            <label htmlFor="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Password</label>

            <input
            type="password"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter your password here"
            />

                <div className="flex justify-center">
                <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] mt-7"
                >
                    Sign up
                </button>

                </div>

                <p className="mt-6 text-[#4d464caa]">Or use social media to sign in:</p>
                <div className="flex justify-between mt-3">
                    
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
        </form>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;
