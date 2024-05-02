'use server'
import { supabase } from '@/app/db/supabase';

export default async function getPublicity() {
  
      const { data: publicities, error } = await supabase
        .from('publicities')
        .select('*');
 return publicities
  }