import { db } from './firebaseConfig';
import { collection, doc, setDoc } from "firebase/firestore";
import dummyData from '@/constants/dummyData';

const saveDataToFirestore = async () => {
  try {
    // Save categories
    await Promise.all(
      dummyData.categories.map(async (category) => {
        await setDoc(doc(collection(db, "categories"), category.id.toString()), category);
      })
    );

    // Save products
    await Promise.all(
      dummyData.products.map(async (product) => {
        await setDoc(doc(collection(db, "products"), product.id.toString()), product);
      })
    );

    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Call this function to upload data once
saveDataToFirestore();
