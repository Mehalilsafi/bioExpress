'use server'
import React from 'react'
import { supabase } from '@/app/db/supabase';
export default async function getProductByName(productName) {
    const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('productName', productName)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data;
}
