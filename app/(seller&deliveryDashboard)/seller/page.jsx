import React from 'react';

import UserCard from './components/user-card';
import Cards from './components/stats-card';
import ProductsTable from './components/products-table';
import { redirect } from 'next/navigation';
import { supabaseServerClient } from '@/app/db/supaBaseServer';

async function page() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    if (!user) {
        redirect('/signin');
    }
    return (
        <div>
            {/* <Navbar /> */}
            <div className='flex gap-5'>
                <div className='w-[20%] fixed'>
                    <UserCard />
                </div>
                <div className='flex-1 pl-[20%]'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold'>Products</p>
                        <div className='mt-5'>
                            <ProductsTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
