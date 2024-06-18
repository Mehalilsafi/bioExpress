"use client";
import React from "react";
import order from "../actions/order";
import { useCartStore } from "@/lib/stor";
import { toast } from "react-toastify";
import { z } from "zod";

// Define Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").regex(/^[A-Za-z]+$/, "First Name can only contain letters"),
  lastName: z.string().min(1, "Last Name is required").regex(/^[A-Za-z]+$/, "Last Name can only contain letters"),
  adress: z.string().min(1, "Address is required"),
  codePostal: z.string().min(1, "Postal Code is required").regex(/^\d{5}$/, "Postal Code must be exactly 5 digits"),
  ville: z.string().min(1, "City is required").regex(/^[A-Za-z\s]+$/, "City can only contain letters and spaces"),
  phoneNumber: z.string().min(1, "Phone Number is required").regex(/^\+?\d{10,15}$/, "Phone Number must be 10 to 15 digits and can include a leading +"),
  productes: z.string(),
});

export default function Form({ data, error, product }) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    adress: "",
    codePostal: "",
    ville: "",
    phoneNumber: "",
    productes: JSON.stringify(product),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }

    // If validation is successful, submit the form
    order(formData)
      .then(() => {
        toast.success("Order placed successfully!");
      })
      .catch((err) => {
        toast.error("Failed to place order.");
      });
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1>Delivery</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="space-y-3 col-span-2">
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-3 col-span-2">
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-[1px]"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-3 w-full">
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-[1px]"
              placeholder="Address"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="space-y-3 col-span-2">
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-[1px]"
                placeholder="Postal Code"
                name="codePostal"
                value={formData.codePostal}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-3 col-span-2">
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-[1px]"
                placeholder="City"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full space-y-3">
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-[1px]"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <input
            type="hidden"
            name="productes"
            value={formData.productes}
          />
          <button
            type="submit"
            className="py-3 px-4 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#C5DCA0] text-gray-900 hover:bg-[#A4CE4A] disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 flex justify-center w-full"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

