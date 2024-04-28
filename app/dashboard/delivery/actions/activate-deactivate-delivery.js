'use server';
import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const activateDeactivateDelivery = async (seller) => {
    await supabase
        .from('delivery')
        .update({
            isActive: !seller.isActive,
        })
        .eq('id', seller.id);

    revalidatePath('/dashboard/delivery');
};
