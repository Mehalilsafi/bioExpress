'use server';

import { supabaseServer } from '@/app/db/supaBaseServer';
import { redirect } from 'next/navigation';


export const loginUser = async (email, password) => {
    let { data: user } = await supabaseServer.auth.signInWithPassword({
        email,
        password,
    });

    if (user) {
        const userId = user.user.id;

        const role = user.user.user_metadata.role;

        if (role === 'delivery') {
            const { data } = await supabaseServer
                .from('delivery')
                .select('*')
                .eq('userId', userId)
                .single();

            if (data.isActive) {
                redirect('/delivery');
            }
            return;
        }

        if (role === 'seller') {
            const { data } = await supabaseServer
                .from('sellers')
                .select('*')
                .eq('userId', userId)
                .single();

            if (data.isActive) {
                redirect('/seller');
            }
            return;
        }

        redirect('/dashboard');
    }
};
