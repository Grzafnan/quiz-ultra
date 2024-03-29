import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-20 shadow-md relative z-10">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img className="w-10" src={logo} alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-white uppercase">
            Quiz-Ultra
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/home"
              aria-label="Our product"
              title="Our product"
              className={({ isActive }) =>
                `font-medium tracking-wide transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700 dark:text-blue-400 " : "text-gray-700 dark:text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/topics"
              aria-label="Our product"
              title="Our product"
              className={({ isActive }) =>
                `font-medium tracking-wide transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700 dark:text-blue-400 " : "text-gray-700 dark:text-white"}`
              }
            >
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              aria-label="Our product"
              title="Our product"
              className={({ isActive }) =>
                `font-medium tracking-wide transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700 dark:text-blue-400 " : "text-gray-700 dark:text-white"}`
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Product pricing"
              title="Product pricing"
              className={({ isActive }) =>
                `font-medium tracking-wide transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700 dark:text-blue-400 " : "text-gray-700 dark:text-white"}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-label="About us"
              title="About us"
              className={({ isActive }) =>
                `font-medium tracking-wide transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700 dark:text-blue-400 " : "text-gray-700 dark:text-white"}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img className="w-10" src={logo} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Quiz-Ultra
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="flex flex-col space-y-4 items-center">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700" : "text-gray-700"}`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/topics"
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700" : "text-gray-700"}`
                        }
                      >
                        Topics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/statistics"
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700" : "text-gray-700"}`
                        }
                      >
                        Statistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className={({ isActive }) =>
                          `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700" : "text-gray-700"}`
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        aria-label="About us"
                        title="About us"
                        className={({ isActive }) =>
                          `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 ${isActive ? "text-blue-700" : "text-gray-700"}`
                        }
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default Header;
