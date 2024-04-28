'use server';

import { supabase } from '@/app/db/supabase';

export async function getDeliveries() {
    let { data: deliveries, error } = await supabase
        .from('delivery')
        .select('*');

    return deliveries;
}
