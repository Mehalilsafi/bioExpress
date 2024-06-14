// app/actions/get-orders.js
'use server';
import { supabase } from '@/app/db/supabase';
import { supabaseServerClient } from '@/app/db/supaBaseServer';

export async function getOrders() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    let { data: orders, error } = await supabase
        .from('order')
        .select('*')
        .eq('status', 'confirmed');

    if (error) {
        console.error('Error fetching orders:', error);
        return null;
    }

    // Parse JSON and filter orders to only include those with products of the current seller
    orders = orders
        .map((order) => {
            try {
                const parsedProducts = order.productes
                    ? JSON.parse(order.productes)
                    : [];

                return {
                    ...order,
                    products: parsedProducts.filter(
                        (product) => product && product.sellerId === user.id
                    ),
                };
            } catch (err) {
                console.error(
                    `Error parsing products for order ${order.id}:`,
                    err
                );
                return { ...order, products: [] };
            }
        })
        .filter((order) => order.products.length > 0);

    return orders;
}
