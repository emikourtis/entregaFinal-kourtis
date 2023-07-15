
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.TECNOSTORE_FIREBASE_API_KEY || "",
  authDomain: "tecnostore-d8528.firebaseapp.com",
  projectId: "tecnostore-d8528",
  storageBucket: "tecnostore-d8528.appspot.com",
  messagingSenderId: "572493333460",
  appId: "1:572493333460:web:97746f7748c9e6a1640c41"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)