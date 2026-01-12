import React from "react";
import blog1 from "../assets/blog_1.png";
import blog2 from "../assets/blog_2.png";
import blog3 from "../assets/blog_3.png";

const Blogs = () => {
  const blogs = [
    {
      title: "Lorem ipsum dolor sit amet",
      date: "20 Jan 2022",
      image: blog1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
    },
    {
      title: "Building your API Stack",
      date: "18 Jan 2025",
      image: blog2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
    },
    {
      title: "Building your API Stack",
      date: "18 Jan 2025",
      image: blog3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">

        {/* Newsletter */}
        <div className="bg-[#f8f9fa] rounded-3xl p-12 mb-20">
          <div className="max-w-2xl">
            <h4 className="text-[#cf80a8] font-bold mb-2">Our Blog</h4>
            <h2 className="text-4xl font-bold text-[#363d9d] mb-4">
              Our Success Stories
            </h2>

            <p className="text-gray-600 mb-8">
              Subscribe to learn about new updates, features, and stories from our team.
            </p>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#363d9d]"
              />
              <button className="bg-[#363d9d] text-white px-8 py-3 rounded-full hover:bg-[#2a2f7a] transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              We care about your data in our privacy policy
            </p>
          </div>
        </div>

        {/* Blog list */}
        <h2 className="text-3xl font-bold text-[#363d9d] mb-8">
          Recent Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-60 rounded-2xl overflow-hidden mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <p className="text-[#cf80a8] text-sm font-bold mb-2">
                {blog.date}
              </p>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#363d9d] group-hover:text-[#cf80a8] transition">
                  {blog.title}
                </h3>

                <svg
                  className="w-5 h-5 text-[#363d9d] group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">
                {blog.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
