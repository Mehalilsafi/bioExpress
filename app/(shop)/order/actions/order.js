"use server";
import { supabase } from "@/app/db/supabase";

export default async function order(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const address = formData.get("adress");
  const city = formData.get("ville");
  const postalCode = formData.get("codePostal");
  const phoneNumber = formData.get("phoneNumber");
  const cart = JSON.stringify(formData.get("productes"));

  try {
    const { data, error } = await supabase
      .from("order")
      .insert([
        {
          firstName: firstName,
          lastName: lastName,
          adress: address,
          ville: city,
          codePostal: postalCode,
          phoneNumber: phoneNumber,
          productes: cart,
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
