import React from 'react';
import SellersTable from './components/sellers-table';

function page() {
    return (
        <div>
            <h1 class='text-3xl font-bold mb-5'>Sellers</h1>
            <SellersTable />
        </div>
    );
}

export default page;
