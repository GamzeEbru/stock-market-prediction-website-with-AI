import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 -mt-8 -mb-6">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        2022 <a href="https://flowbite.com/" class="hover:underline"></a>/ Gamze
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
  );
}

export default Footer;
