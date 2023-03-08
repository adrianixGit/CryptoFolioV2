import { Outlet } from "react-router-dom";
import { UserProvider } from "./Contexts/AuthContext";
export const RootLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <UserProvider>
          <Outlet />
        </UserProvider>
      </div>
    </div>
  );
};
