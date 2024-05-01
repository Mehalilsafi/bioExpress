"use client";

import React, { useState } from "react";
import { useStore } from "@/lib/stor";
export default function Counter() {
  const counter = useStore((state) => state.counter);
  const increaseCounter = useStore((state) => state.increaseCounter);
  const decreaseCounter = useStore((state) => state.decreaseCounter);

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
        onClick={increaseCounter}
        className="px-4 py-2 bg-[#C5DCA0] text-white font-semibold rounded-lg hover:bg-opacity-80"
      >
        +
      </button>
    </div>
  );
}
