"use client"
import React from "react";
import Image from "next/image";
import { useStore } from "@/lib/stor";
export default function Price({ product }) {
  const productImages = product?.images;

  const firstImageUrl =
    productImages && productImages?.length > 0 ? productImages[0] : null;
    const UserQuantity = useStore((state) => state.counter);
    const quantity = UserQuantity;
    const productPrice = product?.productPrice || 0;
    const subTotal = productPrice * quantity;
    const total = subTotal; // Here you can add more calculations if needed (e.g., tax, shipping)
  
    return (
      <div className="lg:border-l-[1px] lg:border-inherit lg:border-solid h-full">
        <div className="flex flex-row justify-between m-4 w-full">
          <div className="flex flex-row gap-3">
            <Image
              width={100}
              height={100}
              src={firstImageUrl}
              alt="product image"
            />
            <div className="flex flex-col justify-center">
              <p>{product?.productName}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
          <p>{`${productPrice} DA`}</p>
        </div>
        <div className="flex flex-col m-4 gap-4">
          <div className="flex flex-row justify-between">
            <p>Sub-total</p>
            <p>{`${subTotal} DA`}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between m-4 w-full">
          <p>Total</p>
          <p>{`${total} DA`}</p>
        </div>
      </div>
    );
  };