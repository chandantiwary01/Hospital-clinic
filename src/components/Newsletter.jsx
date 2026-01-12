import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light rounded-[30px] p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-50 blur-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-dark font-sans relative z-10">
            Sign up for offers and save 15%
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto relative z-10">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque."
          </p>
          
          <form className="max-w-md mx-auto space-y-4 relative z-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter your Name" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary shadow-sm"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary shadow-sm"
              />
            </div>
            <button className="w-full bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all flex items-center justify-center gap-2 shadow-lg">
              Submit
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-primary" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
