import React from "react";
import gallery1 from "../assets/gallery_1.png";
import gallery2 from "../assets/gallery_2.png";
import gallery3 from "../assets/gallery_3.png";
import gallery4 from "../assets/gallery_4.png";
import gallery5 from "../assets/gallery_5.png";

const Gallery = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-[#363d9d] mb-12">
          Follow @dr_martin on Instagram
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center font-bold text-[#363d9d] hover:underline"
          >
            View more on Instagram
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
