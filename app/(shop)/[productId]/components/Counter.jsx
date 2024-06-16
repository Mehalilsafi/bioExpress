"use client";

import React, { useState } from "react";
import { useStore } from "@/lib/stor";
import { toast } from "react-toastify";
export default function Counter({maxQuantity }) {
  const counter = useStore((state) => state.counter);

  const increaseCounter = useStore((state) => state.increaseCounter);
  const decreaseCounter = useStore((state) => state.decreaseCounter);
  function handleIncrement() {
    if (counter < maxQuantity ) {
      increaseCounter();
    } else {
      toast.error('You have reached the maximum allowable quantity for this product.');
    }
  }

  return (
    <div className="flex gap-2  items-center">
      <button
        onClick={decreaseCounter}
        className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      >
        -
      </button>
      <p className="text-xl font-bold">{counter}</p>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      >
        +
      </button>
    </div>
  );
}
