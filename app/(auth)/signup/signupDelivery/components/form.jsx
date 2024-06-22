'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Delivery from '@/assets/DeliverySignup.svg';
import Image from 'next/image';
import { signupDelivery } from '../../actions/signup-delivery-action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormData = {
    fullName: '',
    situation: 'Student',
    address: '',
    email: '',
    phoneNumber: '',
    vehicleOwnership: '',
    password: '',
};

const DeliverySignup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        situation: 'Student',
        address: '',
        email: '',
        phoneNumber: '',
        vehicleOwnership: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        }
        if (!formData.vehicleOwnership.trim()) {
            newErrors.vehicleOwnership = 'Vehicle ownership status is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Handle form submission here
            console.log('Form submitted:', formData);
            // Redirect or perform any other actions after submission
            await signupDelivery(formData);
            setFormData(initialFormData);
            toast.success(
                'Success Wait Untill we activate your account we will call you thnx !',
                {
                    position: 'top-center',
                }
            );
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen gap-8 mx-auto p-20'>
            <div className='hidden md:flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-[#918A8A] mb-4'>
                        Join Bio Express Community!
                    </h2>
                    <Image
                        src={Delivery}
                        alt='Welcome SVG'
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div className='md:w-full md:max-w-md'>
                <div className='flex flex-col items-center justify-center bg-[#EBF1E1] p-8 rounded-md'>
                    <form
                        className='flex flex-col w-full'
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor='fullName'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Your full name
                        </label>
                        <input
                            type='text'
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.fullName ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.fullName && (
                            <span className='text-red-500 text-sm'>
                                {errors.fullName}
                            </span>
                        )}

                        <label
                            htmlFor='situation'
                            className='block text-sm font-medium mb-2 mt-6 dark:text-white text-[#918A8A]'
                        >
                            Your situation
                        </label>
                        <select
                            name='situation'
                            value={formData.situation}
                            onChange={handleInputChange}
                            className={`py-3 px-4 pe-9 block w-full bg-white border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.situation ? 'border-red-500' : ''
                            }`}
                        >
                            <option value='Student'>Student</option>
                            <option value='Homeless'>Homeless</option>
                        </select>
                        {errors.situation && (
                            <span className='text-red-500 text-sm'>
                                {errors.situation}
                            </span>
                        )}

                        <label
                            htmlFor='address'
                            className='block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]'
                        >
                            Address
                        </label>
                        <input
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.address ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.address && (
                            <span className='text-red-500 text-sm'>
                                {errors.address}
                            </span>
                        )}

                        <label
                            htmlFor='email'
                            className='block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.email ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.email && (
                            <span className='text-red-500 text-sm'>
                                {errors.email}
                            </span>
                        )}

                        <label
                            htmlFor='phoneNumber'
                            className='block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]'
                        >
                            Phone Number
                        </label>
                        <input
                            type='text'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.phoneNumber ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.phoneNumber && (
                            <span className='text-red-500 text-sm'>
                                {errors.phoneNumber}
                            </span>
                        )}

                        <label
                            htmlFor='vehicleOwnership'
                            className='block text-sm font-medium mb-2 mt-5 dark:text-white text-[#918A8A]'
                        >
                            Do you own any vehicle?
                        </label>
                        <input
                            type='text'
                            name='vehicleOwnership'
                            value={formData.vehicleOwnership}
                            onChange={handleInputChange}
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.vehicleOwnership ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.vehicleOwnership && (
                            <span className='text-red-500 text-sm'>
                                {errors.vehicleOwnership}
                            </span>
                        )}

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
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.password ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.password && (
                            <span className='text-red-500 text-sm'>
                                {errors.password}
                            </span>
                        )}

                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='py-4 px-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] mt-7 '
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
