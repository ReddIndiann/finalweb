import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-UzsqcdR1fGCiGeaC0hmubTaYb6aPrM",
  authDomain: "react-http-16978.firebaseapp.com",
  databaseURL: "https://react-http-16978-default-rtdb.firebaseio.com",
  projectId: "react-http-16978",
  storageBucket: "react-http-16978.appspot.com",
  messagingSenderId: "864962459221",
  appId: "1:864962459221:web:9dc84a4f0d4acc18b106dc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const googleProvider = new  GoogleAuthProvider();
export const storage = getStorage(app);
