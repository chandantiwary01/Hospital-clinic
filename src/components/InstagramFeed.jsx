import React from 'react';
import insta1 from '../assets/images/insta-1.png';
import insta2 from '../assets/images/insta-2.png';
import insta3 from '../assets/images/insta-3.png';
import insta4 from '../assets/images/insta-4.png';
import insta5 from '../assets/images/insta-5.png';

const InstagramFeed = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl font-medium text-dark font-sans">Follow @dr_martin on Instagram</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="rounded-[20px] overflow-hidden aspect-square">
            <img src={insta1} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-square">
            <img src={insta2} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-square">
            <img src={insta3} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-square">
            <img src={insta4} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-square">
            <img src={insta5} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
