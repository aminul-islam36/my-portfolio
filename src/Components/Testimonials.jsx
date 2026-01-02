import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AOS from "aos";
import Title from "../Util/Title";

const testimonials = [
  {
    id: 1,
    name: "Name Nor",
    role: "Company CSS",
    text: "Whether on programming or a project to completion, he is always ready to think and produce better.",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Name Naraine",
    role: "Company CSS",
    text: "Whether on programming or a project to completion, he is always ready to think and produce better.",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Name Name",
    role: "Company CSS",
    text: "Whether on programming or a project to completion, he is always ready to think and produce better.",
    image: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Dev Ops",
    text: "Excellent full-stack capabilities with a great eye for UI design.",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "Jane Doe",
    role: "Lead Engineer",
    text: "Reliable and highly skilled in MERN stack development.",
    image: "https://i.pravatar.cc/150?u=5",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  // This ensures AOS recognizes the new elements when the carousel slides
  useEffect(() => {
    AOS.refresh();
  }, [startIndex]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    let items = [];
    for (let i = 0; i < visibleCards; i++) {
      items.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-24 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header with entrance animation */}
        <div data-aos="fade-down">
          <Title>Testimonials</Title>
          <p className="text-gray-400 italic text-xl max-w-2xl mx-auto mb-20 mt-4 leading-relaxed">
            “What our clients are saying about our work and dedication is truly
            rewarding for us to hear.”
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex p-3 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all z-10"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Cards Container */}
          <div
            key={startIndex}
            className="flex flex-col md:flex-row gap-6 items-center justify-center w-full transition-all duration-500"
          >
            {getVisibleTestimonials().map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                className={`relative w-full md:w-80 p-8 rounded-4xl border transition-all duration-300
                  ${
                    idx === 1
                      ? "bg-gray-800/40 border-blue-400/60 shadow-[0_0_25px_rgba(96,165,250,0.3)] scale-105"
                      : "bg-gray-800/20 border-gray-700 opacity-60 scale-95"
                  }`}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-400 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-left text-gray-300 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>

                {/* Blue Quote Icon */}
                <div className="flex justify-end">
                  <Quote
                    size={28}
                    className="text-blue-500 fill-blue-500 rotate-180"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex p-3 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all z-10"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                startIndex === i ? "w-8 bg-blue-500" : "w-2.5 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
