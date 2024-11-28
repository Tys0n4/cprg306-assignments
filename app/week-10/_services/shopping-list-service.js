import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, item) {
    
    try {
        const newItemsReference = collection(db, "users", userId, "items");
        const newDocRef = await addDoc(newItemsReference, item);
        return newDocRef.id;
    } catch (error) {
        console.log(error);
    }
};

export async function getItems(userId) {
       
    try {
        const getItemsReference = collection(db, "users", userId, "items");
        const querySnapShot = await getDocs(getItemsReference);
        
        let items = [];
        querySnapShot.forEach( (doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data(),
            };
            items.push(thisItem);
        } );

        return items;
        
    } catch (error) {
        console.log(error);
    }
};
