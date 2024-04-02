'use server';
import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';
export async function addProduct(data) {
    await supabase.from('products').insert([data]).select();
    revalidatePath('/dashboard/products');
}
