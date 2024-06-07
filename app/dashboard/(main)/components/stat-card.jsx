'use client';

import React, { useEffect, useState } from 'react';
import { MdAttachMoney } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import { getCounts } from '../actions/getCounts';


function Cards() {
    const [counts, setCounts] = useState({
        driversCount: 0,
        sellersCount: 0,
        ordersCount: 0,
    });

    useEffect(() => {
        const fetchCounts = async () => {
            const fetchedCounts = await getCounts();
            setCounts(fetchedCounts);
        };

        fetchCounts();
    }, []);

    return (
        <div>
            <div className='flex items-center justify-center text-gray-800'>
                <div className='grid grid-cols-3 gap-6 w-full'>
                    <div className='flex items-center p-4 bg-green-50 rounded'>
                        <div className='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>
                            <FaRegUser size={30} />
                        </div>
                        <div className='flex-grow flex flex-col ml-4'>
                            <span className='text-xl font-bold'>
                                {counts.ordersCount}
                            </span>
                            <div className='flex items-center justify-between'>
                                <span className='text-gray-500'>Orders</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-4 bg-green-50 rounded'>
                        <div className='flex flex-shrink-0 items-center justify-center bg-orange-200 h-16 w-16 rounded'>
                            <FaRegUser size={30} />
                        </div>
                        <div className='flex-grow flex flex-col ml-4'>
                            <span className='text-xl font-bold'>
                                {counts.sellersCount}
                            </span>
                            <div className='flex items-center justify-between'>
                                <span className='text-gray-500'>Sellers</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-4 bg-green-50 rounded'>
                        <div className='flex flex-shrink-0 items-center justify-center bg-orange-200 h-16 w-16 rounded'>
                            <TbTruckDelivery size={35} />
                        </div>
                        <div className='flex-grow flex flex-col ml-4'>
                            <span className='text-xl font-bold'>
                                {counts.driversCount}
                            </span>
                            <div className='flex items-center justify-between'>
                                <span className='text-gray-500'>
                                    Delivery workers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
