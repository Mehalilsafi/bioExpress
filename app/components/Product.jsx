"use client";
import React, { useState } from "react"; // React components
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/stor";

export default function Product({
  productId,
  productImages,
  productName,
  productPrice,
  ProductDescription,
}) {
   const firstImageUrl = productImages && productImages.length > 0 ? productImages[0] : null;
  const cartItems = useCartStore((state) => state.cartItems);
  const { addItemToCart } = useCartStore();
  const product = {
    productId: productId,
    productUrl: firstImageUrl,
    productName: productName,
    productPrice: productPrice,
    description:ProductDescription,
  };

  function handleCart() {
    const isProductInCart = cartItems.some(
      (item) => item.productId === product.productId
    );

    if (isProductInCart) {
      toast.error("Item is already in the cart!");
    } else {
      addItemToCart(product);
      toast.success("Item added to cart successfully!");
    }
  }

  const router = useRouter();

  function handlClick() {
    router.push(`/${productId}`);
  }
 
  return (
    <div className="relative group">
      <div className="relative">
        <a
          className="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          href="#"
        >
          <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
         
            <Image
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
              src={firstImageUrl}
              width={200}
              height={200}
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <div className="flex justify-between">
              <h3 className="font-medium text-lg">{productName}</h3>
              <p className="font-medium text-lg text-[#996534]">
                {productPrice}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <FontAwesomeIcon icon={faStar} className="text-amber-300" />
                <FontAwesomeIcon icon={faStar} className="text-amber-300" />
                <FontAwesomeIcon icon={faStar} className="text-amber-300" />
                <FontAwesomeIcon icon={faStar} className="text-amber-300" />
                <FontAwesomeIcon icon={faStar} className="text-amber-300" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">4.6</p>
            </div>
          </div>
        </a>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleCart}
          >
            Add to Cart
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handlClick}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
