import React from 'react';
import SideBar from './components/SideBar';
import { supabaseServerClient } from '../db/supaBaseServer';
import { redirect } from 'next/navigation';

async function layout({ children }) {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    if (!user) {
        redirect('/signin');
    }
    return (
        <div>
            <div className='fixed h-screen w-64'>
                <SideBar />
            </div>
            <div className='pl-64'>
                <div className='p-5'>{children}</div>
            </div>
        </div>
    );
}

export default layout;
