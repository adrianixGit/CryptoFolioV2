export const LoginModal = ({
  showModalLogin,
  setShowModalLogin,
  showModalSignUp,
  setShowModalSignUp,
}) => {
  return (
    <div
      className={
        showModalLogin
          ? "absolute  block w-full h-full top-0 left-0"
          : "absolute hidden"
      }
    >
      <div className="flex justify-center items-center w-full h-full bg-modal-background">
        <div className=" flex justify-center modal-box py-14 bg-dark-background">
          <form className="w-[90%]">
            <div className="mb-4">
              <label className="block  text-sm mb-2" htmlFor="username">
                Email address
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your email address..."
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
              <button
                htmlFor="my-modal"
                className=" border-2 font-bold border-dark-purple w-full rounded-lg py-1 cursor-pointer hover:bg-purple hover:border-purple duration-300"
              >
                Log in
              </button>
              <p className="text-sm my-5">You do not have account yet?</p>
              <label
                onClick={() => {
                  setShowModalLogin(!showModalLogin);
                  setShowModalSignUp(!showModalSignUp);
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
