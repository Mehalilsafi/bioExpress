'use server';

const { supabase } = require('@/app/db/supabase');

export const signupUser = async (role, email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                role,
            },
        },
    });

    return data;
};
