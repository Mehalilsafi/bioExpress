'use client';

import React, { useState } from 'react';
import { addCategory } from '../actions/add-categoies';

function NewCategoryModal() {
    const [categoryName, setCategoryName] = useState('');

    const handleInputChange = (event) => {
        setCategoryName(event.target.value);
    };

    const handleSaveChanges = async () => {
        await addCategory(categoryName);
        setCategoryName('');
    };

    return (
        <div>
            <div
                id='hs-slide-down-animation-modal'
                className='hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none'
            >
                <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
                    <div className='flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
                        <div className='flex justify-between items-center py-3 px-4 border-b dark:border-gray-700'>
                            <h3 className='font-bold text-gray-800 dark:text-white'>
                                Add New Category
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
                            <input
                                type='text'
                                value={categoryName}
                                onChange={handleInputChange}
                                placeholder='Enter category name'
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
        </div>
    );
}

export default NewCategoryModal;
