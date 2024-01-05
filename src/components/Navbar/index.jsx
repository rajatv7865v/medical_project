import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <main>
      <nav className="fixed h-16  z-50 bg-white w-full px-5 py-4 items-center p-4 g-whiten shadow md:flex md:items-center md:justify-between  top-0">
        <div className="flex justify-between items-center">
          <span className="">
            <img className="mx-4 inline " width={85}  src='/images/LOGO.png' alt="logo" />
            {/* <span>Logo</span> */}
          </span>
          <span
            className="text-3xl cursor-pointer md:hidden  block mx-2 "
            onClick={() => setNavBar(!navBar)}
          >
            {navBar ? <IoMdClose /> : <IoMdMenu />}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center md:z-auto md:static absolute  bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500  ${
            navBar ? "top-[40px]  opacity-100 bg-black" : ""
          }`}
        >
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/"
              className="text-xl font-[500] hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/#about"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              About Us
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/#service"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Our Product
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/#goal"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Our Goal
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/#contact"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
