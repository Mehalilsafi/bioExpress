import React, { useState, useEffect } from 'react';

function NewSellerModal({ isOpen, onClose, onSave, sellerData }) {
    const [sellerInfo, setSellerInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        brandName: '',
        location: '',
    });

    useEffect(() => {
        if (sellerData) {
            setSellerInfo(sellerData);
        } else {
            setSellerInfo({
                name: '',
                email: '',
                phoneNumber: '',
                brandName: '',
                location: '',
            });
        }
    }, [sellerData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSellerInfo({
            ...sellerInfo,
            [name]: value,
        });
    };

    const handleSaveChanges = () => {
        onSave(sellerInfo);
        setSellerInfo({
            name: '',
            email: '',
            phoneNumber: '',
            brandName: '',
            location: '',
        });
    };

    return (
        <div
            className='hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none'
            id='hs-slide-down-animation-modal'
        >
            <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
                <div className='flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
                    <div className='flex justify-between items-center py-3 px-4 border-b dark:border-gray-700'>
                        <h3 className='font-bold text-gray-800 dark:text-white'>
                            {sellerData ? 'Update Seller' : 'Add New Seller'}
                        </h3>
                        <button
                            type='button'
                            className='flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                            data-hs-overlay='#hs-slide-down-animation-modal'
                        >
                            <span className='sr-only'>Close</span>
                            <svg
                                className='flex-shrink-0 size-4'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M18 6 6 18' />
                                <path d='m6 6 12 12' />
                            </svg>
                        </button>
                    </div>
                    <div className='p-4 overflow-y-auto'>
                        <label
                            htmlFor='name'
                            className='block font-medium text-gray-800 dark:text-white'
                        >
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={sellerInfo.name}
                            onChange={handleInputChange}
                            placeholder='Enter seller name'
                            className='mt-1 p-2 border border-gray-300 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                        />
                        <label
                            htmlFor='email'
                            className='block mt-3 font-medium text-gray-800 dark:text-white'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={sellerInfo.email}
                            onChange={handleInputChange}
                            placeholder='Enter email'
                            className='mt-1 p-2 border border-gray-300 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                        />
                        <label
                            htmlFor='phoneNumber'
                            className='block mt-3 font-medium text-gray-800 dark:text-white'
                        >
                            Phone Number
                        </label>
                        <input
                            type='text'
                            id='phoneNumber'
                            name='phoneNumber'
                            value={sellerInfo.phoneNumber}
                            onChange={handleInputChange}
                            placeholder='Enter phone number'
                            className='mt-1 p-2 border border-gray-300 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                        />
                        <label
                            htmlFor='brandName'
                            className='block mt-3 font-medium text-gray-800 dark:text-white'
                        >
                            Brand Name
                        </label>
                        <input
                            type='text'
                            id='brandName'
                            name='brandName'
                            value={sellerInfo.brandName}
                            onChange={handleInputChange}
                            placeholder='Enter brand name'
                            className='mt-1 p-2 border border-gray-300 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                        />
                        <label
                            htmlFor='location'
                            className='block mt-3 font-medium text-gray-800 dark:text-white'
                        >
                            Location
                        </label>
                        <input
                            type='text'
                            id='location'
                            name='location'
                            value={sellerInfo.location}
                            onChange={handleInputChange}
                            placeholder='Enter location'
                            className='mt-1 p-2 border border-gray-300 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                        />
                    </div>
                    <div className='flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700'>
                        <button
                            type='button'
                            onClick={handleSaveChanges}
                            className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                            data-hs-overlay='#hs-slide-down-animation-modal'
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSellerModal;
