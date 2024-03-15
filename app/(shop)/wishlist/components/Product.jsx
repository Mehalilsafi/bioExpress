import React from 'react'
import Image from 'next/image'
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "./Counter";
import { useCartStore } from "@/lib/stor";

export default function Product({Products}) {
    const {deleteItemFromCart} = useCartStore()

    function handleDelete(productId){
        deleteItemFromCart(productId)
    }
  return (
    
    <div className="flex flex-col gap-5 ">
    {Products.map((product) => (
      <div
        key={product}
        className="flex items-center h-[200px] p-3 gap-4 rounded bg-white"
      >
        <input
          type="checkbox"
          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id={`hs-default-checkbox-${product}`}
        />
        <Image
          src={product.url}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-2xl">{product.productName}</h1>
          <p className="max-w-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus officiis adipisci nostrum
          </p>
        </div>
        <div className="flex items-end gap-[10px]">
          <Counter />
          <FontAwesomeIcon 
          icon={faTrash} 
          className="mb-3" 
          onClick={() => handleDelete(Products.productId)}
          />
        </div>
      </div>
    ))}
  </div>
  )
}
