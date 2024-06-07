'use server';

import { supabase } from '@/app/db/supabase';
import { supabaseServerClient } from '@/app/db/supaBaseServer';

export async function getProducts() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();
    let { data: products, error } = await supabase
        .from('products')
        .select('* , categories (categoryName)')
        .eq('sellerId', user.id);

    return products;
}
