'use server';

import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const deleteOrder = async (id) => {
    console.log('Deleting order with ID:', id);
    await supabase.from('order').delete().eq('id', id);
    revalidatePath('/dashboard/orders');
};
