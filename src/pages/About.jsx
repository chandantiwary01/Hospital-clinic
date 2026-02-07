import React from "react";
import  { useState } from "react";
import { Plus, Minus } from 'lucide-react';

import banner from "../assets/banner_aboutus.png";
import aboutDoc from "../assets/about_doc_img.png";
import aboutDoc1 from "../assets/about_doc1.png";
import aboutDoc2 from "../assets/about_doc2.png";
import aboutDoc3 from "../assets/about_doc3.png";
import aboutDoc4 from "../assets/about_doc4.png";
import aboutDoc5 from "../assets/about_doc5.png";
import aboutDoc6 from "../assets/about_doc6.png";
import aboutDoc7 from "../assets/about_doc7.png";

import icon1 from "../assets/icon_1.png";
import icon2 from "../assets/icon_2.png";
import icon3 from "../assets/icon_3.png";

const CONTAINER = "max-w-[1728px] mx-auto px-6 md:px-12 lg:px-20";

const About = () => {

  // FOR LAST SECTION USE OF USESTATE

  const [openIndex, setOpenIndex] = useState(0); 

  const faqs = [
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer: "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet ."
    },
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer: "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula."
    },
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer: "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula."
    },
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer: "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula."
    }
  ];


  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full h-[400px] md:h-[587px] flex justify-center">
        {/* Background Image */}
        <img src={banner} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gray-300/20" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className={`${CONTAINER} relative z-20 h-full flex items-center`}>
          <div className="max-w-2xl text-white">
             <h1 className="text-3xl md:text-[50px] font-poppins font-bold leading-tight mb-6">Your Health, Our Priority</h1>

            <p className="text-sm md:text-sm leading-relaxed text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum facilisi odio.
            </p>
          </div>
        </div>
      </section>

      {/*  ABOUT US */}
      <section className="relative py-16 md:py-28 bg-white  overflow-hidden">
        {/* ===== RIGHT DECORATIVE IMAGE ===== */}
        <img src={aboutDoc} alt="Doc Illustration" className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 max-w-[300px] xl:max-w-[420px] opacity-40 pointer-events-none" />

        {/* ===== CONTENT ===== */}
        <div className="max-w-[1100px] mx-auto px-4 text-center relative z-10">
          <span className="text-xs md:text-sm font-semibold uppercase text-[#8b0000] tracking-wide">About Us</span>

           <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">Healing Experiences – For Everyone, <br className="hidden md:block" /> All The Time</h2>

          {/* Red Divider */}
          <div className="w-[48px] h-[2px] bg-[#9C0001] mx-auto mt-6 mb-8" />

          <p className="max-w-[900px] mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus.” Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum,
            facilisi odio pellentesque bibendum viverra tempus.
          </p>

          <div className="mt-12">
            <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#700000] transition">
              Read More
              <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
         <div className={`${CONTAINER} grid md:grid-cols-2 gap-10 md:gap-20 items-center`}>
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3"><div className="w-[48px] h-[2px] bg-[#9C0001]" /><span className="text-sm font-semibold uppercase text-[#8b0000]">What We Do</span></div>

           <h3 className="text-2xl md:text-4xl font-bold mt-4 mb-6">We are always Health Give <br /> of best service</h3>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue
              feugiat volutpat.
            </p>

             <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full font-medium text-sm md:text-base">Read More <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">↗</span></button>
          </div>

          <div className="w-full max-w-[666px] h-[380px] sm:h-[420px] md:h-[528px] rounded-[20px] overflow-hidden">
            <img
              src={aboutDoc1}
              alt="Doctor consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OFFER*/}
      <section className="py-16 md:py-24  bg-gray-50">
         <div className={`${CONTAINER} grid md:grid-cols-2 gap-10 md:gap-20 items-center`}>
          <div className="w-full h-[300px] md:h-[528px] rounded-[20px] overflow-hidden">
            <img src={aboutDoc2} alt="Medical" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
             <div className="flex items-center gap-3"><div className="w-[48px] h-[2px] bg-[#9C0001]" /><span className="text-sm font-semibold text-[#8b0000]">What We Offer</span></div>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 mb-6">The Best Medics, Doctors & <br /> Physicians</h3>
            <p className="text-gray-600 mb-8 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full font-medium">Read More <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">↗</span></button>
          </div>
        </div>
      </section>

      {/*  WHY CHOOSE US*/}

      <section className="py-28">
        <div className={CONTAINER}>
          {/* Centered Heading */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-[48px] h-[2px] bg-[#9C0001]" />
              <span className="text-sm font-semibold text-[#8b0000]">
                Who We Are
              </span>
            </div>

            <h3 className="text-4xl font-bold text-gray-900">Why Choose Us</h3>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Left icon Points */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-[92px] h-[92px] rounded-[54px] bg-[#8b0000] flex items-center justify-center">
                  <img
                    src={icon1}
                    alt="icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Use Of Flex upper niche */}
                <div className="flex flex-col">
                <p className="font-semibold text-gray-800">
                  Expert Clinical Support and Services
                </p>
                <h3 className="text-gray-600 leading-relaxed">
                    Cutting-edge tools and precision testing
                    <br />
                    designed to deliver accurate and reliable results.
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[92px] h-[92px] rounded-[54px] bg-[#8b0000] flex items-center justify-center">
                  <img
                    src={icon2}
                    alt="icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">
                    Advanced Diagnostic Technology
                  </p>
                  <h3 className="text-gray-600 leading-relaxed">
                    Cutting-edge tools and precision testing
                    <br />
                    designed to deliver accurate and reliable results.
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[92px] h-[92px] rounded-[54px] bg-[#8b0000] flex items-center justify-center">
                  <img
                    src={icon3}
                    alt="icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="flex flex-col">
                <p className="font-semibold text-gray-800">Help at Hand</p>
                <h3 className="text-gray-600 leading-relaxed">
                    Cutting-edge tools and precision testing
                    <br />
                    designed to deliver accurate and reliable results.
                  </h3>
                </div>

                {/*flex end */}


              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-[666px] h-[380px] sm:h-[420px] md:h-[528px] rounded-[20px] overflow-hidden">
                <img
                  src={aboutDoc3}
                  alt="Medical team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  COMMUNITY  */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className={`${CONTAINER} text-center`}>
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-[48px] h-[2px] bg-[#9C0001]" />
            <span className="text-sm font-semibold text-[#440001]">
              Community
            </span>
          </div>

          <h3 className="text-4xl font-bold mt-4 mb-6">
            Creating Wellness Together
          </h3>
        </div>

        <div
          className={`${CONTAINER} grid md:grid-cols-2 gap-20 items-start mt-16`}
        >
          <div className="w-full max-w-[736px] h-[419px] sm:h-[420px] md:h-[528px] rounded-[20px] overflow-hidden">
                <img
                  src={aboutDoc4}
                  alt="Medical team"
                  className="w-full h-full object-cover"
                />
              </div>

          <div>
            <h4 className="text-3xl font-bold mb-6">
              Discover Our Collaborations
            </h4>

            <p className="text-gray-600 mb-8">
              Together, we work to enhance health services.
            </p>

            <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#700000] transition">
              Read More
              <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* about Doc 5 START*/}

       <section className="py-24">
        <div className={`${CONTAINER} grid md:grid-cols-2 gap-20 items-start`}>
          <div>
           

            <h3 className="text-4xl font-bold mt-4 mb-6">
             Explore our initiatives
            </h3>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue
              feugiat volutpat.
            </p>

            <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#700000] transition">
              Read More
              <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>

          <div className="w-full max-w-[666px] h-[380px] sm:h-[420px] md:h-[528px] rounded-[20px] overflow-hidden">
            <img
              src={aboutDoc5}
              alt="Doctor consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Doc_6 START*/}

      <section className="py-28 bg-gray-50">
        <div className={`${CONTAINER} text-center`}>
          <div className="flex items-center justify-center gap-6 mb-4">
        </div>
        </div>

        <div
          className={`${CONTAINER} grid md:grid-cols-2 gap-20 items-start mt-16`}
        >
          <div className="w-full max-w-[736px] h-[419px] sm:h-[420px] md:h-[528px] rounded-[20px] overflow-hidden">
                <img
                  src={aboutDoc6}
                  alt="Medical team"
                  className="w-full h-full object-cover"
                />
              </div>

          <div>
            <h4 className="text-3xl font-bold mb-6">
             Community Support Center
            </h4>

            <p className="text-gray-600 mb-8">
              Together, we work to enhance health services.
            </p>

            <button className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#700000] transition">
              Read More
              <span className="w-7 h-7 bg-white text-[#8b0000] rounded-full flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>
        </div>
      </section>

      

<section className="py-28 bg-white mr-60">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side Content */}
        <div>
          {/* Subheading with Red Line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#9C0001]" />
            <span className="text-lg font-bold text-gray-800">Faqs</span>
          </div>

          <h2 className="text-[42px] leading-tight font-bold text-gray-900 mb-10">
            We Are Always Health Give <br /> Of Best Service
          </h2>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
                      isOpen ? 'bg-[#9C0001] text-white' : 'bg-white text-gray-900'
                    }`}
                  >
                    <span className="font-semibold text-[15px]">{faq.question}</span>
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full ${isOpen ? 'text-white' : 'text-[#9C0001]'}`}>
                      {isOpen ? (
                        <div className="border-2 border-white rounded-full p-0.5"><Minus size={14} strokeWidth={4} /></div>
                      ) : (
                        <div className="border-2 border-[#9C0001] rounded-full p-0.5"><Plus size={14} strokeWidth={4} /></div>
                      )}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[30px] overflow-hidden shadow-2xl">
            <img
              src={aboutDoc7} 
              alt="Medical Professional"
              className="w-full h-full object-cover"
            />
          </div>

        

      </div>
    </section>
</div>
      
  );
};

export default About;
