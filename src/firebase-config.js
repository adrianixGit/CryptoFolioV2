import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_USERS_API_KEY,
  authDomain: process.env.AUTH_DOMAIN_USERS,
  projectId: "users-cryptofolio",
  storageBucket: process.env.STORAGE_BUCKET_USERS,
  messagingSenderId: process.env.MESSAGING_SENDER_ID_USERS,
  appId: process.env.APP_ID_USERS,
  measurementId: process.env.MEASUREMENT_ID_USERS,
  // authDomain: process.env.AUTH_DOMAIN_USERS,
  // projectId: process.env.PROJECT_ID_USERS,
  // storageBucket: process.env.STORAGE_BUCKET_USERS,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID_USERS,
  // appId: process.env.APP_ID_USERS,
  // measurementId: process.env.MEASUREMENT_ID_USERS,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
