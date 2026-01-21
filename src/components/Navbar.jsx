import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoH from "../assets/Logo_H.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass = "text-white font-semibold border-b-2 border-white pb-1 ";
  const normalClass =
    "text-white/90 font-medium pb-1 hover:border-b-2 hover:border-white/60 transition-all";

  return (
    <nav className="w-full bg-gradient-to-r from-[#4b0000] to-[#2a0000] ">
      <div className="max-w-[1728px] mx-auto   px-4 sm:px-6 md:px-8 lg:px-10
          h-[80px] md:h-[90px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={LogoH}
            alt="Hospital Logo"
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[204px] h-auto object-contain"
            
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-[16px] items-center gap-4 md:gap-5 lg:gap-10 md:text-[17px] lg:text-[20px]">
          {["/", "/about", "/treatment", "/gallery", "/blogs", "/contact"].map(
            (path, i) => (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                {
                  [
                    "Home",
                    "About Us",
                    "Treatment",
                    "Gallery",
                    "Blogs",
                    "Contact Us",
                  ][i]
                }
              </NavLink>
            ),
          )}
        </div>

        {/* Register */}
        <Link
          to="/register"
          className="hidden sm:flex items-center justify-between bg-white rounded-full   transition
            px-4 py-2 md:px-5 md:py-3 lg:px-7"
          
        >
          <span className="text-[#4b0000] font-bold md:text-[18px] text-[20px] lg:text-[22px]">  Register Now </span>
          
          <span className="w-6 h-6 lg:w-7 lg:h bg-[#990000] text-white rounded-full flex items-center justify-center">
            →
          </span>
        </Link>

        {/* Mobile- Menu Button */}
        <button
          className="lg:hidden md:hidden text-white text-3xl p-2"
          onClick={() => setOpen(true)}
        >
          ☵
        </button>
      </div>

      {/* Mobile- Overlay of  Menu Button*/}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/*Mobile -  Right Side Panel Opening */}
      <div
        className={`fixed top-[80px] right-4 z-50 w-[260px] sm:w-[280px] rounded-2xl shadow-2xl bg-gradient-to-b from-[#4b0000] to-[#2a0000]
transform transition-all duration-300 ease-out md:hidden
${open ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-4xl" > ✘</button>
        </div>

        <nav className="flex flex flex-col items-center justify-center gap-6 px-6 pb-10">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Treatment", path: "/treatment" },
            { name: "Gallery", path: "/gallery" },
            { name: "Blogs", path: "/blogs" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className="text-white text-[20px] font-medium opacity-90 transition-all hover:opacity-100"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
