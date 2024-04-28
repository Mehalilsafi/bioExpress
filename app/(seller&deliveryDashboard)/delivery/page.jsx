export const revalidate = 0;

import React from 'react';

import UserCard from './components/user-card';
import Cards from './components/stats-card';
import ProductsTable from './components/products-table';
import { supabaseServerClient } from '@/app/db/supaBaseServer';
import { redirect } from 'next/navigation';


export default async function page() {
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
                        <Cards />
                        <div className='mt-5'>
                            <ProductsTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
