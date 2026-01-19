import React from "react";
import { Link } from "react-router-dom";
import whatsappIcon from "../assets/whatsapp_1.png";
import instaIcon from "../assets/insta_1.png";
import fbIcon from "../assets/fb_1.png";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import locationIcon from "../assets/location.png";
import LogoH from "../assets/Logo_H.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#4b0000] to-[#2a0000] text-white overflow-hidden">
      {/* Decorative circles –  size */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#7a0000] rounded-full opacity-40 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#7a0000] rounded-full opacity-30 -translate-x-1/2 translate-y-1/2" />

      {/*  container */}
      <div className="relative max-w-[1728px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-16 sm:pt-20 pb-10">
        {/* Logo & description */}
        <div className="text-center mx-auto">
          <div className="flex justify-center mb-6">
            <Link to="/">
              {/*  logo size */}
              <img
                src={LogoH}
                alt="Hospital Logo"
                className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-auto"
              />
            </Link>
          </div>

          {/* Responsive  */}
          <p className="mx-auto max-w-4xl text-white/80 text-sm sm:text-base leading-relaxed">
            At our hospital, your health and comfort come first. We are dedicated
            to providing safe, reliable, and compassionate care for every
            patient. Our team is here to support you at every step of your
            healing journey.
          </p>
        </div>

        {/* Contact  column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 mt-16">
          {[
            { icon: phoneIcon, label: "Tel", value: "7047-120-658" },
            { icon: mailIcon, label: "Mail", value: "chandantiwary884@gmail.com" },
            { icon: locationIcon, label: "Address", value: "706 road Kolkata, CT 713304" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:justify-start gap-5"
            >
              <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center">
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
              </div>

              <div>
                <p className="font-poppins font-semibold text-xl sm:text-2xl">
                  {item.label}
                </p>
                <p className="font-poppins font-medium text-base sm:text-lg text-white/80">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/30 my-16" />

        {/* Footer links  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80 text-base">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl mb-4">
              Treatments
            </h3>
            <ul className="space-y-2 text-white/80 text-base">
              <li>Skin Care</li>
              <li>Hair Care</li>
              <li>Child Care</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl mb-4">
              Working Hours
            </h3>
            <ul className="space-y-2 text-white/80 text-base">
              <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Map  */}
          <div className="w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=mumbai&z=11&output=embed"
              className="w-full h-full border-none"
            />
          </div>
        </div>

        {/* Bottom bar  */}
        <div className="border-t border-white/30 mt-16 pt-6 flex flex-col md:flex-row gap-6 justify-between items-center text-sm text-white/70">
          <p>Privacy Policy · Sitemap · Terms of Use</p>
          <p>© 2025 Hospital. Designed & Developed by WASS</p>

          {/* Social icons  */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <img src={whatsappIcon} alt="Whatsapp" className="w-5" />
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <img src={fbIcon} alt="Facebook" className="w-5" />
            </div>
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <img src={instaIcon} alt="Instagram" className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
