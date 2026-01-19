import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoH from "../assets/Logo_H.png";

const Navbar = () => {
  const activeClass = "text-white font-medium border-b-2 border-white pb-1";
  const normalClass =
    "text-white font-medium pb-1 hover:border-b-2 hover:border-white/60";

  return (
    <nav className="w-full bg-gradient-to-r from-[#4b0000] to-[#2a0000]">
      <div className="max-w-[1728px] mx-auto px-10 h-[90px] flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center">
          <Link to="/">
            <img
              src={LogoH}
              alt="Hospital Logo"
              style={{
                width: "204.71px",
                height: "60px",
              }}
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex text-[20px] items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/treatment"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Treatment
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Link */}
        <Link
          to="/register"
          className="flex items-center justify-between bg-white rounded-full hover:bg-gray-100 transition"
          style={{
            width: "242px",
            height: "62px",
            padding: "0 16px 0 24px",
          }}
        >
          <span
            className="text-[#4b0000]"
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "23px",
              lineHeight: "100%",
              letterSpacing: "5%",
            }}
          >
            Register Now
          </span>

          <span className="w-7 h-7 bg-[#990000] text-white rounded-full flex items-center justify-center">
            →
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
