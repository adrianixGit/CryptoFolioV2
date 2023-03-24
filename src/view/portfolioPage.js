import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import UserContext from "../Contexts/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo.png";
import { CreatePortfolioModal } from "../components/modals/createPortfolioModal";
import { AddNew } from "../components/modals/addNewModal";
export const PortfolioPage = ({ coins }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [showNewPortfolioModal, setShowNewPortfolioModal] = useState(false);
  const [showAddNewModal, setShowAddNewModal] = useState(false);

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const avatarLetter = user.email.charAt(0);

  return (
    <div className="py-10 h-[100%]">
      <CreatePortfolioModal
        showNewPortfolioModal={showNewPortfolioModal}
        setShowNewPortfolioModal={setShowNewPortfolioModal}
      />
      <AddNew
        coins={coins}
        showAddNewModal={showAddNewModal}
        setShowAddNewModal={setShowAddNewModal}
      />
      <div className="flex justify-between h-[10vw] md:h-[7vw] xs:h-[5vw] mb-5">
        <div className="w-[40%]">
          <img src={Logo} alt="logo" className="w-[100%] h-[100%]" />
        </div>
        <div className="flex justify-end  w-[40%] place-items-center">
          <p className="mr-3 md:text-3xl xs:text-lg">{user?.email}</p>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full md:w-[7vw] xs:w-[5vw] h-[100%]">
              <span className="md:text-3xl xs:text-lg">
                {avatarLetter.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 items-end">
        <div>
          <button
            className="flex relative justify-center  bg-dark-purple rounded-lg w-[20vw] hover:bg-purple duration-300 overflow-hidden"
            onClick={() => setShowNewPortfolioModal((prevState) => !prevState)}
          >
            <div className="flex w-[100%] items-center">
              <span className="bg-purple h-[100%] left-0 w-[20%] py-3 top-0 rounded-l-lg drop-shadow-[1px_0_3px_rgba(0,0,0,0.5)]">
                +
              </span>
              <p className="w-[80%] px-[2px]">Create Portfolio</p>
            </div>
          </button>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-grey">Current balance</p>
          <p className="text-2xl text-center">
            210000$
            <span className="bg-green rounded-md  text-base ml-1 px-[2px]">
              0.0%
            </span>
          </p>
          <p className="text-green">
            1000$
            <span className="bg-modal-background text-grey rounded-md text-xs ml-1 p-[2px]">
              24h
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center itens-center my-5">
        <p className="text-9xl">WYKRES</p>
      </div>
      <div className="flex flex-col border-b-[1px] border-grey pb-5">
        <div className="flex justify-between">
          <p>Your assets</p>
          <div>
            <button
              className="flex relative justify-center  bg-dark-purple rounded-lg w-[20vw] hover:bg-purple duration-300 overflow-hidden"
              onClick={() => setShowAddNewModal((prevState) => !prevState)}
            >
              <div className="flex w-[100%] items-center">
                <span className="bg-purple h-[100%] left-0 w-[20%] py-1 top-0 rounded-l-lg drop-shadow-[1px_0_3px_rgba(0,0,0,0.5)]">
                  +
                </span>
                <p className="w-[80%] px-[2px]">Add new</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <h2>PORTFOLIO</h2>
      <p>email: {user?.email}</p>
      <button onClick={logOut}>Log out</button> */}
    </div>
  );
};
