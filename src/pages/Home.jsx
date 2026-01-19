import React from "react";

// Assets
import bannerDoctor from "../assets/banner_bg.png";
import aboutImg from "../assets/about_img.png";
import whyChooseImg from "../assets/why_choose_img.png";
import testimonialOne from "../assets/testimonial_1.png";
import testimonialTwo from "../assets/testimonial_2.png";
import blogOne from "../assets/blog_1.png";
import blogTwo from "../assets/blog_2.png";
import blogThree from "../assets/blog_3.png";

const Home = () => {
  // Static data
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
    <div className="bg-white">
      {/*  HERO SECTION  */}
      <section className="relative bg-gradient-to-r from-[#8b0000] to-[#4b0000]" style={{
    width: "1728px",
    height: "1040px",
    marginTop: "-1px",
  }}>
        <div className="max-w-[1728px] mx-auto px-20 py-28 grid grid-cols-2 items-center">
          <div className="text-white">
            <h1
  style={{
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "100px",
    lineHeight: "100%",
    letterSpacing: "5%",
    textTransform: "uppercase",
  }}
  className="mb-4"
>
  HOLISIQUE
</h1>

            <h2 style={{
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "52px",
    lineHeight: "80%",
    letterSpacing: "-3%",
    textTransform: "titlecase",
    wordSpacing: "20px",        
  }}
  className="mb-6">
              Homeopathy Clinic Center In Mumbai
            </h2>
            <p className="text-white/80 max-w-xl mb-10 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

         <button
  className="flex items-center justify-between bg-white rounded-full"
  style={{
    width: "280px",
    height: "68px",
    padding: "0 20px 0 23px",
  }}
>
  <span
    style={{
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "22px",
      lineHeight: "100%",
      letterSpacing: "5%",
      color: "#000000",
      textTransform: "Title case",
      
    }}
  >
    Get Appointment
  </span>

  <span
    className="bg-[#9C0001] text-white rounded-full flex items-center justify-center"
    style={{
      width: "46.34px",
      height: "48.79px",
      fontSize: "24px",
      fontWeight: 700,
    }}
  >
    →
  </span>
</button>


 {/*Banner */}
          </div>

          <div className="flex justify-end">
            <img
              src={bannerDoctor}
              alt="Doctor"
              style={{
      width: "700px",
      height: "928px",
      objectFit: "contain",
    }}

            />
          </div>
        </div>
      </section>

      {/*  ABOUT SECTION  */}
      <section className="max-w-[1728px] mx-auto px-20 py-28 grid grid-cols-2 gap-20 items-center">
        <div className="w-full max-w-[640px]">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={aboutImg}
              alt="About us"
              className="w-full h-[420px] object-contain bg-white"
            />
          </div>
        </div>

        <div>
          <p
  className="mb-3 text-[#8b0000]"
  style={{
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0px",
  }}
>
  About Us
</p>


          <h2
  className="mb-6"
  style={{
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "52px",
    lineHeight: "64px",
    letterSpacing: "-2px",
  }}
>
  Lorem ipsum dolor sit amet, consectetur
</h2>


         <p
  className="mb-6 text-gray-600"
  style={{
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "0px",
  }}
>
  At our hospital, your health and comfort come first. We are dedicated to providing safe, reliable, and compassionate care for every patient. Our team is here to support you at every step of your healing journey.
</p>

<p
  className="mb-10 text-gray-600"
  style={{
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "0px",
  }}
>
  We believe every patient deserves quality treatment and respectful care. With experienced doctors, modern facilities, and a patient-first approach, we work every day to help you feel better and healthier.
</p>


          <div className="border-t border-gray-200 mb-8" />

          <button
  className="flex items-center justify-between bg-[#8b0000] text-white rounded-full"
  style={{
    width: "178px",
    height: "64px",
    borderRadius: "50px",
    padding: "0 22px",
  }}
>
  <span
    style={{
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "5%",
      textAlign: "center",
      
    }}
  >
    About Us
  </span>

  <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
    →
  </span>
</button>

        </div>
      </section>

      {/*  SERVICES SECTION  */}
      <section className="text-center py-28">
  {/* Services */}
  <p
    className="mb-3 text-[#8b0000]"
    style={{
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0px",
    }}
  >
    Services
  </p>

  {/* Our Treatments */}
  <h2
    className="mb-6"
    style={{
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "52px",
      lineHeight: "64px",
      letterSpacing: "-2px",
    }}
  >
    Our Treatments
  </h2>

  {/* Description */}
  <p
    className="max-w-2xl mx-auto text-gray-500 mb-14"
    style={{
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "0px",
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est
    cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra
    tempus.
  </p>

  {/* Category Buttons */}
  <div className="flex items-center justify-center gap-10">
    <button
      className=" text-black"
      style={{
        width: "160px",
        height: "56px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "64px",
        letterSpacing: "0px",
        textAlign: "center",
      }}
    >
      Show All
    </button>

    <button
      className=" text-black "
      style={{
        width: "190px",
        height: "56px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "64px",
        letterSpacing: "0px",
        textAlign: "center",
      }}
    >
      Skin Problems
    </button>

    <button
      className=" text-black "
      style={{
        width: "190px",
        height: "56px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "64px",
        letterSpacing: "0px",
        textAlign: "center",
      }}
    >
      Skin Problems
    </button>

    <button
      className=" text-black "
      style={{
        width: "190px",
        height: "56px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "64px",
        letterSpacing: "0px",
        textAlign: "center",
      }}
    >
      Skin Problems
    </button>
  </div>

        <div className="max-w-[1728px] mx-auto px-20 grid grid-cols-3 gap-10">
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

        <button className="mt-16 bg-[#8b0000] text-white px-10 py-4 rounded-full">
          Show All Services →
        </button>
      </section>

      {/*  WHY CHOOSE US  */}
      <section className="max-w-[1728px] mx-auto px-20 py-28 grid grid-cols-2 gap-20">
        <div>
          <p className="text-[#8b0000] font-semibold mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-bold mb-6">
            Why choose Dr. Serena Martin?
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            From your first visit to recovery, we stand by you with care and understanding. We treat every patient like family, focusing not only on treatment but also on comfort, trust, and well-being.
          </p>

          <div className="flex gap-14">
            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-gray-500">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">50k+</h3>
              <p className="text-gray-500">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-gray-500">Treatment Completed</p>
            </div>
          </div>
        </div>

        <img
          src={whyChooseImg}
          alt="Why choose us"
          className="rounded-3xl"
        />
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="max-w-[1728px] mx-auto px-20 py-28 grid grid-cols-2 gap-20">
        <div>
          <p className="text-[#8b0000] font-semibold mb-3">Our Process</p>
          <h2 className="text-4xl font-bold mb-6">
            A Step by step guide to our Treatment Process
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>

          <button className="bg-[#8b0000] text-white px-6 py-3 rounded-full">
            Explore More →
          </button>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#8b0000] text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{step}</h4>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 text-center">
        <p className="text-[#8b0000] font-semibold mb-3">
          1000+ Happy Customers
        </p>
        <h2 className="text-4xl font-bold mb-16">
          Our satisfied customers love us!
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16">
          {testimonials.map((item, index) => (
            <div key={index} className="flex gap-6 items-center text-left">
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-28 rounded-2xl"
              />
              <div>
                <p className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="max-w-[1728px] mx-auto px-20 py-28">
        <p className="text-center text-[#8b0000] font-semibold mb-3">Our Blog</p>
        <h2 className="text-center text-4xl font-bold mb-16">
          Our Success Stories
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {blogs.map((img, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow">
              <img src={img} alt="Blog" />
              <div className="p-6">
                <h4 className="font-semibold mb-2">
                  Lorem ipsum dolor sit amet
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-32 text-center border-t">
        <h2 className="text-4xl font-bold mb-6">
          Sign up for offers and save 15%
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>

        <div className="flex justify-center gap-6">
          <input
            type="text"
            placeholder="Your name"
            className="border rounded-full px-8 py-4 w-[300px]"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border rounded-full px-8 py-4 w-[300px]"
          />
          <button className="bg-[#8b0000] text-white px-10 py-4 rounded-full">
            Submit →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
