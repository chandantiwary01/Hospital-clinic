<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary font-sans">
              HOLISIQUE
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-900 hover:text-primary font-medium">Home</Link>
            <a href="#about" className="text-gray-500 hover:text-primary font-medium">About Us</a>
            <a href="#treatments" className="text-gray-500 hover:text-primary font-medium">Treatments</a>
            <a href="#gallery" className="text-gray-500 hover:text-primary font-medium">Gallery</a>
            <a href="#blog" className="text-gray-500 hover:text-primary font-medium">Blogs</a>
            <a href="#contact" className="text-gray-500 hover:text-primary font-medium">Contact Us</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-light text-primary px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Register Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-primary font-medium">Home</Link>
            <a href="#about" className="block px-3 py-2 text-gray-500 hover:text-primary font-medium">About Us</a>
            <a href="#treatments" className="block px-3 py-2 text-gray-500 hover:text-primary font-medium">Treatments</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-500 hover:text-primary font-medium">Gallery</a>
            <a href="#blog" className="block px-3 py-2 text-gray-500 hover:text-primary font-medium">Blogs</a>
            <a href="#contact" className="block px-3 py-2 text-gray-500 hover:text-primary font-medium">Contact Us</a>
            <button className="w-full text-left px-3 py-2 text-primary font-bold">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
>>>>>>> fab08c46477081520ee47646acea2ab84188be1f
