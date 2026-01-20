import React from "react";


import bannerDoctor from "../assets/banner_bg.png";
import aboutImg from "../assets/about_img.png";
import whyChooseImg from "../assets/why_choose_img.png";
import testimonialOne from "../assets/testimonial_1.png";
import testimonialTwo from "../assets/testimonial_2.png";
import blogOne from "../assets/blog_1.png";
import blogTwo from "../assets/blog_2.png";
import blogThree from "../assets/blog_3.png";

const Home = () => {
  const services = [
    "Hair Fall Treatment",
    "Skin Treatment",
    "PCOS Treatment",
    "Thyroid Treatment",
    "Migraine Treatment",
    "Psoriasis Treatment",
  ];

  const processSteps = [
    "Initial Consultation",
    "Treatment By Doctors",
    "Follow-Up Care",
  ];

  const testimonials = [
    { img: testimonialOne, name: "Jenny Wilson" },
    { img: testimonialTwo, name: "Devon Lane" },
  ];

  const blogs = [blogOne, blogTwo, blogThree];

  return (
    <div className="bg-white overflow-x-hidden">
      {/*  HERO  */}
      <section className="relative bg-gradient-to-r from-[#8b0000] to-[#4b0000]">
        <div className="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white text-center lg:text-left">
            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(48px, 8vw, 100px)",
                lineHeight: "100%",
                letterSpacing: "5%",
              }}
              className="mb-4"
            >
              HOLISIQUE
            </h1>

            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "clamp(26px, 5vw, 52px)",
                lineHeight: "110%",
              }}
              className="mb-6"
            >
              Homeopathy Clinic Center In Mumbai
            </h2>

            <p className="text-white/80 max-w-xl mx-auto lg:mx-0 mb-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <button className="flex mx-auto lg:mx-0 items-center justify-between bg-white rounded-full w-[260px] h-[64px] px-5">
              <span
                className="font-bold text-black"
                style={{ fontFamily: "Poppins" }}
              >
                Get Appointment
              </span>

              <span className="bg-[#9C0001] text-white w-11 h-11 rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerDoctor}
              alt="Doctor"
              className="w-[260px] sm:w-[400px] md:w-[520px] lg:w-[700px]"
            />
          </div>
        </div>
      </section>

      {/*  ABOUT  */}
      <section className="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <img
          src={aboutImg}
          alt="About us"
          className="w-full max-w-[420px] mx-auto"
        />

        <div>
          <p className="mb-3 text-[#8b0000]">About Us</p>

          <h2
            className="mb-6 text-3xl md:text-4xl"
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur
          </h2>

          <p className="mb-6 text-gray-600">
            At our hospital, your health and comfort come first.
          </p>

          <p className="mb-10 text-gray-600">
            We believe every patient deserves quality treatment and respectful
            care.
          </p>

          <button className="flex items-center gap-4 bg-[#8b0000] text-white px-6 py-3 rounded-full">
            About Us
            <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
              →
            </span>
          </button>
        </div>
      </section>

      {/*  SERVICES  */}
      <section className="text-center py-20">
        <h2 className="text-3xl md:text-4xl mb-12">Our Treatments</h2>

        <div className="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`h-[260px] rounded-3xl p-10 flex items-end justify-center text-xl font-semibold text-white ${
                index === 1 ? "bg-[#8b0000]" : "bg-gray-300"
              }`}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/*  TESTIMONIALS  */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl mb-16">
          Our satisfied customers love us!
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div key={index} className="flex gap-6 items-center text-left">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-2xl"
              />
              <div>
                <p className="text-gray-600 mb-2">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
