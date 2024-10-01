import ItemList from "./item-list";

export default function Page() {


    return (
        <main>
            <h1 className="text-3xl 
            font-bold 
            bg-clip-text text-transparent bg-gradient-to-tr from-indigo-300  via-purple-500 to-pink-700 
            ml-4 mt-2 mb-1">
                Shopping List
            </h1>
            <ItemList />
        </main>
    );
}
