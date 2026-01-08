import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import blog1 from '../assets/images/blog-1.png';
import blog2 from '../assets/images/blog-2.png';
import blog3 from '../assets/images/blog-3.png';

const BlogCard = ({ image, date, title, description, isLarge = false }) => (
  <div className={`group cursor-pointer ${isLarge ? 'col-span-1 lg:col-span-2 row-span-2' : 'col-span-1'}`}>
    <div className="space-y-4 h-full flex flex-col">
      <div className="rounded-[20px] overflow-hidden w-full h-full relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-2">
        <p className="text-secondary font-semibold text-sm">{date}</p>
        <div className="flex justify-between items-start">
          <h3 className={`font-bold text-dark font-sans ${isLarge ? 'text-3xl' : 'text-xl'}`}>{title}</h3>
          <ArrowUpRight className="text-dark group-hover:text-primary transition-colors" />
        </div>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-secondary font-medium text-lg uppercase tracking-wider">Our blog</span>
            <h2 className="text-5xl font-semibold text-dark font-sans">Our Success Stories</h2>
            <p className="text-gray-600 max-w-xl">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="pl-4 pr-32 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary w-80"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-primary text-white px-6 rounded-full font-medium hover:bg-red-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <BlogCard 
            image={blog1}
            date="20 Jan 2022"
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque."
            isLarge={true}
          />
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-semibold text-dark font-sans mb-6">Recent blog posts</h3>
            <BlogCard 
              image={blog2}
              date="18 Jan 2025"
              title="Building your API Stack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
            />
            <BlogCard 
              image={blog3}
              date="18 Jan 2025"
              title="Building your API Stack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
