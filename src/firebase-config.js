import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_USERS_API_KEY,
  authDomain: "users-cryptofolio.firebaseapp.com",
  projectId: "users-cryptofolio",
  storageBucket: "users-cryptofolio.appspot.com",
  messagingSenderId: "741873549897",
  appId: "1:741873549897:web:9b8f6e3269a1ca17513598",
  measurementId: "G-7P1BSS9FM3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
