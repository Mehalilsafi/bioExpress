'use client'
import React from "react"; // React components

// Custom components

import Product from "./Product"; // Custom component for displaying products

// Next.js components
import Link from "next/link"; // Next.js component for routing
import Image from "next/image"; // Next.js component for optimized images

// Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome icon component
import {} from "@fortawesome/free-solid-svg-icons"; // Specific Font Awesome icons

// SVG assets


import { useCartStore } from "@/lib/stor";

import getFilterProudct from "../actions/getFilterProudct";
//import {useCategory} from '@/lib/stor' 

export default  function Hero({ publicity, proudct }) {

  //const categoryName = useCategory();
  const currentPage = "products_page_publicity";
  const filteredPublicity = publicity.filter(
    (item) => item.page == currentPage
  );
  

  return (
    <div className=" rounded-md m-4">
      <div className="flex flex-row justify-between items-center  my-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-0 p-3 md:p-0">
          Showing Results for <span className="text-[#A4CE4A]">Jam</span>
        </h1>
      </div>

      <div className="flex justify-center items-center md:items-stretch flex-col  lg:flex-row lg:justify-between lg:gap-4 w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-9/12 mt-7">
          {proudct.map((product) => (
            <Product
              key={product.id}
              productId={product.id}
              productName={product.productName}
              productPrice={product.productPrice}
              productImages={product.images}
              ProductDescription={product.description}
              sellerId={product?.sellerId}
            />
          ))}
        </div>

        {filteredPublicity.length > 0 && (
          <div className="h-full">
            {/* Access imageUrl from the first item in filteredPublicity */}
            <Image
              className="mt-7"
              src={filteredPublicity[0].imageUrl} // Access imageUrl from the first item in filteredPublicity
              width={200}
              height={400}
              alt="product_page_publicity"
            />
          </div>
        )}
      </div>
    </div>
  );
}
