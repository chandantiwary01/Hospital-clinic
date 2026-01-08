import React from 'react';
import { ArrowRight, UserCheck, Stethoscope, Activity } from 'lucide-react';

const ProcessStep = ({ number, title, description, icon: Icon }) => (
  <div className="relative flex flex-col items-center text-center space-y-4 group">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10 relative group-hover:bg-primary transition-colors duration-300">
        <Icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-2 border-white">
        {number}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-dark">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </div>
);

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <span className="text-secondary font-medium text-lg uppercase tracking-wider">Our Process</span>
            <h2 className="text-5xl font-semibold text-dark font-sans leading-tight">
              A Step by step guide to our Treatment Process
            </h2>
            
            <div className="bg-dark text-white p-8 rounded-[50px] rounded-tl-none relative mt-8">
              <p className="text-lg leading-relaxed mb-8">
                "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments."
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold flex items-center gap-3 hover:bg-red-800 transition-colors">
                Explore More
                <div className="bg-white rounded-full p-1">
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-200 hidden lg:block -z-0 transform translate-y-4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <ProcessStep 
                number="1" 
                title="Initial Consultation" 
                description="Your journey begins with an in-depth consultation. We'll listen to your concerns."
                icon={UserCheck}
              />
              <ProcessStep 
                number="2" 
                title="Treatment By Doctors" 
                description="Once the plan is finalized, we'll proceed with your treatment. Our expert team will guide you."
                icon={Stethoscope}
              />
              <ProcessStep 
                number="3" 
                title="Follow-Up Care" 
                description="After your treatment, we'll schedule any necessary follow-up appointments."
                icon={Activity}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
