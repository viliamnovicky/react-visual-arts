// import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import { collection, getDocs } from "firebase/firestore/lite";
import { database } from "../utils/firebase";

// Get a list of portfolio categories from Firebase
export async function getPortfolio() {
    const portfolio = collection(database, 'portfolio');
    const portfolioData = await getDocs(portfolio);
    const portfolioList = portfolioData.docs.map(doc => doc.data());
    return portfolioList;
  }

export async function uploadPortfolioImage(image, databaseName) {
  const storageRef = firebase.storage().ref();
  const imagesRef = storageRef.child(`portfolio/${databaseName}/${image.name}`);

  try {
    // Upload the file to Firebase Storage
    const snapshot = await imagesRef.put(image);
    console.log('Image uploaded successfully');

    // Get the download URL of the uploaded image
    const url = await imagesRef.getDownloadURL();

    // Add the image URL to the Firebase Realtime Database
    const database = firebase.database();
    const imageRef = database.ref(`portfolio/${databaseName}/${image.name}`).push();
    await imageRef.set({
      name: image.name,
      url: url
    });
    console.log('Image URL added to the database successfully');
  } catch (error) {
    console.error('Error uploading image or adding URL to the database:', error);
  }
}