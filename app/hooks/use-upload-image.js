import { supabase } from '../db/supabase';

const uploadImage = async (image) => {
    const { data, error } = await supabase.storage
        .from('productImages')
        .upload(`images/${image.name}`, image, {
            cacheControl: '3600',
            upsert: true,
        });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export default uploadImage;
