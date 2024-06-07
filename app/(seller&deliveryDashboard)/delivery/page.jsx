import React from 'react';
import OrdersTable from './components/orders-table';
import { getOrders } from './actions/get-orders';

import UserCard from './components/user-card';

async function page() {
    const orders = await getOrders();

    return (
        <div>
            {/* <Navbar /> */}
            <div className='flex gap-5'>
                <div className='w-[20%] fixed'>
                    <UserCard />
                </div>
                <div className='flex-1 pl-[20%]'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold'>Delivery Orders</p>
                        <div className='mt-5'>
                            <OrdersTable orders={orders} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
