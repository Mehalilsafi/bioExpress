'use client';
import React, { useState } from 'react';
import { markAsDelivered } from '../actions/mark-as-delivered';
import { convertToDate } from '@/utils/convertToDate';

const OrdersTable = ({ orders }) => {
    const [activeDescriptionId, setActiveDescriptionId] = useState(null);

    const toggleDescription = (userId) => {
        const descriptionRow = document.getElementById(`${userId}Description`);
        const toggleIcon = document
            .getElementById(`${userId}Toggle`)
            .querySelector('svg');

        if (activeDescriptionId !== null && activeDescriptionId !== userId) {
            const activeDescriptionRow = document.getElementById(
                `${activeDescriptionId}Description`
            );
            const activeToggleIcon = document
                .getElementById(`${activeDescriptionId}Toggle`)
                .querySelector('svg');
            activeDescriptionRow.classList.add('hidden');
            activeToggleIcon.classList.remove('flipped-icon');
        }

        descriptionRow.classList.toggle('hidden');
        toggleIcon.classList.toggle('flipped-icon');

        if (!descriptionRow.classList.contains('hidden')) {
            setActiveDescriptionId(userId);
        } else {
            setActiveDescriptionId(null);
        }
    };

    const handleDelivered = async (orderId) => {
        await markAsDelivered(orderId);
    };

    return (
        <div className='bg-gray-100'>
            <div className='items-center w-full mx-auto bg-white rounded-lg shadow-md'>
                <div className='mx-auto'>
                    <div className='overflow-x-auto'>
                        <table className='w-full table-auto'>
                            <thead>
                                <tr className='text-sm font-normal text-gray-600 border-b text-left bg-gray-50'>
                                    <th className='px-4 py-3'>First Name</th>
                                    <th className='px-4 py-3'>Last Name</th>
                                    <th className='px-4 py-3'>Address</th>
                                    <th className='px-4 py-3'>Postal Code</th>
                                    <th className='px-4 py-3'>City</th>
                                    <th className='px-4 py-3'>Phone Number</th>
                                    <th className='px-4 py-3'>Created At</th>
                                    <th className='px-4 py-3'>Status</th>
                                    <th className='px-4 py-3'></th>
                                </tr>
                            </thead>
                            <tbody className='text-sm font-normal text-gray-700'>
                                {orders.map((order, index) => (
                                    <React.Fragment key={index}>
                                        <tr className='py-10 cursor-pointer border-b border-gray-200 hover:bg-gray-100'>
                                            <td className='flex flex-row items-center px-4 py-4'>
                                                {order.firstName}
                                            </td>
                                            <td className='px-4 py-4'>
                                                {order.lastName}
                                            </td>
                                            <td>{order.adress}</td>
                                            <td>{order.codePostal}</td>
                                            <td>{order.ville}</td>
                                            <td>{order.phoneNumber}</td>
                                            <td>
                                                {convertToDate(
                                                    order.created_at
                                                )}
                                            </td>
                                            <td>{order.status}</td>
                                            <td className='p-4'>
                                                {order.status !==
                                                    'delivered' && (
                                                    <button
                                                        type='button'
                                                        className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none'
                                                        onClick={() =>
                                                            handleDelivered(
                                                                order.id
                                                            )
                                                        }
                                                    >
                                                        Delivered
                                                    </button>
                                                )}
                                            </td>
                                            <td
                                                className='p-4'
                                                onClick={() =>
                                                    toggleDescription(
                                                        order.userId
                                                    )
                                                }
                                            >
                                                <div
                                                    id={`${order.userId}Toggle`}
                                                    className='text-white bg-gray-100 border rounded-lg px-4 py-4 text-center inline-flex items-center'
                                                >
                                                    <svg
                                                        className='w-4 h-4'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                                                    </svg>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr
                                            id={`${order.userId}Description`}
                                            className='hidden py-4 px-4 border-t border-gray-200'
                                        >
                                            <td colSpan='10'>
                                                <table className='w-full'>
                                                    <thead>
                                                        <tr className='bg-gray-100 text-gray-800'>
                                                            <th className='px-4 py-2'>
                                                                Product Name
                                                            </th>
                                                            <th className='px-4 py-2'>
                                                                Product Price
                                                            </th>
                                                            <th className='px-4 py-2'>
                                                                Product Quantity
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {JSON.parse(
                                                            JSON.stringify(
                                                                order.productes
                                                            )
                                                        ).map(
                                                            (product, idx) => (
                                                                <tr
                                                                    key={idx}
                                                                    className='border-b border-gray-200'
                                                                >
                                                                    <td className='px-4 py-2 text-center'>
                                                                        {
                                                                            product.productName
                                                                        }
                                                                    </td>
                                                                    <td className='px-4 py-2 text-center'>
                                                                        $
                                                                        {
                                                                            product.productPrice
                                                                        }
                                                                    </td>
                                                                    <td className='px-4 py-2 text-center'>
                                                                        {
                                                                            product.quantity
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersTable;
