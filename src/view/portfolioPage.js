import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import UserContext from "../Contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const PortfolioPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h2>PORTFOLIO</h2>
      <p>email: {user?.email}</p>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};
