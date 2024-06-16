"use client";

import React, { useState, useEffect } from "react";
import Form from "./Form";
import Price from "./Price";
import { useSelected } from "@/lib/stor";
import { supabase } from "@/app/db/supabase";
export default function Hero(data) {
  const cartItems = useSelected((state) => state.selectedProducts);
  console.log("cart itmes for order page", cartItems);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("array of prooduect productes  :",products)
  useEffect(() => {
    const fetchProducts = async () => {
      if (cartItems.length > 0) {
        try {
          const { data, error } = await supabase
            .from("products")
            .select("*")
            .in("id", cartItems);

          if (error) {
            console.error("Error fetching products:", error);
          } else {
            setProducts(data);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cartItems]);

  return (
    <div className="m-6 mt-24 grid grid-cols-4 gap-4 ">
      <div className="col-span-4 lg:col-span-3">
        <Form data={data} products={products} />
      </div>
      <div className="lg:col-span-1 col-span-4 ">
        <Price loading={loading} products={products} />
      </div>
    </div>
  );
}
