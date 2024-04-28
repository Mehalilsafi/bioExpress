'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { signupSeller } from '../actions/signup-seller-action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormData = {
    fullName: '',
    brandName: '',
    address: '',
    email: '',
    phoneNumber: '',
    description: '',
    productImage: null,
    socialMedia: '',
    password: '',
};

const SignupSeller = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        brandName: '',
        address: '',
        email: '',
        phoneNumber: '',
        description: '',
        productImage: null,
        socialMedia: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        if (!formData.brandName.trim()) {
            newErrors.brandName = 'Brand name is required';
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Invalid phone number';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }
        // if (!formData.productImage) {
        //     newErrors.productImage = 'Product image is required';
        // }
        if (!formData.socialMedia.trim()) {
            newErrors.socialMedia = 'Social media link is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            productImage: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Handle form submission here
            console.log('Form submitted:', formData);
            await signupSeller(formData);
            setFormData(initialFormData);
            toast.success('Success Wait Untill we activate your account we will call you thnx !', {
                position: 'top-center',
            });
        }
    };

    return (
        <div className='mx-auto max-w-4xl bg-[#EBF1E1] p-6 mt-20'>
            <h1 className='text-center text-2xl mb-6 text-[#535151]'>
                Join Bio Express Community
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <form
                        className='flex flex-col space-y-4'
                        onSubmit={handleSubmit}
                    >
                        {/* Full Name */}
                        <label
                            htmlFor='fullName'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Your full name
                        </label>
                        <input
                            type='text'
                            id='fullName'
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

                        {/* Brand Name */}
                        <label
                            htmlFor='brandName'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Brand name
                        </label>
                        <input
                            type='text'
                            id='brandName'
                            name='brandName'
                            value={formData.brandName}
                            onChange={handleInputChange}
                            className={`py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
                                errors.brandName ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.brandName && (
                            <span className='text-red-500 text-sm'>
                                {errors.brandName}
                            </span>
                        )}

                        {/* Address */}
                        <label
                            htmlFor='address'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Address
                        </label>
                        <input
                            type='text'
                            id='address'
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

                        {/* Email */}
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
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

                        {/* Phone Number */}
                        <label
                            htmlFor='phoneNumber'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Your phone number
                        </label>
                        <input
                            type='text'
                            id='phoneNumber'
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

                        {/* Password */}
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium mb-2 dark:text-white text-[#918A8A]'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
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
                    </form>
                </div>

                {/* Add another form section for description, productImage, and socialMedia */}
                <div>
                    <form className='flex flex-col space-y-4'>
                        {/* Description */}
                        <label
                            htmlFor='description'
                            className='block text-sm font-medium text-[#918A8A]'
                        >
                            Describe Your Product
                        </label>
                        <textarea
                            id='description'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
                            className={`py-2 px-3 border rounded-md text-sm h-32 focus:border-blue-500 focus:ring-blue-500 resize-none ${
                                errors.description ? 'border-red-500' : ''
                            }`}
                        ></textarea>
                        {errors.description && (
                            <span className='text-red-500 text-sm'>
                                {errors.description}
                            </span>
                        )}

                        {/* Product Image */}
                        {/* <label
                            htmlFor='productImage'
                            className='block text-sm font-medium text-[#918A8A]'
                        >
                            Insert Image of Your Product
                        </label>
                        <input
                            type='file'
                            id='productImage'
                            name='productImage'
                            onChange={handleFileChange}
                            className={`py-2 px-3 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border-gray-200 ${
                                errors.productImage ? 'border-red-500' : ''
                            }`}
                        /> */}
                        {errors.productImage && (
                            <span className='text-red-500 text-sm'>
                                {errors.productImage}
                            </span>
                        )}

                        {/* Social Media */}
                        <label
                            htmlFor='socialMedia'
                            className='block text-sm font-medium text-[#918A8A]'
                        >
                            Link Your Social Media
                        </label>
                        <input
                            type='text'
                            id='socialMedia'
                            name='socialMedia'
                            value={formData.socialMedia}
                            onChange={handleInputChange}
                            className={`py-2 px-3 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                                errors.socialMedia ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.socialMedia && (
                            <span className='text-red-500 text-sm'>
                                {errors.socialMedia}
                            </span>
                        )}
                    </form>
                </div>
            </div>

            <div className='flex justify-center mt-6'>
                <Link href='/thanku'>
                    <button
                        type='submit'
                        className='py-3 px-10 text-xl selection:inline-flex items-center gap-x-2  font-smedium rounded border border-[#A4CE4A] hover:border-[#eaffe9] disabled:opacity-50 disabled:pointer-events-none bg-[#A4CE4A]'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SignupSeller;
