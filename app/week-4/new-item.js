"use client";

import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="flex items-center space-x-1">
        <p className="font-bold 
        bg-clip-text text-transparent 
        bg-gradient-to-tr from-indigo-300 via-purple-500 to-pink-700"
        >
          {quantity}
        </p>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="font-bold 
          px-4 py-2 
          bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 
          rounded-lg"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="font-bold 
          px-4 py-2 
          bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 
          rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
