import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Register from '../components/Register';

const Home = () => {
  return (
    <div className="font-sans text-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Blog />
      <InstagramFeed />
      <Newsletter />
      <Footer />
      <Register />
    </div>
  );
};

export default Home;
