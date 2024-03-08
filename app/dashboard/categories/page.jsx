import React from 'react';
import CategoriesTable from './components/categories-table';

function page() {
    return (
        <div>
            <h1 class='text-3xl font-bold mb-5'>Categories</h1>
            <CategoriesTable />
        </div>
    );
}

export default page;
