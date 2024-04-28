'use client';
import React from 'react';

import { activateDeactivateDelivery } from '../actions/activate-deactivate-delivery';

function DeliveryTable({ deliveries }) {
    const handleActivateDeactivate = async (delivery) => {
        await activateDeactivateDelivery(delivery);
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
                                            Full Name
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
                                            Situation
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            vehicle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                                    {deliveries?.map((delivery) => (
                                        <tr key={delivery.id}>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {delivery.fullName}
                                            </td>

                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {delivery.phoneNumber}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {delivery.situation}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {delivery.adress}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {delivery.vehicleOwnership}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                                <button
                                                    type='button'
                                                    className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent '
                                                    onClick={() => {
                                                        handleActivateDeactivate(
                                                            delivery
                                                        );
                                                    }}
                                                    style={{
                                                        color: delivery.isActive
                                                            ? 'red'
                                                            : 'green',
                                                    }}
                                                >
                                                    <span>
                                                        {delivery.isActive
                                                            ? 'Deactivate delivery'
                                                            : 'Activate delivery'}
                                                    </span>
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
        </div>
    );
}

export default DeliveryTable;
