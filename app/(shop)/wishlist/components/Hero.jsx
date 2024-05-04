"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import olive from "@/assets/olive.svg";
import Empty from "@/assets/emtyCart.jpg";
import Product from "./Product";

import { useCartStore } from "@/lib/stor";
import Link from "next/link";

export default function Hero({ publicity }) {
  const cartItems = useCartStore((state) => state.cartItems);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectAll = () => {
    if (selectedProducts.length === cartItems.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts([...cartItems.map((item) => item.productId)]);
    }
  };

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const currentPage = "details_page_publicity";
  const filteredPublicity = publicity?.filter(
    (item) => item.page == currentPage
  );
  console.log("filterd page depend on the page Name", filteredPublicity);

  return (
    <div className="m-4">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl font-bold"
          />
          <h1 className="text-2xl font-bold">Wish List</h1>
        </div>
        <p className="">{`Cart -> Place order -> Pay -> Order Complete`}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex  items-center">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-default-checkbox"
            checked={selectedProducts.length === cartItems.length}
            onChange={handleSelectAll}
          />
          <label
            htmlFor="hs-default-checkbox"
            className="text-2xl ms-3 font-bold"
          >
            All items
          </label>
        </div>
        <Link
         href='/order'
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#A4CE4A] "
        >
          order now
        </Link>
      </div>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        {cartItems && cartItems.length > 0 ? (
          <Product
            Products={cartItems}
            selectedProducts={selectedProducts}
            onSelect={handleSelectProduct}
          />
        ) : (
          <div className="h-72 flex flex-col items-center justify-center">
            <h2 className="text-3xl mt-10 mb-5 font-bold">Cart is Empty</h2>
            <Image
              src={Empty}
              width={500}
              height={200}
              alt="Picture of the author"
            />
            <Link
              href="/"
              className="px-6 py-2 rounded-md text-white bg-[#A4CE4A]"
            >
              Go to home page
            </Link>
          </div>
        )}

        {filteredPublicity?.length > 0 && (
          <div>
            <Image
              src={filteredPublicity[0]?.imageUrl}
              width={200}
              height={400}
              alt="side_bar_publicity"
            />
          </div>
        )}
      </div>
    </div>
  );
}
