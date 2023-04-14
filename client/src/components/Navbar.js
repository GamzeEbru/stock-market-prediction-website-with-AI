import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/buyuklogo.png";
import { Link } from "react-scroll";
// import { motion } from "framer-motion";
import "../index.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <div className="w-screen h-[70px] z-10 bg-gray-800 fixed drop-shadow-lg"
    // initial={{ width: "50vw", y2: "5vw", opacity: 1 }}
    // animate={{ width: "100vw", y2: 0, opacity: 1 }}
    // transition={{ duration: 1, origin: 1 }}
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-slate-300">


          <a href="" className="ml-8 flex items-center">
            <img
              src={logo}
              className="logo mr-3 h-6  lg:w-56 lg:h-48 sm:h-36"
              alt="Logo"
            />
          </a>
          <div id="navbarlist">


            <ul className="ml-center hidden md:flex">
              <li>
                <NavLink to="/" smooth="true" duration={500}>
                  AnaSayfa
                </NavLink>
              </li>
              <li>
                <Link to="about" smooth="true" offset={-200} duration={500}>
                  Günlük Veriler
                </Link>
              </li>
              <li>
                <Link to="support" smooth="true" offset={-50} duration={500}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <NavLink to="/piyasa" smooth="true" offset={-50} duration={500}>
                  Piyasalar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="  hidden md:flex pr-4">
          <button className="btnnavbar px-8 py-3 ">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>

        <div className="md:hidden text-gray-300" onClick={handleClick}>
          {!nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-8 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>

        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
