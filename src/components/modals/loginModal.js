import React, { useContext, useEffect, useRef } from "react";
import { ModalsContext } from "../../Contexts/modalsContext";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { PortfolioPage } from "../../view/portfolioPage";
import UserContext from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
  const {
    showSignInModal,
    setShowSignInModal,
    showSignUpModal,
    setShowSignUpModal,
  } = useContext(ModalsContext);

  const { login } = useContext(UserContext);

  const modalRef = useRef();

  const navigate = useNavigate();

  const hideModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShowSignInModal(false);
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

  // const login = async (data) => {
  //   try {
  //     const logUser = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     if (logUser) {
  //       console.log("success");
  //       <Navigate to="/portfolio" replace={true} />;
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/portfolio");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={
        showSignInModal
          ? "absolute  block w-full h-full top-0 left-0"
          : "absolute hidden"
      }
    >
      <div className="flex justify-center items-center w-full h-full bg-modal-background">
        <div
          className=" flex justify-center modal-box py-14 bg-dark-background"
          ref={modalRef}
        >
          <form className="w-[90%]" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block  text-sm mb-2" htmlFor="username">
                Email address
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
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
              {errors.email && (
                <span className="text-red text-xs">
                  {errors.email && errors.email.message}
                </span>
              )}
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
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red text-xs">Password is required</span>
              )}
            </div>
            <div className="flex items-center flex-col justify-between">
              <button className=" border-2 font-bold border-dark-purple w-full rounded-lg px-7 py-1 cursor-pointer hover:bg-purple text-center hover:border-purple duration-300">
                Log in
              </button>
              <p className="text-sm my-5">You do not have account yet?</p>
              <label
                onClick={() => {
                  setShowSignInModal((prevState) => !prevState);
                  setShowSignUpModal((prevState) => !prevState);
                }}
                className="border-2  font-bold border-dark-purple w-full rounded-lg px-7 py-1 bg-dark-purple cursor-pointer text-center hover:bg-purple hover:border-purple duration-300"
              >
                Sign up
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
