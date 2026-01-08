import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import testimonial1 from '../assets/images/testimonial-1.png';
import testimonial2 from '../assets/images/testimonial-2.png';

const TestimonialCard = ({ image, name, date, text }) => (
  <div className="bg-white p-6 rounded-[20px] shadow-lg flex gap-6 items-start">
    <div className="flex-shrink-0">
      <img src={image} alt={name} className="w-24 h-24 rounded-[20px] object-cover" />
    </div>
    <div className="space-y-3">
      <p className="text-gray-600 italic text-sm">"{text}"</p>
      <div>
        <h4 className="font-bold text-dark text-lg">{name}</h4>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={16} className="text-secondary fill-secondary" />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-secondary font-medium text-lg uppercase tracking-wider">Testimonial</span>
            <h2 className="text-5xl font-semibold text-dark font-sans">Our satisfied customers love us!</h2>
            <p className="text-secondary font-semibold text-xl">1000+ Happy Customers</p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 rounded-full bg-primary text-white hover:bg-red-800 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <button className="p-3 rounded-full bg-primary text-white hover:bg-red-800 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            image={testimonial1}
            name="Jenny Wilson"
            date="07/02/2025"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque."
          />
          <TestimonialCard 
            image={testimonial2}
            name="Devon Lane"
            date="12/01/2025"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
