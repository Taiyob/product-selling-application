import { Link } from "react-router-dom";
import "./navbar.css";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  let menuNav = document.querySelector('.navbar');
  const handleMenu = () => {
    setMenuActive(!isMenuActive);
    menuNav?.classList?.toggle('active');
  };
  window.onscroll = () => {
    menuNav?.classList?.remove('active');
  }
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg p-6 md:p-4 z-10 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-2xl text-gray-700">
          <FaRegPaperPlane className="text-orange-600"></FaRegPaperPlane>
        </Link>
        <form className="rounded-md flex items-center h-14 w-80 bg-gray-200">
          <input
            type="text"
            placeholder="search..."
            name="search"
            className="h-full w-full bg-transparent text-base lowercase text-1.5xl text-gray-700 p-4"
          />
          <label className="text-2xl mr-6 cursor-pointer text-white hover:text-orange-600">
            <FaSearch></FaSearch>
          </label>
        </form>
        <div className="flex">
          <div className="h-20 w-14 leading-14  text-2xl rounded-md ml-2 text-gray-700 cursor-pointer text-center bg-gray-200 hover:text-[#fff] hover:bg-orange-800">
            <FaMoon className="mb-40"></FaMoon>
          </div>
          <div className="h-20 w-14 leading-14  text-2xl rounded-md ml-2 text-gray-700 cursor-pointer text-center bg-gray-200 hover:text-[#fff] hover:bg-orange-800">
            <FaUserAlt className=" "></FaUserAlt>
          </div>
          <div
            onClick={handleMenu}
            className="h-20 w-14 leading-14  text-2xl rounded-md ml-2 text-gray-700 cursor-pointer text-center bg-gray-200 hover:text-[#fff] hover:bg-orange-800"
            id="menu-btn"
          >
            <FaBars className=" "></FaBars>
          </div>
        </div>
        <nav
          className="absolute bg-white shadow-xl pr-10 rounded-lg top-32 right-7 transform scale-0 transform-origin-top-right w-96 navbar"
          id="navbar"
        >
          <Link className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item">
            Home
          </Link>

          <Link className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item">
            Home
          </Link>
          <Link className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item">
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
