'use server';

import { redirect } from 'next/navigation';

const { supabaseServer } = require('@/app/db/supaBaseServer');

const logout = async () => {
    let { error } = await supabaseServer.auth.signOut();

    if (!error) {
        redirect('/signin');
    }
};

export default logout;
