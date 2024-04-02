'use client';
import React, { useState } from 'react';
import NewProductModal from './product-modal';
import { MdOutlineDelete, MdEdit } from 'react-icons/md';

function ProductsTable() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Sample products data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10',
            image: 'product1.jpg',
            category: 'Category 1',
            description: 'Description for Product 1',
            quantity: 5,
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$15',
            image: 'product2.jpg',
            category: 'Category 2',
            description: 'Description for Product 2',
            quantity: 10,
        },
    ];

    const openModalForEditProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleSaveProduct = (productData) => {
        // Logic to save product data
        console.log('Saved Product Data:', productData);
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className='flex flex-col'>
                <div className='-m-1.5 overflow-x-auto'>
                    <div className='p-1.5 min-w-full inline-block align-middle'>
                        <div className='border rounded-lg overflow-hidden dark:border-gray-700'>
                            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white'>
                                <thead>
                                    <tr>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Product Name
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Price
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Image
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Category
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Description
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Quantity
                                        </th>
                                        <th className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'>
                                            <button
                                                type='button'
                                                className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none bg-[#A4CE4A] text-black'
                                                data-hs-overlay='#hs-product-modal'
                                            >
                                                new product
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.name}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.price}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className='h-12 w-12'
                                                />
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.category}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.description}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.quantity}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                                <button
                                                    type='button'
                                                    className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-500 mr-2'
                                                    onClick={() =>
                                                        openModalForEditProduct(
                                                            product
                                                        )
                                                    }
                                                    data-hs-overlay='#hs-product-modal'
                                                >
                                                    <MdEdit size={20} />
                                                    <span>Edit</span>
                                                </button>
                                                <button
                                                    type='button'
                                                    className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-500'
                                                >
                                                    <MdOutlineDelete
                                                        size={20}
                                                    />
                                                    <span>Delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <NewProductModal onSave={handleSaveProduct} />
        </div>
    );
}

export default ProductsTable;
