import React from 'react';
import ProductsTable from './components/products-table';

function page() {

    return (
        <div>
            <h1 class='text-3xl font-bold mb-5'>Products</h1>
            <ProductsTable />
        </div>
    );
}

export default page;
