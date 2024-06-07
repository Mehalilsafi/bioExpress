'use server';
import { supabase } from '@/app/db/supabase';
import { revalidatePath } from 'next/cache';

export const updateProduct = async (product) => {
    await supabase
        .from('products')
        .update({
            productName: product.productName,
            productPrice: product.productPrice,
            images: product.images,
            category: product.category,
            description: product.description,
            quantity: product.quantity,
        })
        .eq('id', product.id);

    revalidatePath('/dashboard/products');
};
