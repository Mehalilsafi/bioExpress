'use server';

import { supabase } from '@/app/db/supabase';

const { signupUser } = require('@/app/(auth)/actions/signup');

export const signupDelivery = async (data) => {
    // create user
    try {
        const user = await signupUser('delivery', data.email, data.password);

        const userId = user.user.id;

        // upload image

        // const image = await uploadImage(data.file);

        const { data: seller, error } = await supabase
            .from('delivery')
            .insert([
                {
                    fullName: data.fullName,
                    situation: data.situation,
                    adress: data.address,
                    phoneNumber: data.phoneNumber,
                    vehicleOwnership: data.vehicleOwnership,

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
