'use server';
import { supabase } from '@/app/db/supabase';
import { supabaseServerClient } from '@/app/db/supaBaseServer';
import { revalidatePath } from 'next/cache';
export async function addProduct(data) {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();
    await supabase
        .from('products')
        .insert([{ ...data, sellerId: user.id }])
        .select();
    revalidatePath('/dashboard/products');
}
