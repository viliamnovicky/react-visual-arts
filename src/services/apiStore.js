import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { database, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Get a list of portfolio categories from Firebase
export async function getStore() {
  try {
    const store = collection(database, "store");
    const storeData = await getDocs(store);
    const storeList = storeData.docs.map((doc) => doc.data());
    return storeList;
  } catch (error) {
    throw new Error("Niečo sa nepodarilo");
  }
}

export async function addStoreCategory(name, coverImage, anotherImages, prices) {
  try {
    // Upload image to storage
    const storageRef = ref(storage, "store/" + coverImage.name);
    await uploadBytes(storageRef, coverImage);

    // Get download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Add new category to database with image URL
    const store = collection(database, "store");
    const newCategoryRef = await addDoc(store, { name, imageUrl, anotherImages, prices });
    // console.log("New category added with ID: ", newCategoryRef.id);

    return newCategoryRef.id;
  } catch (error) {
    throw new Error("Nepodarilo sa nahrať obrázok a vytvoriť produkt: ", error);
  }
}
