'use server';
import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const activateDeactivateSeller = async (seller) => {
    await supabase
        .from('sellers')
        .update({
            isActive: !seller.isActive,
        })
        .eq('id', seller.id);

    revalidatePath('/dashboard/sellers');
};
