// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk8QHqNS-zbCY0h8-Xez2qTwZDk_1kH14",
  authDomain: "viliam-novicky-visual-arts.firebaseapp.com",
  projectId: "viliam-novicky-visual-arts",
  storageBucket: "viliam-novicky-visual-arts.appspot.com",
  messagingSenderId: "639358303879",
  appId: "1:639358303879:web:f20f85b17b6d22d3c1c222",
  measurementId: "G-9SXLNW8WJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getFirestore(app);