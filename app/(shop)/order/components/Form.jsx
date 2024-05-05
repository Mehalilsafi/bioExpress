"use client";
import React from "react";
import order from "../actions/order";
import { useCartStore } from "@/lib/stor";
export default function Form() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div>
      <div className="flex flex-col gap-5 ">
        <h1>Delivery</h1>
        <form action={order}>
          <div className="grid grid-cols-4  gap-5 w-full">
            <div className=" space-y-3 col-span-2">
              <input
                type="text"
                class="py-3 px-4 block w-full border-gray-200 
              border-[1px]
              rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 "
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div className="space-y-3 col-span-2">
              <input
                type="text"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600     border-[1px]"
                placeholder="Last Name"
                name="lastName"
              />
            </div>
          </div>
          <div className="space-y-3 w-full">
            <input
              type="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600     border-[1px]"
              placeholder="adress"
              name="adress"
            />
          </div>

          <div className="grid grid-cols-4  gap-5 w-full">
            <div class="space-y-3 col-span-2">
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600     border-[1px]"
                placeholder="code postal"
                name="codePostal"
              />
            </div>
            <div className=" space-y-3 col-span-2">
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600     border-[1px]"
                placeholder="Ville"
                name="ville"
              />
            </div>
          </div>
          <div className="w-full space-y-3">
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600     border-[1px]"
              placeholder="Phone number "
              name="phoneNumber"
            />
          </div>
          <input type="hidden" name="productes" value={cartItems} />
          <button
            type="submit"
            className="py-3 px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#C5DCA0] text-gray-900 hover:bg-[#A4CE4A] disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 flex justify-center w-full "
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
