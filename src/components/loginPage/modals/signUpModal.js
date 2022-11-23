export const SignUpModal = () => {
  return (
    <div className="">
      <input type="checkbox" id="signUpModal" className="modal-toggle" />
      <div className="modal bg-modal-background">
        <div className=" flex justify-center modal-box py-14 bg-dark-background">
          <form className="w-[90%]">
            <div class="mb-4">
              <label class="block  text-sm mb-2" for="email">
                Email address
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter your email address..."
              />
            </div>
            <div class="mb-4">
              <label class="block  text-sm mb-2" for="username">
                Username
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username..."
              />
            </div>
            <div class="mb-6">
              <label class="block  text-sm  mb-2" for="password">
                Password
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password..."
              />
            </div>
            <div class="flex items-center flex-col justify-between">
              <label
                htmlFor="my-modal"
                className="border-2 font-bold border-dark-purple w-full rounded-lg px-7 py-1 bg-dark-purple cursor-pointer text-center hover:bg-purple hover:border-purple duration-300"
              >
                Create an account
              </label>

              <p className="text-sm my-5">Already have an account?</p>
              <button
                htmlFor="my-modal"
                className=" border-2 font-bold border-dark-purple w-full rounded-lg py-1 cursor-pointer hover:bg-purple hover:border-purple duration-300"
              >
                Log in
              </button>
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