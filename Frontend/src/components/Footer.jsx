import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../AuthContext";

import {
  faHome,
  faTachometerAlt,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";


export default function Footer() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="fixed bottom-0 w-full h-14 bg-white border-t border-gray-300 flex justify-around items-center md:hidden">
      <Link to="/">
        <div className="text-center">
          <FontAwesomeIcon icon={faHome} size="xl" color="#D2D2D2" />
          <p className="text-sm">Home</p>
        </div>
      </Link>
      <Link to="/dashboard">
        <div className="text-center">
          <FontAwesomeIcon icon={faTachometerAlt} size="xl" color="#D2D2D2" />
          <p className="text-sm">Dashboard</p>
        </div>
      </Link>
      <Link to="/login">
        <div className="text-center">
          <FontAwesomeIcon icon={faSignInAlt} size="xl" color="#D2D2D2" />
          <p className="text-sm">Login</p>
        </div>
      </Link>
      <Link to="/about">
        <div className="text-center">
          <FontAwesomeIcon icon={faUser} size="xl" color="#D2D2D2" />
          <p className="text-sm">About</p>
        </div>
      </Link>
      <div className="text-center">
        <FontAwesomeIcon
          icon={faSignOutAlt}
          size="xl"
          color="#D2D2D2"
          onClick={()=>{
            logout()
          }}
          style={{ cursor: "pointer" }}
        />
        <p className="text-sm">Logout</p>
      </div>
    </div>
  );
}
