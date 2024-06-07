'use server';

import { supabase } from '@/app/db/supabase';

export async function getDrivers() {
    let { data: delivery, error } = await supabase.from('delivery').select();

    return delivery;
}
