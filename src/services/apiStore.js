import { collection, getDocs } from "firebase/firestore/lite";
import { database } from "../utils/firebase";

// Get a list of portfolio categories from Firebase
export async function getStore() {
    try {
      const store = collection(database, "store");
      const storeData = await getDocs(store);
      const storeList = storeData.docs.map((doc) => doc.data());
      return storeList;
    } catch (error) {
      throw new Error("Niečo sa nepodarilo")
    }
  }