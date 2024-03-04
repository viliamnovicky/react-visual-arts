import "firebase/storage";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../utils/firebase";

export async function getPortfolioCategoriesImagesUrls() {
  const storageRef = ref(storage, "portfolioCategories");
  const result = await listAll(storageRef);
  const urls = await Promise.all(
    result.items.map(async (imageRef) => {
        return getDownloadURL(imageRef);
    })
  );
  return urls;
}
