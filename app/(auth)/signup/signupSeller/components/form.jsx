import React from 'react';
import Link from 'next/link';
const SignupSeller = () => {
    return (
        <div className="mx-auto max-w-4xl bg-[#EBF1E1] p-6 mt-20 ">
            <h1 className="text-center text-2xl mb-6 text-[#535151]">
                Join Bio Express Community
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form className="flex flex-col space-y-4">
                        <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white text-[#918A8A]">Your full name</label>
                        <input
                            type="text"
                            className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />

                        <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white text-[#918A8A]">Brand name</label>
                        <input
                            type="text"
                            className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />

                        <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white text-[#918A8A]">Address</label>
                        <input
                            type="text"
                            className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />

                        <label htmlFor="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Email</label>
                        <input
                            type="email"
                            className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />

                        <label htmlFor="input-label" className="block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]">Your phone number</label>
                        <input
                            type="text"
                            className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                    </form>
                </div>

                <div>
                    <form className="flex flex-col space-y-4">
                        <label htmlFor="description" className="block text-sm font-medium text-[#918A8A]">
                            Describe Your Product
                        </label>
                        <textarea
                            id="description"
                            className="py-2 px-3 border rounded-md text-sm h-32 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        ></textarea>

                        <label htmlFor="productImage" className="block text-sm font-medium text-[#918A8A]">
                            Insert Image of Your Product
                        </label>
                        <input
                            type="file"
                            id="productImage"
                            className="py-2 px-3 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border-gray-200"
                        />

                        <label htmlFor="socialMedia" className="block text-sm font-medium text-[#918A8A]">
                            Link Your Social Media
                        </label>
                        <input
                            type="text"
                            id="socialMedia"
                            className="py-2 px-3 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </form>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <Link href="/thanku">
                <button
                    type="button"
                    className="py-3 px-10 text-xl selection:inline-flex items-center gap-x-2  font-smedium rounded border border-[#A4CE4A] hover:border-[#eaffe9] disabled:opacity-50 disabled:pointer-events-none bg-[#A4CE4A]"
                >
                    Submit
                </button>
                </Link>
            </div>
        </div>
    );
};

export default SignupSeller;
