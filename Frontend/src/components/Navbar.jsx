import { useContext } from "react";

import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className=" justify-between items-center md:p-8 md:px-24 fixed top-0 bg-gray-100 w-full shadow-lg hidden  md:flex">
      <div className="logo text-5xl font-bold">Foodie</div>
      <nav className="flex flex-row space-x-6 font-medium text-xl">
        <a href="/#/" className="nav-link hover:underline">
          Home
        </a>
        <a
          href="#/about"
          className="nav-link hover:underline hover:text-orange-500"
        >
          About
        </a>
        <a
          href="#/dashboard"
          className="nav-link hover:underline hover:text-orange-500"
        >
          dashboard
        </a>
      </nav>
      <div className="flex flex-row gap-2">
        <a
          href="#/login"
          className="nav-link bg-orange-500 hover:bg-orange-600 py-3 px-7 text-white rounded-md font-semibold"
        >
          Login
        </a>
        <a
          href="#/"
          className="nav-link   bg-gray-300 hover:bg-orange-600 py-3 px-7 text-white rounded-md font-semibold"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </a>
      </div>
    </header>
  );
}
