import React, { useContext } from "react";
import { ModalsContext } from "../../Contexts/modalsContext";
export const SignUpModal = () => {
  const {
    showSignInModal,
    setShowSignInModal,
    showSignUpModal,
    setShowSignUpModal,
  } = useContext(ModalsContext);

  const switchModals = () => {
    setShowSignInModal(!showSignInModal);
    setShowSignUpModal(!showSignUpModal);
  };

  return (
    <div
      className={
        showSignUpModal
          ? "absolute  block w-full h-full top-0 left-0"
          : "absolute hidden w-full h-full"
      }
    >
      <div className="flex justify-center items-center w-full h-full bg-modal-background">
        <div className=" flex justify-center w-full modal-box py-14 bg-dark-background">
          <form className="w-[90%]">
            <div className="mb-4">
              <label className="block  text-sm mb-2" htmlFor="email">
                Email address
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter your email address..."
              />
            </div>
            <div className="mb-4">
              <label className="block  text-sm mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username..."
              />
            </div>
            <div className="mb-6">
              <label className="block  text-sm  mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password..."
              />
            </div>
            <div className="flex items-center flex-col justify-between">
              <label
                htmlFor="my-modal"
                className="border-2 font-bold border-dark-purple w-full rounded-lg px-7 py-1 bg-dark-purple cursor-pointer text-center hover:bg-purple hover:border-purple duration-300"
              >
                Create an account
              </label>

              <p className="text-sm my-5">Already have an account?</p>
              <label
                onClick={switchModals}
                className=" border-2 font-bold border-dark-purple w-full rounded-lg px-7 py-1 cursor-pointer hover:bg-purple text-center hover:border-purple duration-300"
              >
                Log in
              </label>
              <p className="text-xs my-5 text-center w-[60%]">
                By proceeding, you agree to Cryptofolio{" "}
                <a href="/" className="text-purple">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="/" className="text-purple">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
