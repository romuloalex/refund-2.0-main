import { Outlet } from "react-router"; // placeholder for nested routes
import logoSvg from "../assets/logo.svg"; // application logo image

export function AuthLayout() {
  return (
    /* Full-screen container centered both horizontally and vertically */
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 p-8">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col md:max-w-[462px] w-full">
        <img src={logoSvg} alt="Logo" className="my-8" />
        <Outlet></Outlet> {/* login or signup will render here */}
      </main>
    </div>
  );
}
