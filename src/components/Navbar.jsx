import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full bg-violet-500">
      <ul className="flex gap-6 w-10/12 justify-end mx-auto py-3">
        <li className="flex text-white items-center font-semibold text-xl">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="flex text-white items-center font-semibold text-xl">
          <NavLink to="/post">Post</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
