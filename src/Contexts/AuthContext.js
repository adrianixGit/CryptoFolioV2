import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const addNewData = async (uid, username) => {
    try {
      await setDoc(doc(db, "users", uid), {
        general: { username: username, portfolio_name: "", balance: 0 },
        assets: { coin_type: "", holdings: 0 },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addUser = async (email, password, username) => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    addNewData(newUser.user.uid, username);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    console.log(user.email);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <UserContext.Provider value={{ addUser, login, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
