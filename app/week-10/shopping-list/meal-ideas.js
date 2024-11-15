"use client"

import { useEffect, useState } from "react";

export default function MealIdeasPage({ingredient}) {

    const [meals, setMeals] = useState([]);
    
    async function fetchMealIdeas() {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if( !response.ok ) console.log(response.status);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return [];
        }
    }

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      };

    useEffect( () => {
        loadMealIdeas();
    }, [ingredient] );

    if (!ingredient) {
        return <div>Select an item to see meal ideas</div>; // Show this message when no ingredient is selected
    }

    return(
        <div>
        {meals.length === 0 ? (
            <p>No meal ideas found for "{ingredient}".</p>
        ) : (
            <div>
                <h3>Here are some meal ideas using {ingredient}:</h3>
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                width="100"
                                />
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    );
}