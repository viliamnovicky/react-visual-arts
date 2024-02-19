import "firebase/storage";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../utils/firebase";

export async function getPortfolioImagesUrls(category) {
  const storageRef = ref(storage, `portfolio/${category}`);
  const result = await listAll(storageRef);
  const urls = await Promise.all(
    result.items.map(async (imageRef) => {
        return getDownloadURL(imageRef);
    })
    );
    console.log(urls)
  return urls;
}