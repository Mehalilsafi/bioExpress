'use server';

import { supabase } from '@/app/db/supabase';

export async function getCategories() {
    let { data: categories, error } = await supabase
        .from('categories')
        .select('*');

    if (!error) return categories;
    else return [];
}
