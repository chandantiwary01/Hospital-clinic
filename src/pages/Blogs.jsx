import React from "react";
import blog from "../assets/blog_imag.png";
import blog1 from "../assets/blog_1.png";
import blog2 from "../assets/blog_2.png";
import blog3 from "../assets/blog_3.png";

const Blogs = () => {
  const blogs = [
    {
      title: "Lorem ipsum dolor sit amet",
      date: "20 Jan 2022",
      image: blog1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.",
    },
    {
      title: "Building your API Stack",
      date: "18 Jan 2025",
      image: blog2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.",
    },
    {
      title: "Building your API Stack",
      date: "18 Jan 2025",
      image: blog3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.",
    },
  ];

  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <div className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] relative overflow-hidden">
        <img
          src={blog}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#73738100] to-[#18181BCC]" />

        <div className="relative z-20 max-w-[1728px] mx-auto h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 text-center">
          <h1 className="text-white font-['Poppins'] font-bold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[52px] mb-4">
            Our Blog
          </h1>

          <p className="text-gray-200 max-w-xl font-['Poppins'] font-medium text-[13px] sm:text-[15px] md:text-[16px] leading-6">
            Explore insights, updates, and success stories from Holisquie Clinic.
            Stay informed with expert knowledge and real patient journeys.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">

        {/* Heading + Button Row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mt-10 mb-12">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-[26px] sm:text-[28px] lg:text-3xl font-bold text-[#000000]">
              Popular Topics
            </h2>

            <div className="flex gap-4 sm:gap-5 font-['Poppins'] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] mt-1">
              <span className="cursor-pointer text-[#000000] hover:text-[#9C0001] transition">
                All
              </span>
              <span className="cursor-pointer text-[#000000] hover:text-[#9C0001] transition">
                New
              </span>
              <span className="cursor-pointer text-[#000000] hover:text-[#9C0001] transition">
                Old
              </span>
            </div>
          </div>

          <button className="flex items-center gap-3 transition hover:bg-[#9C0001] hover:text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold self-start sm:self-auto">
            View All Blogs
            <span className="w-8 h-8 bg-white text-[#9C0001] rounded-full flex items-center justify-center">
              →
            </span>
          </button>
        </div>

        {/* Grid – Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 justify-items-center">
          {blogs.slice(0, 6).map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] shadow-sm hover:shadow-md transition overflow-hidden
                         w-full sm:max-w-[360px] md:max-w-[420px] lg:w-[483.03px]
                         h-auto lg:h-[588px]"
            >
              <div className="overflow-hidden w-full h-[220px] sm:h-[260px] md:h-[300px] lg:w-[484px] lg:h-[381.75px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-sm text-gray-400 font-medium mb-2">
                  {blog.date}
                </h3>

                <h2 className="text-[18px] sm:text-[19px] lg:text-xl font-semibold text-[#1f2937] leading-snug mb-3 hover:text-[#8b0000] transition">
                  {blog.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid – Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-6 justify-items-center">
          {blogs.slice(0, 6).map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] shadow-sm hover:shadow-md transition overflow-hidden
                         w-full sm:max-w-[360px] md:max-w-[420px] lg:w-[483.03px]
                         h-auto lg:h-[588px]"
            >
              <div className="overflow-hidden w-full h-[220px] sm:h-[260px] md:h-[300px] lg:w-[484px] lg:h-[381.75px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-sm text-gray-400 font-medium mb-2">
                  {blog.date}
                </h3>

                <h2 className="text-[18px] sm:text-[19px] lg:text-xl font-semibold text-[#1f2937] leading-snug mb-3 hover:text-[#8b0000] transition">
                  {blog.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
