import React from 'react';
import whyChoose from '../assets/images/why-choose.png';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <img src={whyChoose} alt="Why Choose Us" className="w-full h-auto rounded-[20px] object-cover shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-gray-600 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-secondary font-medium text-lg uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-5xl font-semibold text-dark font-sans leading-tight">
                Why choose <br /> Dr. Serena Martin?
              </h2>
              <p className="text-gray-600 text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-lg font-medium">01</span>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
                <h3 className="text-5xl font-bold text-dark">10+</h3>
                <p className="text-gray-600 font-medium">Years Of Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-lg font-medium">02</span>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
                <h3 className="text-5xl font-bold text-dark">50k+</h3>
                <p className="text-gray-600 font-medium">Happy Patients</p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-lg font-medium">03</span>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
                <h3 className="text-5xl font-bold text-dark">1000+</h3>
                <p className="text-gray-600 font-medium">Treatment Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
