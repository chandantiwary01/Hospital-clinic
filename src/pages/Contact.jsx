import React from "react";
import bannerIcon from "../assets/img_02.png";
import doctorIcon from "../assets/img_003.png";

const Contact = () => {
  const inputStyle =
    "w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-black";

  return (
    <section className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="w-full h-[593px] relative overflow-hidden">

        {/* Background Image */}
        <img
          src={bannerIcon}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-[1728px] mx-auto h-full flex flex-col justify-center items-center px-24 text-center">
  <h1 className="text-white text-4xl font-semibold mb-4">
    Contact Us
  </h1>

  <p className="text-gray-200 max-w-xl text-sm leading-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
    sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
    bibendum sit amet, consectetur adipiscing elit. Ornare non sed est
    cursus.
  </p>
</div>


      </div> 

      {/* MAIN PART */}
      <div className="max-w-[1728px] mx-auto px-24 mt-[100px]">

        {/*  FORM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div>
  <img
    src={doctorIcon}
    alt="doctor"
    className="w-full h-[500px] object-cover bg-gray-200 rounded-2xl"
  />
</div>


          {/* Right Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-10 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-red-700"></span>
            </h2>

            <form className="space-y-8">
              <div>
                <label className="text-sm block mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm block mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm block mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm block mb-2">Message</label>
                <textarea rows="2" className={inputStyle}></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 bg-red-700 text-white px-10 py-3 rounded-full text-sm font-medium flex items-center gap-2"
              >
                Submit
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>

        {/*INFO*/}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pb-24 justify-center">

        {/* Call Us */}
        <div className="bg-white shadow-lg relative w-[459px] h-[236px] rounded-[20px] p-8">
          <span className="absolute top-0 left-0 w-full h-[4px] bg-red-700 rounded-t-[20px]"></span>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg">
              📞
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Call Us</h4>
              <p className="text-sm text-gray-700 mb-1">+ 9152654784</p>
              <p className="text-sm text-gray-700">+ 8652654784</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white shadow-lg relative w-[459px] h-[236px] rounded-[20px] p-8">
          <span className="absolute top-0 left-0 w-full h-[4px] bg-red-700 rounded-t-[20px]"></span>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg">
              📍
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Location</h4>
              <p className="text-sm text-gray-700 leading-6">
                121 Rock Street, 21 Avenue,<br />
                Mumbai, Maharashtra
              </p>
              <p className="text-sm text-gray-700 mt-1">92103-9000</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white shadow-lg relative w-[459px] h-[236px] rounded-[20px] p-8">
          <span className="absolute top-0 left-0 w-full h-[4px] bg-red-700 rounded-t-[20px]"></span>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg">
              🕒
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Hours</h4>
              <p className="text-sm text-gray-700 leading-6">
                Mon – Friday – 11:00<br />
                am – 06:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
