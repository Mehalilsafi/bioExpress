'use server';

import { supabase } from '@/app/db/supabase';

const { signupUser } = require('@/app/(auth)/actions/signup');
const { default: uploadImage } = require('@/app/hooks/use-upload-image');

export const signupSeller = async (data) => {
    // create user
    try {
        const user = await signupUser('seller', data.email, data.password);

        const userId = user.user.id;

        // upload image

        // const image = await uploadImage(data.file);

        const { data: seller, error } = await supabase
            .from('sellers')
            .insert([
                {
                    fullName: data.fullName,
                    brandName: data.brandName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    description: data.description,
                    socialMedia: data.socialMedia,
                    // productImage: image,
                    userId,
                },
            ])
            .select();
        return seller;
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
};
