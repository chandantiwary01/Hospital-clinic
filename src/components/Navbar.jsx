import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoH from "../assets/Logo_H.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass = "text-white font-medium border-b-2 border-white pb-1";
  const normalClass =
    "text-white font-medium pb-1 hover:border-b-2 hover:border-white/60";

  return (
    <nav className="w-full bg-gradient-to-r from-[#4b0000] to-[#2a0000]">
      <div className="max-w-[1728px] mx-auto px-10 h-[90px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={LogoH}
            alt="Hospital Logo"
            style={{
              width: "clamp(160px, 20vw, 204.71px)",
              height: "60px",
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-[20px] items-center gap-10">
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
          className="hidden sm:flex items-center justify-between bg-white rounded-full"
          style={{ width: "242px", height: "62px", padding: "0 16px 0 24px" }}
        >
          <span className="text-[#4b0000] font-bold text-[23px]">  Register Now </span>
          
          <span className="w-7 h-7 bg-[#990000] text-white rounded-full flex items-center justify-center">
            →
          </span>
        </Link>

        {/* Mobile- Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(true)}
        >
          ☰
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
        className={`fixed top-[80px] right-4 z-50 w-[260px] sm:w-[280px] rounded-2xl shadow-3xl bg-gradient-to-b from-[#4b0000] to-[#2a0000]
transform transition-all duration-300 ease-out md:hidden
${open ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl" > ✕ </button>
        </div>

        <nav className="h-full flex flex-col items-center justify-center gap-6 px-6">
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
              className="text-white text-[20px] font-medium opacity-90 transition-all"
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
