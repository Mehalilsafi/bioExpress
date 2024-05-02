'use server'
import { supabase } from '@/app/db/supabase';

export  async function getProductId(id) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
  
    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  
    return data;
  }
