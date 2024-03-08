'use client';
import React, { useState } from 'react';
import NewSellerModal from './seller-modal';
import { MdOutlineDelete, MdEdit } from 'react-icons/md';

function SellersTable() {
    const [selectedSeller, setSelectedSeller] = useState(null);

    const sellers = [
        {
            id: 1,
            name: 'John Brown',
            email: 'john@example.com',
            phone: '+1234567890',
            brandName: 'Example Brand',
            location: 'New York, USA',
        },
        {
            id: 1,
            name: 'John Brown',
            email: 'john@example.com',
            phone: '+1234567890',
            brandName: 'Example Brand',
            location: 'New York, USA',
        },
        {
            id: 1,
            name: 'John Brown',
            email: 'john@example.com',
            phone: '+1234567890',
            brandName: 'Example Brand',
            location: 'New York, USA',
        },
    ];

    const openModalForEditSeller = (seller) => {
        setSelectedSeller(seller);
    };

    const handleSaveSeller = (sellerData) => {
        // Logic to save seller data
        console.log('Saved Seller Data:', sellerData);
        setSelectedSeller(null);
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
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Seller Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Phone Number
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Brand Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'
                                        >
                                            <button
                                                type='button'
                                                class='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none bg-[#A4CE4A] text-black'
                                                data-hs-overlay='#hs-slide-down-animation-modal'
                                            >
                                                new seller
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                                    {sellers.map((seller) => (
                                        <tr key={seller.id}>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.name}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.email}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.phone}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.brandName}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.location}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                                <button
                                                    type='button'
                                                    className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-500 mr-2'
                                                    onClick={() =>
                                                        openModalForEditSeller(
                                                            seller
                                                        )
                                                    }
                                                    data-hs-overlay='#hs-slide-down-animation-modal'
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
            <NewSellerModal
                onSave={handleSaveSeller}
                sellerData={selectedSeller}
            />
        </div>
    );
}

export default SellersTable;
