import React from 'react';
import { ArrowRight } from 'lucide-react';
import aboutMain from '../assets/images/about-main.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-gray rounded-[20px] transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-blue-light rounded-[20px] transform -translate-x-4 -translate-y-4"></div>
            <img src={aboutMain} alt="About Us" className="relative z-10 w-full h-auto rounded-[20px] object-cover shadow-xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-secondary text-white rounded-full text-sm font-medium">
              About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-dark font-sans">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            
            <div className="bg-dark text-white p-8 rounded-[50px] rounded-tl-none relative">
              <p className="text-lg leading-relaxed mb-8">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus."
              </p>
              <div className="w-full h-px bg-gray-600 mb-8"></div>
              
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold flex items-center gap-3 hover:bg-red-800 transition-colors">
                About us
                <div className="bg-white rounded-full p-1">
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
