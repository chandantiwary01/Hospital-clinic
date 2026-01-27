import React from "react";
import gallery_bg from "../assets/gallery_bg.png";
import gallery1 from "../assets/gallery_1.png";
import gallery2 from "../assets/gallery_2.png";
import gallery3 from "../assets/gallery_3.png";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3];

  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] relative overflow-hidden">
        <img
          src={gallery_bg}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#73738100] to-[#18181BCC]"></div>

        <div className="relative z-20 max-w-[1728px] mx-auto h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 text-center">
          <h1 className="text-white font-['Poppins'] font-bold text-[28px] sm:text-[36px] md:text-[52px] mb-4">
            Our Gallery
          </h1>

          <p className="text-gray-200 max-w-xl font-['Poppins'] font-medium text-[14px] sm:text-[16px] leading-6">
            "Explore a glimpse into the heart of [Holisquie Clinic]. From our
            state-of-the-art surgical suites to our comfortable patient recovery
            rooms, our gallery showcases the advanced technology and
            compassionate environment we provide to ensure your journey to
            health is supported every step of the way."
          </p>
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="w-full flex flex-col gap-8 items-center mb-6 px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <div className="relative mb-14">
         <h2 className="font-['Poppins'] font-semibold text-[32px] sm:text-[40px] lg:text-[52px] text-[#000000] text-center mt-15">
  Our Latest Images
</h2>

          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[60px] sm:w-[86px] border-b-[4px] border-[#9C0001]"></span>
        </div>

        {/* ===== ROW 1 ===== */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center w-full max-w-[1728px]">
          <div className="w-full sm:w-[418px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery1} alt="Gallery image 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="w-full sm:w-[655px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery2} alt="Gallery image 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="w-full sm:w-[418px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery3} alt="Gallery image 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center w-full max-w-[1728px] mt-4">
          <div className="w-full sm:w-[495px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery1} alt="Gallery image 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="w-full sm:w-[495px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery2} alt="Gallery image 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="w-full sm:w-[495px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery3} alt="Gallery image 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* ===== ROW 3 ===== */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center w-full max-w-[1728px] mt-4">
          <div className="w-full sm:w-[418px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery1} alt="Gallery image 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="w-full sm:w-[655px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery2} alt="Gallery image 8" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="w-full sm:w-[418px] h-[360px] sm:h-[506px] rounded-[20px] overflow-hidden">
            <img src={gallery3} alt="Gallery image 9" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="flex items-center gap-2 justify-center font-['Poppins'] font-semibold text-[16px] sm:text-[18px] text-white transition-all"
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
            View all <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
