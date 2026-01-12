import React from "react";
import aboutImg from "../assets/about_img.png";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={aboutImg}
                alt="About us"
                className="w-full rounded-3xl shadow-lg"
              />

              <div className="absolute -bottom-6 -right-6 hidden md:block bg-white p-4 rounded-2xl shadow-lg max-w-xs">
                <p className="text-sm italic text-gray-600">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus.”
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h4 className="text-[#cf80a8] font-bold mb-2">About Us</h4>

            <h2 className="text-4xl font-bold text-[#363d9d] mb-6">
              Caring for Your Health Naturally
            </h2>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ornare non sed est cursus. Vel hac convallis ipsum,
              facilisi odio pellentesque bibendum viverra tempus.
            </p>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ornare non sed est cursus. Vel hac convallis ipsum,
              facilisi odio pellentesque bibendum viverra tempus.
            </p>

            <button className="flex items-center gap-2 bg-[#363d9d] text-white px-8 py-3 rounded-full hover:bg-[#2a2f7a] transition">
              About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
