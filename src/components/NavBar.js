import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  const handlePress = (Navigate_to) => {
    navigate(Navigate_to);
  };

  return (<>

    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">E-Book Store</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3 relative cursor-pointer">
              <div className="dropdown text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  onClick={handleDropDown}
                >
                  Get Started
                  <svg
                    className="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className={`z-10 absolute top-full left-0 w-30 bg-white rounded divide-y divide-gray-100 shadow ${isOpen ? "block" : "hidden"
                    }`}
                >
                  <ul className="py-1">
                    <li>
                      <a
                        onClick={()=>handlePress("/login")}
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=>handlePress("/signup")}
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>

  );
}

export default Navbar;


