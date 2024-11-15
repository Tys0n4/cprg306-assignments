"use client";

import { useState } from "react";

export default function NewItemForm({ onAddItem }) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

const handleNameChange = (event) => {
    setName(event.target.value);
}
const handleCategoryChange = (event) => {
    setCategory(event.target.value);
}

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    const generateId = () => {
      return Math.random().toString(36).substring(2, 10); // 8-character random string
    };

    const newItemObj ={
        id: generateId(),
        name: name,
        quantity: quantity,
        category: category,
    }

    onAddItem(newItemObj);

    setName("");
    setQuantity(1);
    setCategory("");
    
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mt-4 mx-1 mb-3 bg-white rounded-xl shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-black">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter item name"
          className="mt-1 p-2 block w-full border rounded-lg bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-black">
          {quantity}
        </span>

        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-white px-3 py-2 rounded-lg font-semibold"
        >
          -
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-white px-3 py-2 rounded-lg font-semibold"
        >
          +
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">
          Category
        </label>
        <select
      value={category}
      onChange={handleCategoryChange}
      className="mt-1 p-2 block w-full border rounded-lg bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
      >
      <option value="produce">Produce</option>
      <option value="dairy">Dairy</option>
      <option value="bakery">Bakery</option>
      <option value="meat">Meat</option>
      <option value="frozen">Frozen Foods</option>
      <option value="canned">Canned Goods</option>
      <option value="dry">Dry Goods</option>
      <option value="beverages">Beverages</option>
      <option value="snacks">Snacks</option>
      <option value="household">Household</option>
      <option value="other">Other</option>
      </select>

      </div>

      <div>
        <button
          type="submit"
          className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:via-purple-600 hover:to-pink-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
