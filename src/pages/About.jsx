import React from "react";

import banner from "../assets/banner_aboutus.png";

const CONTAINER = "max-w-[1728px] mx-auto px-20";

const About = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative w-full h-[587px] flex justify-center">
  {/* Background Image */}
  <img
    src={banner}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Light Overlay */}
  <div className="absolute inset-0 bg-gray-300/20" />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* Content */}
  <div className={`${CONTAINER} relative z-20 h-full flex items-center`}>
    <div className="max-w-2xl text-white">
      <h1 className="text-[50px] font-poppins font-bold leading-tight mb-6">
        Your Health, Our Priority
      </h1>

      <p className="text-sm leading-relaxed text-white/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ornare non sed est cursus. Vel hac convallis ipsum facilisi odio.
      </p>
    </div>
  </div>
</section>


      {/*  ABOUT US */}
      <section className="py-28 text-center">
        <div className={CONTAINER}>
          <span className="text-sm font-semibold uppercase text-[#8b0000]">
            About Us
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Healing Experiences – For Everyone,
            <br />
            All The Time
          </h2>

          <div className="w-16 h-1 bg-[#8b0000] mx-auto mt-6 mb-8" />

          <p className="max-w-3xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ornare non sed est cursus. Vel hac convallis ipsum facilisi odio pellentesque.
          </p>

          <div className="mt-10">
            <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full">
              Read More
              <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className={`${CONTAINER} grid md:grid-cols-2 gap-20 items-center`}>
          <div>
            <span className="text-sm font-semibold text-[#8b0000]">
              What We Do
            </span>

            <h3 className="text-4xl font-bold mt-4 mb-6">
              We are always Health Give
              <br /> of best service
            </h3>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Non augue feugiat volutpat.
            </p>

            <button className="bg-[#8b0000] text-white px-7 py-3 rounded-full">
              Read More
            </button>
          </div>

          <div className="h-[380px] bg-gray-300 rounded-2xl" />
        </div>
      </section>

      {/* OFFER*/}
      <section className="py-24 bg-gray-50">
        <div className={`${CONTAINER} grid md:grid-cols-2 gap-20 items-center`}>
          <div className="h-[380px] bg-gray-300 rounded-2xl" />

          <div>
            <span className="text-sm font-semibold text-[#8b0000]">
              What We Offer
            </span>

            <h3 className="text-4xl font-bold mt-4 mb-6">
              The Best Medics, Doctors &
              <br /> Physicians
            </h3>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <button className="bg-[#8b0000] text-white px-7 py-3 rounded-full">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/*  WHY CHOOSE US*/}
      <section className="py-28">
        <div className={CONTAINER}>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#8b0000]">
              Who We Are
            </span>
            <h3 className="text-4xl font-bold mt-4">
              Why Choose Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              {[
                "Expert Clinical Support and Services",
                "Advanced Diagnostic Technology",
                "Help at Hand",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8b0000] text-white flex items-center justify-center">
                    ✓
                  </div>
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="h-[380px] bg-gray-300 rounded-2xl" />
          </div>
        </div>
      </section>

      {/*  COMMUNITY  */}
      <section className="py-28 bg-gray-50">
        <div className={`${CONTAINER} text-center`}>
          <span className="text-sm font-semibold text-[#8b0000]">
            Community
          </span>

          <h3 className="text-4xl font-bold mt-4 mb-6">
            Creating Wellness Together
          </h3>
        </div>

        <div className={`${CONTAINER} grid md:grid-cols-2 gap-20 items-center mt-16`}>
          <div className="h-[350px] bg-gray-300 rounded-2xl" />

          <div>
            <h4 className="text-3xl font-bold mb-6">
              Discover Our Collaborations
            </h4>

            <p className="text-gray-600 mb-8">
              Together, we work to enhance health services.
            </p>

            <button className="bg-[#8b0000] text-white px-7 py-3 rounded-full">
              Read More
            </button>
          </div>
        </div>
      </section>

      
      <section className="py-28">
        <div className={`${CONTAINER} grid md:grid-cols-2 gap-20`}>
          <div>
            <h3 className="text-4xl font-bold mb-10">
              We Are Always Health Give
              <br /> Of Best Service
            </h3>

            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-xl px-6 py-4 mb-4"
              >
                <span>Lorem ipsum viverra feugiat?</span>
                <span className="font-bold">+</span>
              </div>
            ))}
          </div>

          <div className="h-[400px] bg-gray-300 rounded-2xl" />
        </div>
      </section>

    </div>
  );
};

export default About;
