import React, { useState, useEffect } from 'react';

function NewProductModal({ onSave }) {
    const [productInfo, setProductInfo] = useState({
        name: '',
        price: '',
        image: '',
        category: '',
        description: '',
        quantity: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductInfo({
            ...productInfo,
            [name]: value,
        });
    };

    const handleSaveChanges = () => {
        onSave(productInfo);
        setProductInfo({
            name: '',
            price: '',
            image: '',
            category: '',
            description: '',
            quantity: '',
        });
    };

    return (
        <div
            class='hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none'
            id='hs-product-modal'
        >
            <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
                <div className='flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] p-5'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Add New Product
                    </h2>
                    <label className='block mb-2'>
                        Name:
                        <input
                            type='text'
                            name='name'
                            value={productInfo.name}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <label className='block mb-2'>
                        Price:
                        <input
                            type='text'
                            name='price'
                            value={productInfo.price}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>

                    <label className='block mb-2'>
                        Image:
                        <input
                            type='file'
                            accept='image/*'
                            name='image'
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <label className='block mb-2'>
                        Category:
                        <input
                            type='text'
                            name='category'
                            value={productInfo.category}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <label className='block mb-2'>
                        Description:
                        <textarea
                            name='description'
                            value={productInfo.description}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <label className='block mb-2'>
                        Quantity:
                        <input
                            type='text'
                            name='quantity'
                            value={productInfo.quantity}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <div className='flex justify-end'>
                        <button
                            onClick={handleSaveChanges}
                            className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
                        >
                            Save
                        </button>
                        <button
                            data-hs-overlay='#hs-product-modal'
                            className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProductModal;
