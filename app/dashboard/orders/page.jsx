import React from 'react';
import OrdersTable from './components/orders-table';
import { getOrders } from './actions/get-orders';
import { getDrivers } from './actions/get-drivers';

async function page() {
    const orders = await getOrders();
    const drivers = await getDrivers();

    return (
        <div>
            <h1 class='text-3xl font-bold mb-5'>Orders</h1>

            <OrdersTable
                orders={orders}
                drivers={drivers}
            />
        </div>
    );
}

export default page;
