import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyIcon from "../assets/Icon.png"; 


const Navbar = ({ darkMode, toggleDarkMode }) => {
  // State to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to close menu on outside click
  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      // Check if the click occurred outside the navbar and the menu is open
      if (
        isMenuOpen &&
        event.target.closest("#navbar-sticky") === null &&
        event.target.closest(".toggle-menu-button") === null
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white dark:bg-gray-1000 shadow-lg fixed w-full z-20 top-0 start-0 shadow-sky-900 dark:border-gray-800 text-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <img src={MyIcon} alt="Icon" className="w-8 h-8" /> 
          <h1 className="text-xl font-bold">Gabriel Massabni</h1> 
        </div>

        {/* Toggle Button for Mobile */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            className="toggle-menu-button inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium cursor-pointer bg-white dark:bg-gray-1000 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white text-gray-800 dark:text-white shadow-md">
            {/* Menu Items */}
            <li>
              <Link
                to="/Home"
                className="block py-2 px-3 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutMe"
                className="block py-2 px-3 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/Project"
                className="block py-2 px-3 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/ContactMe"
                className="block py-2 px-3 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
          </nav>
  );
};

export default Navbar;
