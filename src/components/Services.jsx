import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import hairFall from '../assets/images/service-hair-fall.png';
import pcos from '../assets/images/service-pcos.png';
import thyroid from '../assets/images/service-thyroid.png';
import migraine from '../assets/images/service-migraine.png';
import psoriasis from '../assets/images/service-psoriasis.png';

const ServiceCard = ({ title, image, isLarge = false }) => (
  <div className={`group relative rounded-[20px] overflow-hidden ${isLarge ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1'}`}>
    <div className="relative h-64 w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
      <h3 className="text-white text-2xl font-bold font-sans max-w-[70%]">{title}</h3>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        ))}
      </div>
    </div>
    {isLarge && (
      <div className="absolute top-6 right-6 max-w-xs text-white/90 text-sm hidden lg:block">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
      </div>
    )}
  </div>
);

const Services = () => {
  return (
    <section id="treatments" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-medium text-lg uppercase tracking-wider">Services</span>
          <h2 className="text-5xl font-semibold text-dark font-sans">Our Treatments</h2>
          
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-secondary text-white px-8 py-3 rounded-full font-semibold">Show All</button>
            <button className="bg-white text-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100">Skin Problems</button>
            <button className="bg-white text-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100">Hair Problems</button>
            <button className="bg-white text-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100">Homeopathy</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Hair Fall Treatment" image={hairFall} />
          <ServiceCard title="PCOS Treatment" image={pcos} />
          <ServiceCard title="Thyroid Treatment" image={thyroid} />
          <ServiceCard title="Migraine Treatment" image={migraine} />
          <ServiceCard title="Psoriasis Treatment" image={psoriasis} />
          
          {/* Last card is special/large or just another card? Design shows "Skin Treatment" as large card-2 */}
          <div className="group relative rounded-[20px] overflow-hidden bg-primary col-span-1 flex flex-col justify-between p-6">
             <div className="space-y-4">
                <h3 className="text-white text-3xl font-bold font-sans">Skin Treatment</h3>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full w-fit">
                  <ArrowUpRight size={24} className="text-white" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
                </p>
             </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all flex items-center gap-2 shadow-lg">
            Show all services
            <div className="bg-white rounded-full p-1">
              <ArrowRight size={16} className="text-primary" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
