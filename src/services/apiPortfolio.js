import { collection, getDocs } from "firebase/firestore/lite";
import { database } from "../utils/firebase";

// Get a list of portfolio categories from Firebase
export async function getPortfolio() {
    const portfolio = collection(database, 'portfolio');
    const portfolioData = await getDocs(portfolio);
    const portfolioList = portfolioData.docs.map(doc => doc.data());
    return portfolioList;
  }