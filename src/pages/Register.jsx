import React from "react";
import instaIcon from "../assets/insta_1.png";
import fbIcon from "../assets/fb_1.png";
import twtIcon from "../assets/twt_1.png";

const Register = () => {
  const inputClasses =
    "w-full rounded-lg bg-gray-100 px-4 sm:px-6 md:px-12 py-3 text-base sm:text-lg md:text-[20px] font-poppins focus:outline-none focus:ring-2 focus:ring-[#990000]";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-poppins">
      {/* Left Decorative Section */}
      <div className="relative hidden lg:block lg:w-[40%] overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[900px] h-[900px] xl:w-[1200px] xl:h-[1200px] bg-[#5a0000] rounded-full -translate-y-1/2 -translate-x-[55%]" />
      </div>

      {/* Right Form Section */}
      <div className="flex w-full lg:w-[60%] items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-xl py-10">
          <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-[#990000] mb-2 text-center lg:text-left">
            Welcome
          </h1>

          <p className="text-base sm:text-lg md:text-[20px] text-gray-600 mb-8 text-center lg:text-left">
            Sign in to continue your progress
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-base sm:text-lg md:text-[20px] font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-[20px] font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-[20px] font-medium mb-1">
                Aadhaar Card
              </label>
              <input
                type="text"
                placeholder="Enter your Aadhaar number"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-[20px] font-medium mb-1">
                PAN Card
              </label>
              <input
                type="text"
                placeholder="Enter your PAN number"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-[20px] font-medium mb-1">
                Email ID
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="w-full h-[56px] sm:h-[64px] md:h-[80px] mt-6 rounded-[16px] sm:rounded-[20px] bg-[#990000] text-white text-lg sm:text-xl md:text-[30px] font-semibold hover:bg-[#7a0000] transition"
            >
              Register now
            </button>
          </form>

          {/* Social Login */}
          <div className="flex justify-center gap-6 sm:gap-8 mt-10">
            <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
              <img src={instaIcon} alt="Instagram" className="w-5 sm:w-6" />
            </button>

            <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 flex items-center justify-center">
              <img src={fbIcon} alt="Facebook" className="w-5 sm:w-6" />
            </button>

            <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-400 flex items-center justify-center">
              <img src={twtIcon} alt="Twitter" className="w-5 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
