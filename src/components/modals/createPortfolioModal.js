import { useRef, useEffect } from "react";
export const CreatePortfolioModal = ({
  showNewPortfolioModal,
  setShowNewPortfolioModal,
}) => {
  const modalRef = useRef();

  const hideModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShowNewPortfolioModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", hideModal);
    return () => document.removeEventListener("mousedown", hideModal);
  }, []);

  return (
    <div
      className={
        showNewPortfolioModal
          ? "absolute  block w-full h-full top-0 left-0 z-10"
          : "absolute hidden"
      }
    >
      <div className="flex justify-center items-center w-full h-full bg-modal-background">
        <div
          className=" flex justify-center modal-box py-14 bg-dark-background"
          ref={modalRef}
        >
          <form className="w-[90%]">
            <h2 className="text-3xl mb-6">Create new portfolio </h2>
            <div className="mb-4">
              <label className="block  text-sm mb-2" htmlFor="username">
                Portfolio name
              </label>
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your portfolio name..."
              />
            </div>

            <div className="flex items-center flex-col justify-between">
              <label className="border-2  font-bold border-dark-purple w-full rounded-lg px-7 py-1 bg-dark-purple cursor-pointer text-center hover:bg-purple hover:border-purple duration-300">
                Create new portfolio
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
