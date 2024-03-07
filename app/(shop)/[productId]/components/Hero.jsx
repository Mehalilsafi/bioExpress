import React from "react";
import Image from "next/image";
import product from "@/assets/product.svg";
import Counter from "./Counter";
import Footer from "./Footer";
import getProduct from "@/lib/getProduct";


export async function generateStaticParams() {
  const products =  getProduct()
  return products.map((product) => ({
    productId: product.productId,
  }))
}

export default async function Hero({ params }) {
    console.log("params is here  **********"+ params)
   
    const productId = params?.productId;
    const product = await getProduct(productId);
  const photoArr = [1, 2, 3];
 
    
  return (
    <div className="m-6">
      <div className="md:flex md:gap-8">
        <div className="flex flex-col md:flex-row gap-[20px] md:col-span-2 md:w-6/12">
          <Image
            src={product.url}
            width={500}
            height={500}
            alt="Picture of the author"
          />

          <div className="flex flex-row md:flex-col items-center justify-between md:justify-center  md:gap-[15px] ">
            {photoArr.map((ele) => (
              <Image
                src={product.url}
                width={100}
                height={100}
                alt="Picture of the author"
                key={ele}
              />
            ))}
          </div>
        </div>

        <div className=" flex flex-col gap-3 md:gap-6  mt-4 md:w-6/12">
          <h1 className="font-medium text-3xl"> {product.productName} </h1>
          <p className="font-medium text-sm ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            excepturi, officiis sunt quisquam eligendi optio et dolorum nihil
            vero, cumque iste, tempora incidunt deleniti eaque maiores impedit!
            Atque, nobis illo.
          </p>
          <h1 className="text-xl font-semibold  text-[#996534]">{product.productPrice}</h1>
          <Counter />
          <div className="flex gap-[10px] ">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-[#A4CE4A]"
            >
             Add to cart
            </button>
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#A4CE4A] hover:border-[#eaffe9]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-[#A4CE4A] "
            >
              order now
            </button>
          </div>
        </div>
      </div>
  
    <Footer/>

    </div>
  );
}