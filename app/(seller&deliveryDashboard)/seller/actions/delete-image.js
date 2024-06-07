'use server';
import { revalidatePath } from 'next/cache';

const { supabase } = require('@/app/db/supabase');

export const deleteImage = async (product, imageUrl) => {
    const fileUrlPath = imageUrl.replace(
        'https://xjjgfrumxwkrggavbrbc.supabase.co/storage/v1/object/public/productImages/',
        ''
    );

    await supabase.storage.from('images').remove(fileUrlPath);

    await supabase
        .from('products')
        .update({ images: product.images.filter((el) => el != imageUrl) })
        .eq('id', product.id)
        .select();

    revalidatePath('/dashboard/products');
};
