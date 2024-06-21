'use client';
import React, { useState } from 'react';
import { asignToDelivery } from '../actions/asign-to-delivery';
import { deleteOrder } from '../actions/cancel-order'; // Import the deleteOrder function
import { convertToDate } from '@/utils/convertToDate';

const OrdersTable = ({ orders, drivers }) => {
    const [activeDescriptionId, setActiveDescriptionId] = useState(null);
    const [deliveryOption, setDeliveryOption] = useState('');
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

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

    const handleConfirm = (orderId) => {
        console.log('====================================');
        console.log(orderId);
        console.log('====================================');
        setSelectedOrderId(orderId);
        // document.querySelector('[data-hs-overlay="#hs-basic-modal"]').click();
    };

    const handleDelete = async (orderId) => {
        await deleteOrder(orderId);
    };

    const handleDeliveryOptionChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handleDriverChange = (event) => {
        setSelectedDriver(event.target.value);
    };

    const handleSaveChanges = async () => {
        if (selectedDriver) {
            await asignToDelivery(selectedOrderId, selectedDriver);
            setSelectedOrderId(null);
            // document
            //     .querySelector('[data-hs-overlay="#hs-basic-modal"]')
            //     .click();
        }
        console.log('====================================');
        console.log(selectedOrderId, selectedDriver);
        console.log('====================================');
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
                                    <th className='px-4 py-3'></th>
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
                                                {order.status === 'ordered' && (
                                                    <button
                                                        type='button'
                                                        className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                                                        data-hs-overlay='#hs-basic-modal'
                                                        onClick={() =>
                                                            handleConfirm(
                                                                order.id
                                                            )
                                                        }
                                                    >
                                                        Assign To Delivery
                                                    </button>
                                                )}
                                            </td>
                                            <td className='p-4'>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(order.id)
                                                    }
                                                    className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none'
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                            <td
                                                className='p-4'
                                                onClick={() =>
                                                    toggleDescription(order.id)
                                                }
                                            >
                                                <div
                                                    id={`${order.id}Toggle`}
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
                                            id={`${order.id}Description`}
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
                                                            <th className='px-4 py-2'>
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {order.productes &&
                                                            JSON.parse(
                                                                order.productes
                                                            ).map(
                                                                (
                                                                    product,
                                                                    idx
                                                                ) => (
                                                                    <tr
                                                                        key={
                                                                            idx
                                                                        }
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
                                                                                product.UserQuantity
                                                                            }
                                                                        </td>
                                                                        <td className='px-4 py-2 text-center'>
                                                                            {parseFloat(
                                                                                product.UserQuantity
                                                                            ) *
                                                                                parseFloat(
                                                                                    product.productPrice
                                                                                )}{' '}
                                                                            $
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

            <div
                id='hs-basic-modal'
                className='hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none'
            >
                <div className='sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
                    <div className='flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70'>
                        <div className='flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700'>
                            <h3 className='font-bold text-gray-800 dark:text-white'>
                                Select a Driver
                            </h3>
                            <button
                                type='button'
                                className='flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700'
                                data-hs-overlay='#hs-basic-modal'
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
                                    <path d='M18 6 6 18'></path>
                                    <path d='m6 6 12 12'></path>
                                </svg>
                            </button>
                        </div>
                        <div className='p-4 overflow-y-auto'>
                            <div className='grid space-y-2'>
                                {drivers.map((driver, idx) => (
                                    <label
                                        key={idx}
                                        htmlFor={`driver-${idx}`}
                                        className='max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400'
                                    >
                                        <input
                                            type='radio'
                                            name='driver'
                                            id={`driver-${idx}`}
                                            value={driver.userId}
                                            className='shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                                            onChange={handleDriverChange}
                                        />
                                        <span className='text-sm text-gray-500 ms-3 dark:text-neutral-400'>
                                            {driver.fullName}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700'>
                            <button
                                type='button'
                                className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'
                                data-hs-overlay='#hs-basic-modal'
                            >
                                Close
                            </button>
                            <button
                                type='button'
                                className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                                onClick={handleSaveChanges}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersTable;
