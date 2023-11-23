import { useState } from "react";
import tronLabsLogo from "../assets/tronLabsLogo.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <nav className="bg-gray-800 text-white w-full px-24 ">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex items-center text-xl">
          <img src={tronLabsLogo} alt="Logo" className="h-12 w-24 mr-2 " />
        </div>

        <div className="hidden lg:flex space-x-4 text-xl">
          <Link to="/tronLabs/about" className="hover:text-gray-400 text-xl">
            About
          </Link>
          <Link to="/tronLabs/projects" className="hover:text-gray-400 text-xl">
            Projects
          </Link>
          <Link to="/tronLabs/contactus" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none text-xl"
        >
          {menuVisible ? "X" : "☰"}
        </button>

        <div className="hidden lg:flex space-x-4 text-xl">
          <Link to="/tronLabs/login" className="hover:text-gray-400">
            Login
          </Link>
          <Link to="/tronLabs/signup" className="hover:text-gray-400">
            Signup
          </Link>
        </div>
      </div>

      {menuVisible && (
        <div className="lg:hidden">
          <Link to="/tronLabs/about" className="block p-4 hover:bg-gray-700">
            About
          </Link>
          <Link to="/tronLabs/about" className="block p-4 hover:bg-gray-700">
            Projects
          </Link>
          <Link
            to="/tronLabs/contactus"
            className="block p-4 hover:bg-gray-700"
          >
            Contact Us
          </Link>
          <Link to="/tronLabs/login" className="block p-4 hover:bg-gray-700">
            Login
          </Link>
          <Link to="/tronLabs/sigunp" className="block p-4 hover:bg-gray-700">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
