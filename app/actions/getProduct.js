'use server'
import { supabase } from '@/app/db/supabase';
export default async function getProduct() {
    try {
      const { data: products, error } = await supabase
        .from('products')
        .select('*');
      
      if (error) {
        throw new Error(error.message);
      }
      
      console.log("Products from Supabase:", products);
      return products;
    } catch (error) {
      console.error("Error fetching products from Supabase:", error);
      return []; // Return empty array or handle error appropriately
    }
  }