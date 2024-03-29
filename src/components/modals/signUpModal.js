import React, { useContext, useState, useRef, useEffect } from "react";
import { ModalsContext } from "../../Contexts/modalsContext";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, writeUser } from "firebase/auth";
export const SignUpModal = () => {
  const {
    showSignInModal,
    setShowSignInModal,
    showSignUpModal,
    setShowSignUpModal,
  } = useContext(ModalsContext);

  const switchModals = () => {
    setShowSignInModal((prevState) => !prevState);
    setShowSignUpModal((prevState) => !prevState);
  };

  const modalRef = useRef();

  const hideModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShowSignUpModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", hideModal);

    return () => document.removeEventListener("mousedown", hideModal);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleAddUser = async (uid, username) => {
    try {
      const docRef = await setDoc(doc(db, "users", uid), {
        general: { username: username, portfolio_name: "", balance: 0 },
        assets: { coin_type: "", holdings: 0 },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const onSubmit = async (data) => {
    try {
      const addUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
        data.username
      );
      sessionStorage.setItem("userUID", addUser.user.uid);
      let UID = sessionStorage.getItem("userUID");
      console.log(UID);
      handleAddUser(addUser.user.uid, data.username);
    } catch (error) {
      console.log(error.message);
    }
    // window.location.reload();
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
        <div
          className=" flex justify-center w-full modal-box py-14 bg-dark-background"
          ref={modalRef}
        >
          <form className="w-[90%]" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block  text-sm mb-2" htmlFor="email">
                Email address
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter your email address..."
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <span className="text-red text-xs">
                {errors.email && errors.email.message}
              </span>
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
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 5,
                    message: "Min length is 5",
                  },
                  maxLength: {
                    value: 15,
                    message: "Max length is 15",
                  },
                })}
              />
              <span className="text-red text-xs">
                {errors.username && errors.username.message}
              </span>
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Min length is 8",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    message:
                      "The password must contain an uppercase and lowercase letter, a number and a special character",
                  },
                })}
              />
              <span className="text-red text-xs">
                {errors.password && errors.password.message}
              </span>
            </div>
            <div className="flex items-center flex-col justify-between">
              <button className="border-2 font-bold border-dark-purple w-full rounded-lg px-7 py-1 bg-dark-purple cursor-pointer text-center hover:bg-purple hover:border-purple duration-300">
                Create an account
              </button>

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
