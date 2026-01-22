import React from "react";
import bannerIcon from "../assets/img_02.png";
import doctorIcon from "../assets/img_003.png";

const Contact = () => {
  const inputStyle =
    "w-full border-b border-gray-300 bg-transparent py-2 text-[14px] sm:text-[16px] font-['Poppins'] font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#9C0001] transition-colors";

  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] relative overflow-hidden">
        <img
          src={bannerIcon}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#73738100] to-[#18181BCC]"></div>

        <div className="relative z-20 max-w-[1728px] mx-auto h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 text-center">
          <h1 className="text-white font-['Poppins'] font-bold text-[28px] sm:text-[36px] md:text-[52px] mb-4">
            Contact Us
          </h1>

          <p className="text-gray-200 max-w-xl font-poppins font-medium text-[14px] sm:text-[16px] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus.
          </p>
        </div>
      </div>

      {/* ================= MAIN PART ================= */}
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 mt-16 sm:mt-20">
        {/* ================= FORM SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="hidden lg:block">
            <img
              src={doctorIcon}
              alt="doctor"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Form */}
          <div>
            <div className="text-center mb-10">
              <h2 className="font-['Poppins'] font-semibold text-[32px] sm:text-[42px] md:text-[52px] relative inline-block">
                Contact Us
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[60px] sm:w-[86px] border-b-[4px] border-[#9C0001]"></span>
              </h2>
            </div>

            <form className="space-y-4 text-left">
              {["Name", "Email Address", "Phone Number"].map((label) => (
                <div key={label}>
                  <label className="font-['Poppins'] font-medium text-[16px] sm:text-[20px] block mb-2">
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter Your ${label}`}
                    className={inputStyle}
                  />
                </div>
              ))}

              <div>
                <label className="font-['Poppins'] font-medium text-[16px] sm:text-[20px] block mb-2">
                  Message
                </label>
                <textarea rows="3" className={inputStyle}></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="flex items-center gap-2 justify-center font-['Poppins'] font-semibold text-[18px] sm:text-[20px] text-white transition-all"
                  style={{
                    width: "205px",
                    height: "64px",
                    backgroundColor: "#9C0001",
                    borderRadius: "50px",
                  }}
                   onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#440001";
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#9C0001";
      }}
    >
                
                  Submit <span>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 pb-20 justify-items-center">
          {[ 
            { title: "Call Us", content: ["+ 9152654784", "+ 8652654784"], icon: "☎" },
            { title: "Location", content: ["121 Rock Street, 21 Avenue,", "Mumbai, Maharashtra"], icon: "⚲" },
            { title: "Hours", content: ["Mon – Friday – 11:00 am", "06:00 pm"], icon: "🕒" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg relative w-full max-w-[459px] rounded-[20px] p-6 sm:p-8"
            >
              <span className="absolute top-0 left-0 w-full h-[4px] bg-[#9C0001] rounded-t-[20px]"></span>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  {item.content.map((text, i) => (
                    <p key={i} className="text-sm text-gray-700 leading-6">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
