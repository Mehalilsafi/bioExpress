import React from 'react';
import { MdAttachMoney } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
function Cards() {
    return (
        <div>
            <div className='flex items-center justify-center text-gray-800'>
                <div className='grid grid-cols-2  gap-6 w-full'>
                    <div className='flex items-center p-4 bg-white rounded'>
                        <div className='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>
                            <MdAttachMoney size={35} />
                        </div>
                        <div className='flex-grow flex flex-col ml-4'>
                            <span className='text-xl font-bold'>$8,430</span>
                            <div className='flex items-center justify-between'>
                                <span className='text-gray-500'>
                                    Daily Revenue
                                </span>
                                <span className='text-green-500 text-sm font-semibold ml-2'>
                                    211 Order
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center p-4 bg-white rounded'>
                        <div className='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>
                            <MdAttachMoney size={35} />
                        </div>
                        <div className='flex-grow flex flex-col ml-4'>
                            <span className='text-xl font-bold'>20,000$</span>
                            <div className='flex items-center justify-between'>
                                <span className='text-gray-500'>
                                    Months Total
                                </span>
                                <span className='text-green-500 text-sm font-semibold ml-2'>
                                    1000 Order
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
