"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/lib/stor";
import { useSelected } from "@/lib/stor";
import { supabase } from "@/app/db/supabase";
export default function Price({ loading, products }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="lg:border-l-[1px] lg:border-inherit lg:border-solid h-full ">
      <div className="flex flex-col gap-5 ">
        {products.map((product) => (
          <div
            key={product.productId}
            className="border-b-[1px] border-inherit border-solid"
          >
            <div className="flex flex-row justify-between m-4 w-full ">
              <div className="flex flex-row gap-3">
                <Image
                  width={100}
                  height={100}
                  src={product.images[0]}
                  alt="product image"
                />
                <p>{product.productName}</p>
              </div>
              <p>{`${product.productPrice} DA`}</p>
            </div>

            <div className="flex flex-col  m-4 gap-4">
              <div className="flex flex-row justify-between">
                <p>sub-total</p>
                <p>{`${product.productPrice} DA`}</p>
              </div>
            </div>

            <div className="flex flex-row justify-between m-4 w-full">
              <p>Total</p>
              <p>{`${product.productPrice} DA`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
