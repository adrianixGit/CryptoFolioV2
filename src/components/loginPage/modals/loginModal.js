export const LoginModal = () => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal bg-modal-background">
        <div className=" flex justify-center modal-box py-14 bg-dark-background">
          <form className="w-[90%]">
            <div class="mb-4">
              <label class="block  text-sm mb-2" for="username">
                Email address
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your email address..."
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
              <button
                htmlFor="my-modal"
                className=" border-2 border-dark-purple w-full rounded-lg py-1 cursor-pointer"
              >
                Log in
              </button>
              <p className="text-sm my-5">You do not have account yet?</p>
              <label
                htmlFor="my-modal"
                className="border-2  border-dark-purple w-full rounded-lg px-7 py-1 bg-dark-purple cursor-pointer text-center"
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
