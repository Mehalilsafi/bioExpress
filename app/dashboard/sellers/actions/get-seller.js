'use server';

import { supabase } from '@/app/db/supabase';

export async function getSellers() {
    let { data: sellers, error } = await supabase.from('sellers').select('*');

    return sellers;
}
