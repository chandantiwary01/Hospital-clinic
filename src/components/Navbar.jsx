import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass =
    "text-white font-medium border-b-2 border-white pb-1";
  const normalClass =
    "text-white font-medium pb-1 hover:border-b-2 hover:border-white/60";

  return (
    <nav className="w-full bg-gradient-to-r from-[#4b0000] to-[#2a0000]">
      <div className="max-w-[1728px] mx-auto px-10 h-[90px] flex items-center justify-between">

        {/* Logo */}
        <div className="leading-tight">
          <Link to="/" className="text-white text-3xl font-bold">
            Hospital
          </Link>
          <p className="text-yellow-400 text-xs font-medium">
            Homoeopathy Clinic
          </p>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>
            About Us
          </NavLink>

          <NavLink to="/treatment" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Treatment
          </NavLink>

          <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Gallery
          </NavLink>

          <NavLink to="/blogs" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Blogs
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Contact Us
          </NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/register"
          className="flex items-center gap-3 bg-white text-[#4b0000] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Register Now
          <span className="w-7 h-7 bg-[#4b0000] text-white rounded-full flex items-center justify-center">
            →
          </span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
