import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
       
    try {
        const getItemsReference = collection(db, "users", userId, "items");
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, item) {
    
    try {
        const newItemsReference = collection(db, "users", userId, "items");
    } catch (error) {
        console.log(error);
    }
}