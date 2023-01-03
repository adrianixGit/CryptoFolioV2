import Logo from "../Logo.png";
import { LoginModal } from "../components/modals/loginModal";
import { SignUpModal } from "../components/modals/signUpModal";
import { useState, useEffect } from "react";
import { TableBody } from "../components/tableBody";
import { ModalsContext } from "../Contexts/modalsContext";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
export const LoginPage = ({ coins }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users");
  const fetchUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="py-10">
      <ModalsContext.Provider
        value={{
          showSignUpModal,
          setShowSignUpModal,
          showSignInModal,
          setShowSignInModal,
        }}
      >
        <LoginModal users={users} />
        <SignUpModal />
      </ModalsContext.Provider>
      <div className="flex justify-between mb-10 ">
        <div className="w-[40%]">
          <img src={Logo} alt="logo" className="w-[100%]" />
        </div>
        <div className="flex w-[35%] justify-center items-center">
          <button
            onClick={() => setShowSignInModal((prevState) => !prevState)}
            className="border-2 border-dark-purple rounded-lg w-[50%] py-1 mr-3 cursor-pointer text-center hover:bg-purple hover:border-purple duration-300"
          >
            Log in
          </button>
          <button
            onClick={() => setShowSignUpModal((prevState) => !prevState)}
            className="border-2 border-dark-purple rounded-lg w-[50%] py-1 bg-dark-purple cursor-pointer text-center hover:bg-purple hover:border-purple duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
      <main className="w-full overflow-x-auto">
        <table className="table-auto text-sm w-full">
          <thead className="">
            <tr className="border-y-[1px] border-grey">
              <th className="py-1">#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>Market Cap</th>
              <th>Volume</th>
            </tr>
          </thead>
          <TableBody coins={coins} />
        </table>
      </main>
    </div>
  );
};
