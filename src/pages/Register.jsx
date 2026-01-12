import React from "react";
import instaIcon from "../assets/insta_1.png";
import fbIcon from "../assets/fb_1.png";
import twtIcon from "../assets/twt_1.png";


const Register = () => {
  const inputStyle =
    "w-full rounded-lg bg-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#990000]";

  return (
    <div className="min-h-screen flex bg-white">

      {/* Left decorative shape */}
      <div className="relative hidden lg:block w-[40%] overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[1200px] h-[1200px] bg-[#5a0000] rounded-full -translate-y-1/2 -translate-x-[55%]" />
      </div>

      {/* Form */}
      <div className="flex w-full lg:w-[60%] items-center justify-center">
        <div className="w-full max-w-xl px-6">

          <h1 className="text-4xl font-bold text-[#990000] mb-1">
            Welcome
          </h1>
          <p className="text-gray-600 mb-8">
            Sign in to continue your progress
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" placeholder="Enter your name" className={inputStyle} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="text" placeholder="Enter your number" className={inputStyle} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Aadhaar Card</label>
              <input type="text" placeholder="Enter Aadhaar number" className={inputStyle} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">PAN Card</label>
              <input type="text" placeholder="Enter PAN number" className={inputStyle} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email ID</label>
              <input type="email" placeholder="Enter your email" className={inputStyle} />
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-4 rounded-full bg-[#990000] text-white text-lg font-semibold hover:bg-[#7a0000] transition"
            >
              Register now
            </button>
          </form>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-10">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white cursor-pointer">
              <img src={instaIcon} alt="Instagram"  />

            </div>
            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer">
              <img src ={fbIcon} alt ="Facebook"/>
            </div>
            <div className="w-11 h-11 rounded-full bg-sky-400 flex items-center justify-center text-white cursor-pointer">
              <img src ={twtIcon} alt ="Tweet" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
