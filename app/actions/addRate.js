
'use server'
import { supabase } from '@/app/db/supabase';

export default async function handleRate (newRating){

    const { data, error } = await supabase
    .from('ratings')
    .insert([{ product_id: productId, rating: newRating }]);
    
    if (error) {
        console.error('Error submitting rating:', error);
        return;
    }
} 