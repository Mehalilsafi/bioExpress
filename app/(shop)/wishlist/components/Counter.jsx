"use client";
import { useEffect } from 'react';

import { toast } from 'react-toastify';
import { useQuantity } from '@/lib/stor';

export default function Counter({ maxQuantity, productId }) {
  const { counters, increment, decrement } = useQuantity();
  const counter = counters[productId] || 1;

  useEffect(() => {
    console.log("Counter updated for product:", productId, "New Counter Value:", counter);
  }, [counter, productId]);

  const handleIncrement = () => {
    console.log("Increment called. Counter:", counter, "MaxQuantity:", maxQuantity, 'ProductId:', productId);
    if (counter < maxQuantity) {
      increment(productId, maxQuantity);
    } else {
      toast.error("You have reached the maximum allowable quantity for this product.");
    }
  };

  const handleDecrement = () => {
    decrement(productId);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleDecrement}
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
