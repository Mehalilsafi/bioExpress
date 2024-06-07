'use server';

import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const deleteProduct = async (id) => {
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    await supabase.from('products').delete().eq('id', id);
    revalidatePath('/dashboard/products');
};
