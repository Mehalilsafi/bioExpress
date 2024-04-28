'use server';

import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const deleteCategory = async (id) => {
    await supabase.from('categories').delete().eq('id', id);
    revalidatePath('/dashboard/categories');
};
