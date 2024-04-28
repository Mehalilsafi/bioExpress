'use server';

import { supabase } from '@/app/db/supabase';

export async function getPublicities() {
    let { data: pubs, error } = await supabase.from('publicities').select('*');

    if (!error) return pubs;
    else return [];
}
