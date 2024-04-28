export const revalidate = 0;
import React from 'react';
import DeliveryTable from './components/delivery';
import { getDeliveries } from './actions/get-deliveries';

async function page() {
    const deliveries = await getDeliveries();
    return (
        <div>
            <h1 class='text-3xl font-bold mb-5'>Delivery Boys</h1>
            <DeliveryTable deliveries={deliveries} />
        </div>
    );
}

export default page;
