"use server";
import { supabase } from "@/app/db/supabase";

export default async function getFilteredProducts(category) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category); 

  if (error) {
    console.error("Error fetching filtered products:", error);
    throw error;
  }

  return products;
}

