'use server'
import { supabase } from '@/app/db/supabase';
export default async function getCategories() {
  
let { data: categories, error } = await supabase
.from('categories')
.select('*')
return categories
}
