// app/seller/actions/delete-comment.js
'use server';
import { supabase } from '@/app/db/supabase';

export async function deleteComment(commentId) {
    const { error } = await supabase
        .from('comment')
        .delete()
        .eq('id', commentId);

    if (error) {
        console.error('Error deleting comment:', error);
        return false;
    }

    return true;
}
