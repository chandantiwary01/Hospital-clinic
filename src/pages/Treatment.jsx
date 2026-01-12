import React from "react";
import hair from "../assets/treatment_hair.png";
import pcos from "../assets/treatment_pcos.png";
import thyroid from "../assets/treatment_thyroid.png";
import migraine from "../assets/treatment_migraine.png";
import psoriasis from "../assets/treatment_psoriasis.png";

const treatments = [
  { title: "Hair Fall Treatment", image: hair },
  { title: "PCOS Treatment", image: pcos },
  { title: "Thyroid Treatment", image: thyroid },
  { title: "Migraine Treatment", image: migraine },
  { title: "Psoriasis Treatment", image: psoriasis },
  { title: "Skin Treatment", special: true },
];

const ArrowIcon = () => (
  <svg
    className="w-5 h-5"
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

const Treatment = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-[#cf80a8] font-bold text-lg mb-2">Services</h3>
            <h2 className="text-4xl font-bold text-[#363d9d]">
              Our Treatments
            </h2>
          </div>

          <div className="hidden md:flex bg-[#f8f9fa] rounded-full p-1">
            <button className="bg-[#cf80a8] text-white px-6 py-2 rounded-full text-sm">
              Show All
            </button>
            <button className="px-6 py-2 text-sm text-gray-500 hover:bg-gray-200 rounded-full">
              Skin Problems
            </button>
            <button className="px-6 py-2 text-sm text-gray-500 hover:bg-gray-200 rounded-full">
              Hormonal
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, index) =>
            item.special ? (
              <div
                key={index}
                className="bg-[#363d9d] text-white rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <div className="w-10 h-10 mb-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowIcon />
                  </div>

                  <p className="text-sm text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <button className="mt-8 w-full bg-white text-[#363d9d] py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition">
                  Show all services
                </button>
              </div>
            ) : (
              <div
                key={index}
                className="rounded-3xl overflow-hidden relative h-80"
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

      </div>
    </div>
  );
};

export default Treatment;
