

export default function Item({name, quantity, category, onSelect}){


    return(
        <ul
            className="bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 
            rounded-lg 
            mb-4
            p-2
            w-full flex-1" // Adjusted for full width and flex behavior
            onClick={onSelect}
        >
            <li className="text-xl font-bold text-black">{name}</li>
            <li className="text-black">Buy {quantity} in {category}</li>
        </ul>
    );
}