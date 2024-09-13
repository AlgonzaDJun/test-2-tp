/* eslint-disable no-unused-vars */
import HomeIcon1 from "../assets/home1.png";
import HomeIcon2 from "../assets/home2.png";
import MenuIcon1 from "../assets/menu1.png";
import MenuIcon2 from "../assets/menu2.png";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 max-w-md w-full bg-white">
      <div className="flex justify-around border-t shadow-sm py-2">
        <Link to={"/"}>
          <img
            src={location.pathname === "/" ? HomeIcon1 : HomeIcon2}
            className="w-8 h-8 object-contain"
            alt="home icon"
          />
        </Link>
        <Link to={"/menu"}>
          <img
            src={location.pathname.startsWith("/menu") ? MenuIcon1 : MenuIcon2}
            className="w-8 h-8 object-contain"
            alt="home icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
