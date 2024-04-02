'use server';

import { supabase } from '@/app/db/supabase';

export async function getProducts() {
    let { data: products, error } = await supabase
        .from('products')
        .select('* , categories (categoryName)');

    return products;
}
