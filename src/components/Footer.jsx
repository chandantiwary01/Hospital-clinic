<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import whatsappIcon from "../assets/whatsapp_1.png";
import instaIcon from "../assets/insta_1.png";
import fbIcon from "../assets/fb_1.png";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import locationIcon from "../assets/location.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#4b0000] to-[#2a0000] text-white overflow-hidden">
      {/* decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7a0000] rounded-full opacity-40 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7a0000] rounded-full opacity-30 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-[1728px] mx-auto px-20 pt-20 pb-10">
        {/* logo & intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">
            Hospital
            <span className="block text-base text-yellow-400 mt-1">
              Homoeopathy Clinic
            </span>
          </h1>

          <p className="mt-6 text-sm text-white/80 leading-relaxed">
            We are a lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* contact info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-28 mt-18">
          {[
            { icon: phoneIcon, label: "Tel", value: "7047-120-658" },
            {
              icon: mailIcon,
              label: "Mail",
              value: "chandantiwary884@gmail.com",
            },
            {
              icon: locationIcon,
              label: "Address",
              value: "706 road Kolkata, CT 713304",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center md:justify-start gap-5"
            >
              <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-white/80">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/30 my-16" />

        {/* footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/treatment">Treatments</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Treatments</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Hair Fall</li>
              <li>PCOS</li>
              <li>Thyroid</li>
              <li>Migraine</li>
              <li>Psoriasis</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Monday – Friday: 09:00 – 17:00</li>
              <li>Saturday – Sunday: Closed</li>
            </ul>
          </div>

          <div className="w-full h-[230px] rounded-2xl overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=mumbai&z=11&output=embed"
              className="w-full h-full border-none"
            />
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/30 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>Privacy Policy · Sitemap · Terms of Use</p>

          <p className="mt-4 md:mt-0">
            © 2025 Hospital. Designed & Developed by WASS
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <img src={whatsappIcon} alt="Whatsapp" />
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <img src={fbIcon} alt="Facebook" />
            </div>
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <img src={instaIcon} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
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
>>>>>>> fab08c46477081520ee47646acea2ab84188be1f
