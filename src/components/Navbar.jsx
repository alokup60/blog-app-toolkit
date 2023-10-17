import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex w-full bg-violet-500 relative main-nav">
      <nav className="flex gap-6 w-10/12 justify-between items-center mx-auto py-3 sticky top-0">
        <h2 className="text-white items-center font-semibold text-xl">
          <Link to="/">Redux-Toolkit Blogs</Link>
        </h2>
        <div className="burger text-2xl text-white" onClick={handleShowNavbar}>
          {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className={`nav-links ${showNav && "active"}`}>
          <ul className={`flex gap-4 `}>
            <li className="flex text-white items-center  text-xl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex text-white items-center  text-xl">
              <NavLink to="/post">Post</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
