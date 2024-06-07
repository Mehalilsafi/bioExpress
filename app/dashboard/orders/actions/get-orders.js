'use server';

import { supabase } from '@/app/db/supabase';

export async function getOrders() {
    let { data: orders, error } = await supabase.from('order').select();

    return orders;
}
