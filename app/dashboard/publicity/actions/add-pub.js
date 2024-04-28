'use server';
import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';
export async function addPublicity(data) {
    await supabase
        .from('publicities')
        .update(data)
        .eq('page', data.page)
        .select();
    revalidatePath('/dashboard/publicity');
}
