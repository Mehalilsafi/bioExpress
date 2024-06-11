'use server'
import { supabase } from '@/app/db/supabase';




export  async function getDate() {


    let { data: comment, error } = await supabase
    .from('comment')
    .select('created_at')
  
  }