import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `transition-colors duration-150 px-2 py-1 rounded ${
          isActive
            ? "text-blue-600 font-semibold "
            : "text-gray-700 dark:text-gray-200"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
