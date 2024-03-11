import "firebase/storage";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../utils/firebase";
import Resizer from "react-image-file-resizer";

export async function getPortfolioImagesUrls(category) {
  const storageRef = ref(storage, `portfolio/${category}`);
  const result = await listAll(storageRef);
  const urls = await Promise.all(
    result.items.map(async (imageRef) => {
      return getDownloadURL(imageRef);
    })
  );
  console.log(urls);
  return urls;
}

export async function addPortfolioImages(category, files) {
  try {
    
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Get current date in format YYMMDD
    
    const uploadTasks = files.map(async (file) => {
      
      const resizedImage = await new Promise((resolve, reject) => {
        Resizer.imageFileResizer(file, 1300, 868, 'JPEG', 80, 0, (resizedFile) => {
          resolve(resizedFile);
        }, 'file');
      });

      const storageRef = ref(storage, `portfolio/${category}/${currentDate}_${file.name}`);
      await uploadBytes(storageRef, resizedImage);
      console.log(`${currentDate}_${file.name} uploaded successfully!`);
    });

    await Promise.all(uploadTasks);
    console.log("All files uploaded successfully!");
  } catch (error) {
    console.error("An error occurred while uploading files:", error);
  }
}
