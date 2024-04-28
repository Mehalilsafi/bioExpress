'use client';

import React, { useState } from 'react';
import Login from '@/assets/login.svg';
import Image from 'next/image';
import { loginUser } from '../../actions/login';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here, you can access form data from formData state
        console.log('Form submitted:', formData);
        await loginUser(formData.email, formData.password);
    };

    return (
        <div className='flex items-center justify-center h-screen '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col items-center justify-center bg-[#EBF1E1] p-5 rounded-md'>
                    <h2 className='text-2xl  mb-10'>Welcome!</h2>

                    <form
                        className='flex flex-col w-full'
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Email
                        </label>
                        <input
                            type='text'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                            placeholder='Enter your email here'
                        />

                        <label
                            htmlFor='password'
                            className='block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleInputChange}
                            className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                            placeholder='Enter your password here'
                        />

                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] mt-7'
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

                <div className='hidden md:flex items-center justify-center'>
                    <div className='w-500 h-500'>
                        <Image
                            src={Login}
                            alt='Welcome SVG'
                            layout='fill '
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
