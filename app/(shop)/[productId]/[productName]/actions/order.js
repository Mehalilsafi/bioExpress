"use server";
import { supabase } from "@/app/db/supabase";

export default async function order(formData) {
  

  try {
    const { data, error } = await supabase
      .from("order")
      .insert([
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          adress: formData.adress,
          ville: formData.ville,
          codePostal: formData.codePostal,
          phoneNumber: formData.phoneNumber,
          productes: formData.productes,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting order: ", error);
      return { error: error.message };
    }

    console.log("Order inserted successfully: ", data);
    return { data };
  } catch (error) {
    console.error("Error inserting order: ", error);
    return { error: error.message };
  }
}