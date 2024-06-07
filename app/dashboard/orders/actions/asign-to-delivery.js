'use server';

import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const asignToDelivery = async (orderId, deliveryId) => {
    const { data } = await supabase
        .from('order')
        .update({ status: 'confirmed', deliveryId })
        .eq('id', orderId)
        .select();

    console.log('DTA : ', data);

    revalidatePath('/dashboard/orders');
};
