"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/lib/stor";
import { useSelected } from "@/lib/stor";
import { supabase } from "@/app/db/supabase";
import { useQuantity } from "@/lib/stor";
function Price({ products }) {
  const { counters } = useQuantity();

  // Map over products to include counter values
  const updatedProducts = products.map(product => ({
    ...product,
    UserQuantity: counters[product.id] || 0,
  }));

  console.log("Updated products:", updatedProducts);

  // Calculate the total price
  const totalPrice = updatedProducts.reduce((sum, product) => sum + (product.productPrice * product.UserQuantity), 0);

  return (
    <div className="lg:border-l-[1px] lg:border-inherit lg:border-solid h-full">
      <div className="flex flex-col gap-5">
        {updatedProducts.map((product) => (
          <div key={product.id} className="border-b-[1px] border-inherit border-solid">
            <div className="flex flex-row justify-between m-4 w-full">
              <div className="flex flex-row gap-3">
                <Image
                  width={100}
                  height={100}
                  src={product.images[0]}
                  alt="product image"
                />
                <div>
                  <p>{product.productName}</p>
                  <p>Quantity: {product.UserQuantity}</p>
                </div>
              </div>
              <p>{`${product.productPrice} DA`}</p>
            </div>

            <div className="flex flex-col m-4 gap-4">
              <div className="flex flex-row justify-between">
                <p>Sub-total</p>
                <p>{`${product.productPrice * product.UserQuantity} DA`}</p>
              </div>
            </div>

            <div className="flex flex-row justify-between m-4 w-full">
              <p>Total</p>
              <p>{`${product.productPrice * product.UserQuantity} DA`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between m-4 w-full">
        <p>Products Total:</p>
        <p>{`${totalPrice} DA`}</p>
      </div>
    </div>
  );
}

export default Price;