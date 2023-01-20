import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbFauFUuPfy67qX7iq-jObaHbd0srjAUE",
  authDomain: "cryptofolio-users.firebaseapp.com",
  projectId: "cryptofolio-users",
  storageBucket: "cryptofolio-users.appspot.com",
  messagingSenderId: "1048425485504",
  appId: "1:1048425485504:web:0ec0d8f3f37ee7d6b28925",
  measurementId: "G-2ZTCS6JGBY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
