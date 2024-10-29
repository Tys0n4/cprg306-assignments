import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        } else if (sortBy === "category") {
            return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1;
        }
        return 0;
    });

    return (
        <div>
            <div>
                <h2 className="float-left ml-4">Sort By:</h2>
                <button
                    className="bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 rounded-lg mb-4 ml-4 p-2 w-32"
                    onClick={() => setSortBy("name")}
                >
                    Name
                </button>
                <button
                    className="bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 rounded-lg mb-4 ml-4 p-2 w-32"
                    onClick={() => setSortBy("category")}
                >
                    Category
                </button>
            </div>

            <ul>
                {sortedItems.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        category={item.category}
                        quantity={item.quantity}
                    />
                ))}
            </ul>
        </div>
    );
}
