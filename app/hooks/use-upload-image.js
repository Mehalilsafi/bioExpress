import { supabase } from '../db/supabase';

const uploadImage = async (image) => {
    console.log('====================================');
    console.log(image);
    console.log('====================================');
    const { data, error } = await supabase.storage
        .from('productImages')
        .upload(`images/${image.name}`, image, {
            cacheControl: '3600',
            upsert: false,
        });

    if (error) {
        console.log('====================================');
        console.log(`Image with the name ${image.name} already exist`);
        console.log('====================================');
        throw new Error(error.message);
    }

    return data;
};

export default uploadImage;
