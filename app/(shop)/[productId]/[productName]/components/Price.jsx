import React from "react";
import Image from "next/image";
export default function Price({ product }) {
  const productImages=product.images
  const firstImageUrl = productImages && productImages.length > 0 ? productImages[0] : null;
  const deliveryPrice=400
  const totale=deliveryPrice+product?.productPrice
  return (
    <div className="border-l-[1px] border-inherit border-solid h-full ">
      <div className="flex flex-col md:flex-row justify-between m-4 w-full ">
        <div className="flex  flex-col md:flex-row  gap-3">
          <Image
            width={100}
            height={100}
            src={firstImageUrl}
            alt="product image"
          />
          <p>{product?.productName}</p>
        </div>
        <p> {`${product?.productPrice} DA`}</p>
      </div>
      <div className="flex flex-col md:m-7 m-4 gap-4">
        <div className="flex flex-col md:flex-row justify-between">
          <p>sub-total</p>
          <p>{`${product?.productPrice} DA`}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <p>Delivery</p>
          <p>{` ${deliveryPrice} DA`}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between m-4 w-full">
        <p>Total</p>
        <p>{`${totale} DA`}</p>
      </div>
    </div>
  );
}
