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
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#8b0000] to-[#4b0000]">
        <div className="max-w-[1728px] mx-auto px-20 py-24 grid grid-cols-2 items-center">
          <div className="text-white">
            <h1 className="text-6xl font-extrabold mb-4">HOLISIQUE</h1>
            <h2 className="text-3xl font-semibold mb-6">
              Homeopathy Clinic Center In Mumbai
            </h2>
            <p className="text-white/80 max-w-xl mb-10 leading-relaxed">
              A trusted homeopathy clinic focused on long-term healing and
              patient-centric care.
            </p>

            <button className="flex items-center gap-4 bg-white text-[#8b0000] font-semibold px-8 py-4 rounded-full">
              Get Appointment
              <span className="w-10 h-10 bg-[#8b0000] text-white rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>

          <div className="flex justify-end">
            <img
              src={bannerDoctor}
              alt="Doctor"
              className="h-[620px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-[1728px] mx-auto px-20 py-28 grid grid-cols-2 gap-20">
        <img src={aboutImg} alt="About" className="rounded-3xl" />

        <div>
          <p className="text-[#8b0000] font-semibold mb-3">About Us</p>
          <h2 className="text-4xl font-bold mb-6">
            Natural care for long-term health
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We provide personalized homeopathy treatments focused on root-cause
            healing and overall wellness.
          </p>

          <button className="bg-[#8b0000] text-white px-6 py-3 rounded-full">
            About us →
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="text-center py-28">
        <p className="text-[#8b0000] font-semibold mb-3">Services</p>
        <h2 className="text-4xl font-bold mb-6">Our Treatments</h2>
        <p className="max-w-2xl mx-auto text-gray-500 mb-14">
          Specialized treatments designed for long-lasting results.
        </p>

        <div className="max-w-[1728px] mx-auto px-20 grid grid-cols-3 gap-10">
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

        <button className="mt-16 bg-[#8b0000] text-white px-10 py-4 rounded-full">
          Show All Services →
        </button>
      </section>

      {/* Why Choose */}
      <section className="max-w-[1728px] mx-auto px-20 py-28 grid grid-cols-2 gap-20">
        <div>
          <p className="text-[#8b0000] font-semibold mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-bold mb-6">
            Why choose Dr. Serena Martin?
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            Years of experience combined with patient-focused treatment.
          </p>

          <div className="flex gap-14">
            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">50k+</h3>
              <p className="text-gray-500">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-gray-500">Treatments</p>
            </div>
          </div>
        </div>

        <img src={whyChooseImg} alt="Why choose us" className="rounded-3xl" />
      </section>

      {/* Testimonials */}
      <section className="py-28 text-center">
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
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Sign up & save 15% on consultation
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Get updates, offers, and health tips straight to your inbox.
        </p>

        <div className="flex justify-center gap-6">
          <input
            className="border rounded-full px-8 py-4 w-[300px]"
            placeholder="Your name"
          />
          <input
            className="border rounded-full px-8 py-4 w-[300px]"
            placeholder="Your email"
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
