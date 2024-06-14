// app/seller/actions/get-comments.js
'use server';
import { supabase } from '@/app/db/supabase';
import { supabaseServerClient } from '@/app/db/supaBaseServer';

export async function getComments() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    let { data: comments, error } = await supabase
        .from('comment')
        .select('* , products (productName , images)')
        .eq('sellerId', user.id);

    console.log('====================================');
    console.log(comments);
    console.log('====================================');

    if (error) {
        console.error('Error fetching comments:', error);
        return null;
    }

    return comments;
}
