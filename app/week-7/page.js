"use client";

import { useState } from "react";
import ItemList from "./items-list";
import NewItemForm from "./new-item";
import itemsData from "./item.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (addItems) => {
        setItems([...items, addItems]);
    }

    return (
        <main>
            <h1 className="text-3xl 
            font-bold 
            bg-clip-text text-transparent bg-gradient-to-tr from-indigo-300 via-purple-500 to-pink-700 
            ml-4 mt-2 mb-1">
                Shopping List
            </h1>
            <NewItemForm onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
