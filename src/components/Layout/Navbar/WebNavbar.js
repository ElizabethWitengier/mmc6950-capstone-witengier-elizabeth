import { useUserContext } from "@/context/UserContext";
import Link from "next/link";
import React, { useState } from "react";

const WebNavbar = ({ openSignUpModal, openLoginModal }) => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);

  const { isAuthenticated, signOut } = useUserContext();
  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4);
  };

  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button
            id="dropdownNavbarLink1"
            onClick={toggleDropdown1}
            className="flex items-center relative justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            Discover{" "}
            <svg
              className="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isDropdownOpen1 && (
            <div
              id="dropdownNavbar1"
              className="z-10 show absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownNavbarLink1"
              >
                <SingleListItem text={"Art Therapy"} />
                <SingleListItem text={"Meditation"} />
                <SingleListItem text={"Yoga"} link="/yoga" />
              </ul>
            </div>
          )}
        </li>
        <li>
          <button
            id="dropdownNavbarLink2"
            onClick={toggleDropdown2}
            className="flex items-center relative justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Learn{" "}
            <svg
              className="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isDropdownOpen2 && (
            <div
              id="dropdownNavbar2"
              className="z-10 show absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownNavbarLink2"
              >
                <SingleListItem text={"Our Story"} />
                <SingleListItem text={"Articles"} />
                <SingleListItem text={"FAQs"} />
              </ul>
            </div>
          )}
        </li>
        <li>
          <button
            id="dropdownNavbarLink3"
            onClick={toggleDropdown3}
            className="flex items-center relative justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            Shop{" "}
            <svg
              className="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isDropdownOpen3 && (
            <div
              id="dropdownNavbar3"
              className="z-10 show absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownNavbarLink1"
              >
                <SingleListItem text={"Products"} />
                <SingleListItem text={"Memberships"} />
              </ul>
            </div>
          )}
        </li>
        <SingleListItem text={"Fav"} />

        <SingleListItem text={"Cart"} />

        <li>
          <button
            id="dropdownNavbarLink4"
            onClick={toggleDropdown4}
            className="flex items-center relative justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            User
          </button>
          {isDropdownOpen4 && (
            <div
              id="dropdownNavbar4"
              className="z-10 show absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownNavbarLink2"
              >
                {isAuthenticated ? (
                  <>
                    <SingleListItem text={"Your Account"} />
                    <SingleListItem text={"Your Membership"} />
                    <SingleListItem text={"Your Categories"} />
                    <SingleListItem text={"Sign Out"} onClick={signOut} />
                  </>
                ) : (
                  <>
                    <SingleListItem text={"Login"} onClick={openLoginModal} />
                    <SingleListItem text={"Signup"} onClick={openSignUpModal} />
                  </>
                )}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

const SingleListItem = ({ text, link, onClick }) => (
  <li onClick={onClick}>
    <Link
      href={link || "/"}
      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {text}
    </Link>
  </li>
);

export default WebNavbar;
