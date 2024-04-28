export const revalidate = 0;
import React from 'react';
import SellersTable from './components/sellers-table';
import { getSellers } from './actions/get-seller';

async function page() {
    const sellers = await getSellers();
    return (
        <div>
            <h1 class='text-3xl font-bold mb-5'>Sellers</h1>
            <SellersTable sellers={sellers} />
        </div>
    );
}

export default page;
