'use server';

import { supabase } from '@/app/db/supabase';

export async function getCounts() {
    // Fetch the number of drivers
    const { data: drivers, error: driversError } = await supabase
        .from('delivery')
        .select('id');
    if (driversError) throw new Error(driversError.message);
    const driversCount = drivers.length;

    // Fetch the number of sellers
    const { data: sellers, error: sellersError } = await supabase
        .from('sellers')
        .select('id');
    if (sellersError) throw new Error(sellersError.message);
    const sellersCount = sellers.length;

    // Fetch the number of orders
    const { data: orders, error: ordersError } = await supabase
        .from('order')
        .select('id');
    if (ordersError) throw new Error(ordersError.message);
    const ordersCount = orders.length;

    return {
        driversCount,
        sellersCount,
        ordersCount,
    };
}
