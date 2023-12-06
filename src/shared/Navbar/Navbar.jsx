import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  let menuNav = document.querySelector(".navbar");
  const handleMenu = () => {
    setMenuActive(!isMenuActive);
    menuNav?.classList?.toggle("active");
  };
  window.onscroll = () => {
    menuNav?.classList?.remove("active");
  };
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode'); // Toggle the class on the body
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user has been logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.code);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg p-6 md:p-4 z-10 flex items-center justify-between">
        <div className="flex gap-5 justify-center items-center">
          <Link to="/" className="font-extrabold text-2xl text-gray-700">
            <FaRegPaperPlane className="text-orange-600"></FaRegPaperPlane>
          </Link>
          <span className="text-5xl text-orange-600 font-bold">E-Bazar</span>
        </div>
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
          <NavLink to="/">
            <div className="h-20 w-14 leading-14  text-2xl rounded-md ml-2 text-gray-700 cursor-pointer text-center bg-gray-200 hover:text-[#fff] hover:bg-orange-800">
              <FaHome className="mb-40 ml-2"></FaHome>
            </div>
          </NavLink>
          <NavLink onClick={toggleTheme}>
            <div className="h-20 w-14 leading-14  text-2xl rounded-md ml-2 text-gray-700 cursor-pointer text-center bg-gray-200 hover:text-[#fff] hover:bg-orange-800">
              {/* <FaMoon  className="mb-40" id="theme-btn"></FaMoon> */}
              {isDarkMode ? (
                <FaSun className="mb-40 ml-2" />
              ) : (
                <FaMoon className="mb-40 ml-2" />
              )}
            </div>
          </NavLink>
          {user && (
            <NavLink to="/profile">
              <div className="h-20 w-14 leading-14  text-2xl rounded-md ml-2 text-gray-700 cursor-pointer text-center bg-gray-200 hover:text-[#fff] hover:bg-orange-800">
                <FaUserAlt className="ml-2"></FaUserAlt>
              </div>
            </NavLink>
          )}
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
          {user ? (
            <Link
              onClick={handleLogOut}
              className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item"
              >
                Login
              </Link>
            </>
          )}

          <Link
            to="/addProducts"
            className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item"
          >
            Add Product
          </Link>
          <Link className="block text-gray-700 m-4 p-4 text-1.5xl rounded-md hover:text-orange-600 hover:bg-gray-200 hover:pl-8 menu-item">
            My Cart
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
