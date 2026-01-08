import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import mapImage from '../assets/images/footer-map.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Intro */}
          <div>
            <div className="flex items-center gap-4 mb-6">
               {/* Logo or Title if needed */}
            </div>
            <p className="text-gray-300 mb-6 font-display leading-relaxed">
              We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... Read More
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary p-2 rounded-full">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-semibold">Tel</p>
                  <p className="text-gray-300">310-437-2766</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary p-2 rounded-full">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">706 road Mumbai, CT 012778</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary p-2 rounded-full">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-semibold">Mail</p>
                  <p className="text-gray-300">user@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-sans">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#treatments" className="text-gray-300 hover:text-white">Treatments</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-sans">Treatments</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Hair fall</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">PCOS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Thyroid</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Migraine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Psoriasis</a></li>
            </ul>
          </div>

          {/* Column 4: Working Hours & Map */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-sans">Working Hours</h3>
            <ul className="space-y-2 mb-6 text-gray-300">
              <li>Monday 09:00 – 17:00</li>
              <li>Tuesday 09:00 – 17:00</li>
              <li>Wednesday 09:00 – 17:00</li>
              <li>Thursday 09:00 – 17:00</li>
              <li>Friday 09:00 – 17:00</li>
              <li>Sat - Sunday - Closed</li>
            </ul>
            <div className="rounded-xl overflow-hidden h-32 w-full">
              <img src={mapImage} alt="Location Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
          <p className="text-sm text-gray-300 text-center md:text-right">
            © 2025 Holisique, All Rights Reserved & Design and Developed by WASS
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-gray-200"><Phone size={16} /></a>
            <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-gray-200"><Facebook size={16} /></a>
            <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-gray-200"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
