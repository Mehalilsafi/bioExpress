'use server';

import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export async function markAsDelivered(orderId) {
    const { data, error } = await supabase
        .from('order')
        .update({ status: 'delivered' })
        .eq('id', orderId);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/delivery');

    return data;
}
