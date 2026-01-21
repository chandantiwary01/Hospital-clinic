import React from "react";
import bannerDoctor from "../assets/banner_bg.png";
import aboutImg from "../assets/about_img.png";
import whyChooseImg from "../assets/why_choose_img.png";
import t1 from "../assets/testimonial_1.png";
import t2 from "../assets/testimonial_2.png";

const Home = () => {
  const services = [
    "Hair Fall Treatment",
    "Skin Treatment",
    "PCOS Treatment",
    "Thyroid Treatment",
    "Migraine Treatment",
    "Psoriasis Treatment",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#9C0001] to-[#9C0001]">
        <div className="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="text-white text-center lg:text-left order-2 lg:order-1 ">
            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(48px, 8vw, 100px)",
                lineHeight: "100%",
              }}
              className="mb-4"
            >
              HOLISIQUE
            </h1>

            {/* H2 */}
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "clamp(28px, 5vw, 52px)",
                lineHeight: "60px",
                letterSpacing: "-3%",
              }}
              className="mb-6"
            >
              Homeopathy Clinic Center In Mumbai
            </h2>

            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "clamp(16px, 3vw, 22px)",
              }}
              className="text-white/80 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              A trusted homeopathy clinic focused on long-term healing and
              patient-centric care.
            </p>

            {/* BUTTON */}
            <button
              className="flex items-center justify-between bg-white text-black mx-auto lg:mx-0 hover:bg-[#440001] hover:text-white transition-all duration-300"
              style={{
                 width: "clamp(240px, 30vw, 280px)",
                height: "64px",
                borderRadius: "32px",
                padding: "0 20px",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Get Appointment
              <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={bannerDoctor}
              alt="Doctor"
              className="w-[260px] sm:w-[420px] md:w-[520px] lg:h-[620px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center px-6 md:px-12 lg:px-20 py-16 lg:py-24"
        style={{
          maxWidth: "1529px",
          height: "487px",
        }}
      >
        {/* IMAGE */}
        <img
          src={aboutImg}
          alt="About"
          className="w-full h-auto object-cover rounded-[20px]"
          style={{
            width: "716.37px",
            height: "487px",
            borderRadius: "20px",
          }}
        />

        {/* CONTENT */}
        <div>
          {/* ABOUT LABEL */}
          <p
            className="mb-3"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              
              color: "#440001",
            }}
          >
            About Us
          </p>

          {/* HEADING */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
               fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: "clamp(40px, 6vw, 64px)",
            }}
          >
            Natural care for long-term health
          </h2>

          {/* DESCRIPTION */}
          <p
            className="mb-8 text-gray-600"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            We provide personalized homeopathy treatments focused on root-cause
            healing and overall wellness.
          </p>

          {/* BUTTON */}
          <button
            className="flex items-center justify-center bg-[#8b0000] text-white hover:bg-[#440001] transition-all duration-300"
            style={{
              width: "178px",
              height: "64px",
              borderRadius: "50px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            About us →
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="text-center py-15 px-6">
        <p className="text-[#8b0000] font-semibold mb-3">Services</p>
        <h2 className="text-4xl font-bold mb-6">Our Treatments</h2>
        <p className="max-w-2xl mx-auto text-gray-500 mb-10 md:mb-14">
          Specialized treatments designed for long-lasting results.
        </p>

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

        <div className="max-w-[1728px] mx-auto px-25 mt-16 grid grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={`h-[260px] rounded-3xl p-10 flex items-end justify-center text-xl font-semibold text-white
                ${i === 1 ? "bg-[#8b0000]" : "bg-gray-300"}`}
            >
              {service}
            </div>
          ))}
        </div>

        <button className="mt-12 md:mt-16 bg-[#8b0000] text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-[#440001] transition-all">
          Show All Services →
        </button>
      </section>

      {/* Why Choose */}
      <section className="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <p className="text-[#8b0000] font-semibold mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why choose Dr. Serena Martin?
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            Years of experience combined with patient-focused treatment.
          </p>

          <div className="flex flex-wrap gap-8 md:gap-14">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">50k+</h3>
              <p className="text-gray-500">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">1000+</h3>
              <p className="text-gray-500">Treatments</p>
            </div>
          </div>
        </div>

        <img src={whyChooseImg} alt="Why choose us" className="rounded-3xl w-full h-auto object-cover" />
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-28 text-center px-6">
        <p className="text-[#8b0000] font-semibold mb-3">
          1000+ Happy Customers
        </p>
        <h2 className="text-4xl font-bold mb-16">
          Our patients love the results
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16">
          {[t1, t2].map((img, i) => (
            <div key={i} className="flex gap-6 items-center text-left">
              <img src={img} alt="Client" className="w-28 h-28 rounded-2xl" />
              <div>
                <p className="text-gray-600 mb-3">
                  Professional care with noticeable improvement in health.
                </p>
                <p className="font-semibold">
                  {i === 0 ? "Jenny Wilson" : "Devon Lane"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32 text-center px-6 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Sign up & save 15% on consultation
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Get updates, offers, and health tips straight to your inbox.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            className="border rounded-full px-8 py-4 w-full max-w-[350px]"
            placeholder="Your name"
          />
          <input
            className="border rounded-full px-8 py-4 w-full max-w-[350px]"
            placeholder="Your email"
          />
          <button className="bg-[#8b0000] text-white px-10 py-4 rounded-full w-full max-w-[350px] md:w-auto hover:bg-[#440001] transition-all">
            Submit →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
