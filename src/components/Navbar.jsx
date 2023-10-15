import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full bg-violet-500">
      <div className="flex gap-6 w-10/12 justify-between items-center mx-auto py-3">
        <h2 className="text-white items-center font-semibold text-xl">
          <Link to="/">Redux-Toolkit Blogs</Link>
        </h2>
        <ul className="flex gap-4">
          <li className="flex text-white items-center  text-xl">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex text-white items-center  text-xl">
            <NavLink to="/post">Post</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
