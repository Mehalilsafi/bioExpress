'use server';

import { supabase } from '@/app/db/supabase';
import { supabaseServerClient } from '@/app/db/supaBaseServer';

export async function getOrders() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    let { data: orders } = await supabase
        .from('order')
        .select()
        .eq('deliveryId', user.id);

    return orders;
}
