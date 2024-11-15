"use client";

import { useState } from "react";
import ItemList from "./items-list";
import NewItemForm from "./new-item";
import itemsData from "./item.json";
import MealIdeasPage from "./meal-ideas"

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('')

    const handleItemSelect = (item) => {
        const cleanedName = item.name
          .split(',')[0]
          .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
          .trim();
          setSelectedItemName(cleanedName);
    };

    const handleAddItem = (addItems) => {
        setItems([...items, addItems]);
    };

    return (
        <main className="flex justify-between p-4">
            <div className="flex-1">
            <h1 className="text-3xl 
            font-bold 
            bg-clip-text text-transparent bg-gradient-to-tr from-indigo-300 via-purple-500 to-pink-700 
            ml-4 mt-2 mb-1">
                Shopping List
            </h1>
            <NewItemForm onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            <div className="flex-1 ml-4">
            <h2 className="text-3xl 
            font-bold 
            bg-clip-text text-transparent bg-gradient-to-tr from-indigo-300 via-purple-500 to-pink-700 
            ml-4 mt-2 mb-1">
                Meal Ideas
            </h2>
            {selectedItemName && <MealIdeasPage ingredient={selectedItemName} />}
            </div>
        </main>
    );
}
