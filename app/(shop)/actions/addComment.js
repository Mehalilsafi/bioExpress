'use server'
import { supabase } from '@/app/db/supabase';

export  async function addComment(comment,productId,sellerId) {

const { data, error } = await supabase
.from('comment')
.insert([
  { descreption: comment, productId:productId,sellerId:sellerId},
])
.select()

  }