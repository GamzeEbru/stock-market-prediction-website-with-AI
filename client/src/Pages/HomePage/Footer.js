import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    // <div className="absolute bottom-0 w-full left-0">
    <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 mt-60">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        2023 <a href="https://flowbite.com/" class="hover:underline"></a>/ Gamze
        - Ezgi
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <NavLink
            to="/about"
            className="mr-4 hover:underline md:mr-6"
            smooth="true"
            duration={500}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="hover:underline"
            smooth="true"
            duration={500}
          >
            İletişim
          </NavLink>
        </li>
      </ul>
    </footer>
    // </div>
  );
}

export default Footer;
