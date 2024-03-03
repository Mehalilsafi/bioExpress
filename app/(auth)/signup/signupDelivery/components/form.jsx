import React from 'react';
import Delivery from '@/assets/DeliverySignup.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle
} from "@fortawesome/free-solid-svg-icons";

const DeliverySignup = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen gap-8 mx-auto ">
        
        <div className="hidden md:flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
            <h2 className='text-[#918A8A] mb-4'>Join Bio Express Community!</h2>
            <Image src={Delivery} alt="Welcome SVG" width={500} height={500}/>
        </div>
        </div>

        
            <div className="md:w-full md:max-w-md">
                < div className="flex flex-col items-center justify-center bg-[#EBF1E1] p-8 rounded-md ">
                    
        
        <form className="flex flex-col  ">


            <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white text-[#918A8A]">Your full name</label>
            <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />   


            <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white mt-6 text-[#918A8A]">Your situation</label>
            <select className="py-3 px-4 pe-9 block w-full bg-white border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
            <option>Student</option>
            <option>Homeless</option>
            </select>


            <label for="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Adress</label>
            <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />


            <label for="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Email</label>
            <input
            type="email"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />


            <label for="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Phone Number</label>
            <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />


            <label for="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Do you own any vehicle ?</label>
            <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />



                <div className="flex justify-center">
                <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] mt-7"
                >
                    Submit
                </button>

                </div>

                
        </form>
        
                </div>
            </div>
        </div>
    );
};

export default DeliverySignup;
