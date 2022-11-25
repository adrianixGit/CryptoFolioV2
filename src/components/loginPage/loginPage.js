import Logo from "../../Logo.png";
import { LoginModal } from "./modals/loginModal";
import { SignUpModal } from "./modals/signUpModal";
import { useState } from "react";
import { TableBody } from "./tableBody";
export const LoginPage = ({ coins }) => {
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  return (
    <div className="py-10">
      <LoginModal
        showModalLogin={showModalLogin}
        setShowModalLogin={setShowModalLogin}
        showModalSignUp={showModalSignUp}
        setShowModalSignUp={setShowModalSignUp}
      />
      <SignUpModal
        showModalLogin={showModalLogin}
        setShowModalLogin={setShowModalLogin}
        showModalSignUp={showModalSignUp}
        setShowModalSignUp={setShowModalSignUp}
      />
      <div className="flex justify-between mb-10 ">
        <div className="w-[40%]">
          <img src={Logo} alt="logo" className="w-[100%]" />
        </div>
        <div className="flex w-[35%] justify-center items-center">
          <button
            onClick={() => setShowModalLogin(!showModalLogin)}
            className="border-2 border-dark-purple rounded-lg w-[50%] py-1 mr-3 cursor-pointer text-center hover:bg-purple hover:border-purple duration-300"
          >
            Log in
          </button>
          <button
            onClick={() => setShowModalSignUp(!showModalSignUp)}
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
