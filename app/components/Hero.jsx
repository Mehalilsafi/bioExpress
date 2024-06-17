'use client'
import React, { useState, useEffect, useCallback } from "react"; // React 
import { supabase } from '@/app/db/supabase';
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
import {useCategory} from '@/lib/stor' 
const Hero = ({ publicity }) => {
  const currentPage = "products_page_publicity";
  const filteredPublicity = publicity.filter(
    (item) => item.page === currentPage
  );

  const categoryName = useCategory((state) => state.categoryName);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data: products, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          throw new Error(error.message);
        }

        // Fetch category names for each product
        const productsWithCategoryName = await Promise.all(products.map(async (product) => {
          const { data: category, error } = await supabase
            .from('categories')
            .select('categoryName')
            .eq('id', product.category)
            .single();

          if (error) {
            throw new Error(error.message);
          }

          if (category) {
            return {
              ...product,
              categoryName: category.categoryName
            };
          } else {
            return product;
          }
        }));

        setProducts(productsWithCategoryName);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = categoryName
    ? products.filter(product => product.categoryName === categoryName)
    : products;

  // Render loading indicator while loading
  if (loading) return <div>Loading...</div>;

  // Render error message if there's an error
  if (error) return <div>{error}</div>;

  return (
    <div className="rounded-md m-4">
      <div className="flex flex-row justify-between items-center my-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-0 p-3 md:p-0">
          Showing Results for <span className="text-[#A4CE4A]">{categoryName || "All Categories"}</span>
        </h1>
      </div>

      <div className="flex justify-center items-center md:items-stretch flex-col lg:flex-row lg:justify-between lg:gap-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-9/12 mt-7">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product
                key={product.id}
                productId={product.id}
                productName={product.productName}
                productPrice={product.productPrice}
                productImages={product.images}
                productDescription={product.description}
                sellerId={product?.sellerId}
              />
            ))
          ) : (
            <div>No products found for this category.</div>
          )}
        </div>

        {/* Check if there is valid publicity to display */}
        {filteredPublicity.length > 0 && filteredPublicity[0].imageUrl && (
          <div className="h-full">
            <Image
              className="mt-7"
              src={filteredPublicity[0].imageUrl}
              width={200}
              height={400}
              alt="product_page_publicity"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
