import React from 'react';
import { ArrowRight } from 'lucide-react';
import bannerMain from '../assets/images/banner-main.png';
import bannerShape1 from '../assets/images/banner-shape-1.png';
import bannerShape2 from '../assets/images/banner-shape-2.png';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight font-sans">
              Homeopathy Clinic Center in Mumbai
            </h2>
            <h1 className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans tracking-wider" style={{ WebkitTextStroke: '1px #fff' }}>
              HOLISIQUE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-light text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg">
                Get Appointment
                <div className="bg-primary rounded-full p-1">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <img src={bannerMain} alt="Homeopathy Treatment" className="w-full h-auto object-cover rounded-3xl" />
            </div>
            
            {/* Decorative Shapes */}
            <img src={bannerShape1} alt="" className="absolute -top-10 -right-10 w-24 h-24 z-0 animate-pulse" />
            <img src={bannerShape2} alt="" className="absolute -bottom-10 -left-10 w-full h-full object-contain z-[-1] opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
