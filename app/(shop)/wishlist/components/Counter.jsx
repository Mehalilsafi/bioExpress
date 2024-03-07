"use client";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div
      className="flex gap-2  items-center" >
      <button 
      onClick={decrement}
      className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      
      >-</button>
      <p className="text-xl font-bold">{counter}</p>
      <button 
      onClick={increment}
      className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      >+</button>
    </div>
  );
}