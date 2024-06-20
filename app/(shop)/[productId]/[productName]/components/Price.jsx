import React from "react";
import Image from "next/image";
export default function Price({ product }) {
  const productImages = product?.images;

  const firstImageUrl =
    productImages && productImages?.length > 0 ? productImages[0] : null;
  return (
    <div className="lg:border-l-[1px] lg:border-inherit lg:border-solid h-full ">
      <div className="flex flex-row justify-between m-4 w-full ">
        <div className="flex  flex-row  gap-3">
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
      <div className="flex flex-col  m-4 gap-4">
        <div className="flex flex-row justify-between">
          <p>sub-total</p>
          <p>{`${product?.productPrice} DA`}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between m-4 w-full">
        <p>Total</p>
        <p>{`${product?.productPrice} DA`}</p>
      </div>
    </div>
  );
}
