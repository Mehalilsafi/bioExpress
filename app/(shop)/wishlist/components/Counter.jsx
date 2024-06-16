"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function Counter({ maxQuantity }) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter < maxQuantity) {
      setCounter(counter + 1);
      console.log(("maxQuantity:"),maxQuantity)
    } else {
      toast.error(
        "You have reached the maximum allowable quantity for this product."
      );
      console.log(("maxQuantity:"),maxQuantity)
    }
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
    else {
      setCounter(0);
    }
  };
  return (
    <div className="flex gap-2  items-center">
      <button
        onClick={decrement}
        className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      >
        -
      </button>
      <p className="text-xl font-bold">{counter}</p>
      <button
        onClick={increment}
        className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      >
        +
      </button>
    </div>
  );
}
