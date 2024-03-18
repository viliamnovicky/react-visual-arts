// import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/database";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { database, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Get a list of portfolio categories from Firebase
export async function getPortfolio() {
  try {
    const portfolio = collection(database, "portfolio");
    const portfolioData = await getDocs(portfolio);
    const portfolioList = portfolioData.docs.map((doc) => doc.data());
    return portfolioList;
  } catch (error) {
    throw new Error("Nepodarilo sa načítať údaje z databázy");
  }
}

export async function addPortfolioCategory(categoryName, imageFile) {
  try {
    // Upload image to storage
    const storageRef = ref(storage, "portfolioCategories/" + imageFile.name);
    await uploadBytes(storageRef, imageFile);

    // Get download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Add new category to database with image URL
    const portfolio = collection(database, "portfolio");
    const newCategoryRef = await addDoc(portfolio, { name: categoryName, coverImage: imageUrl });
    // console.log("New category added with ID: ", newCategoryRef.id);

    return newCategoryRef.id;
  } catch (error) {
    throw new Error("Nepodarilo sa nahrať obrázok a vytvoriť kategóriu: ", error);
  }
}
