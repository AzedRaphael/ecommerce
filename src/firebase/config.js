import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB4GkMBLHT1oLgM7kvtfKcs5kxEYDrIEnA",
  authDomain: "ebuy-b175a.firebaseapp.com",
  projectId: "ebuy-b175a",
  storageBucket: "ebuy-b175a.appspot.com",
  messagingSenderId: "945456323245",
  appId: "1:945456323245:web:a7c17970ccd2a841188424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
