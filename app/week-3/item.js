

export default function Item({name, quantity, category}){


    return(
        <ul className="bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 
            rounded-lg 
            mb-4 ml-4 
            max-w-md p-2 w-6/12">
            <li className="text-xl font-bold text-black">{name}</li>
            <li className="text-black">Buy {quantity} in {category}</li>
        </ul>
    );
}