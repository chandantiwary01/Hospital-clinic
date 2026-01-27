import React from "react";


import banner from "../assets/banner_bgImg.png";

import hair from "../assets/treatment_hair.png";
import pcos from "../assets/treatment_pcos.png";
import thyroid from "../assets/treatment_thyroid.png";
import migraine from "../assets/treatment_migraine.png";
import psoriasis from "../assets/treatment_psoriasis.png";
import pediatric from "../assets/pediatric_doctor.png";
import skintreatment from '../assets/cosmet_img.png';


const treatments = [
  { title: "Hair Fall Treatment", image: hair },
  { title: "PCOS Treatment", image: pcos },
  { title: "Thyroid Treatment", image: thyroid },
  { title: "Migraine Treatment", image: migraine },
  { title: "Psoriasis Treatment", image: psoriasis },
  { title: "Skin Treatment", image: skintreatment },
];


const ArrowIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

/*  Component  */
const Treatment = () => {
  return (
    <>
      {/*  HERO */}
      <section className="relative h-[593px] w-full max-w-[1728px] mx-auto overflow-hidden">
  {/* Background Image */}
  <img
    src={banner}
    alt="Homeopathy Treatment"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Linear Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#73738100] to-[#18181BCC]" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
    <div className="max-w-4xl text-white">
      <h1
        className="
          font-poppins 
          font-bold 
          text-[52px] 
          leading-[100%] 
          tracking-[0.05em] 
          mb-6
        "
      >
        Restoring Health Naturally With Homeopathy
      </h1>

      <p
        className="
          font-poppins 
          font-medium 
          text-[16px] 
          leading-[27px] 
          tracking-[0px] 
          text-white/90
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.
        Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
      </p>
    </div>
  </div>
</section>


      
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
         <p
  style={{
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0px",
    color: "#440001",
    
  }}
>
  Services
</p>



          <h2
  style={{
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "52px",
    lineHeight: "64px",
    letterSpacing: "-2px",
    textAlign: "center",
  }}
>
  We Provide Awesome Services
</h2>


          <p className="text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ornare non sed est cursus. Vel hac convallis ipsum.
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
  {["Show All", "Skin Problems", "Hormonal", "Chronic"].map((label) => (
    <button
      key={label}
      style={{
        width: "179px",
        height: "61px",
        borderRadius: "40px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "64px",
        letterSpacing: "0px",
        textAlign: "center",
        border: "0.5px solid #440001",
        backgroundColor: "transparent",
        color: "#440001",
        cursor: "pointer",
        
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#440001";
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#440001";
      }}
    >
      {label}
    </button>
  ))}
  </div>
            </div>

        {/* Treatments  */}
        <div className="max-w-[1400px] mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, index) =>
              item.special ? (
                <div
                  key={index}
                  className="bg-[#8b0000] text-white rounded-3xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <div className="w-10 h-10 mb-6 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowIcon />
                    </div>

                    
                  </div>

                  
                </div>
              ) : (
                <div
                  key={index}
                  className="relative h-80 overflow-hidden rounded-3xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex justify-between items-end">
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>

                      <div className="p-2 rounded-full bg-white/20 backdrop-blur">
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button className="flex items-center gap-3 transition hover:bg-[#8b0000] hover:text-white px-10 py-4 rounded-full font-semibold">
              Show All Services
              <span className="w-8 h-8 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden">
            {/* Text */}
            <div className="bg-[#8b0000] text-white p-14 flex flex-col justify-center">
              <span className="uppercase text-xs tracking-widest mb-4">
                Pediatric health services
              </span>

              <h2 className="text-4xl font-bold leading-snug mb-6">
                A World Of Health Services <br />
                with Specialist Doctors & <br />
                Technology
              </h2>

              <p className="text-white/80 mb-10">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel.
              </p>

              <button className="flex items-center gap-3 bg-white text-[#8b0000] font-semibold px-8 py-4 rounded-full w-fit">
                Book Appointment
                <span className="w-8 h-8 bg-[#8b0000] text-white rounded-full flex items-center justify-center">
                  →
                </span>
              </button>
            </div>

            {/* Image */}
            <div>
              <img
                src={pediatric}
                alt="Pediatric Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatment;
