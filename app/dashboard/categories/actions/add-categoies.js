'use server';
import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';
export async function addCategory(data) {
    await supabase
        .from('categories')
        .insert([{ categoryName: data }])
        .select();
    revalidatePath('/dashboard/categories');
}
