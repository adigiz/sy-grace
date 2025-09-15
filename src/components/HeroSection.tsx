"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slider - you can replace these with your actual images
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dsqhuq9cb/image/upload/f_auto,q_auto/v1/samples/cld-sample-video",
      video:
        "https://res.cloudinary.com/dsqhuq9cb/video/upload/f_auto,q_auto/v1/samples/cld-sample-video",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop",
      video: null,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&h=1080&fit=crop",
      video: null,
    },
    {
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      video: null,
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster={slide.image}
              >
                <source src={slide.video} type="video/mp4" />
                <source
                  src={slide.video.replace(".mp4", ".webm")}
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center sm:mt-50">
        {/* Mobile Layout */}
        <div className="flex flex-col h-full md:hidden">
          {/* Main Headline - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Green Label - Directly above title */}
            <div className="mb-6 flex justify-center">
              <span className="inline-block bg-[#057857] border border-[#04A04C] text-white px-3 py-1.5 rounded-full text-xs font-medium">
                SY Grace Caribbean
              </span>
            </div>

            <h1 className="text-4xl font-black text-white leading-tight text-center">
              THE BRONX&apos;S{" "}
              <span className="relative">
                PREMIER
                <svg
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-2 text-red-500"
                  viewBox="0 0 400 20"
                  fill="none"
                >
                  <path
                    d="M10 15 Q200 5 390 15"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <br />
              <span className="relative">WEST INDIAN SUPERMARKET</span>
            </h1>
          </div>

          {/* CTA Button - Full Width at Bottom */}
          <div className="pb-8">
            <button className="w-full group bg-[#F3E849] text-black py-2 font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center justify-between px-3">
              <span>VIEW CATEGORIES</span>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block max-w-8xl">
          {/* Green Label */}
          <div className="mb-6">
            <span className="inline-block bg-[#057857] border border-[#04A04C] text-white px-4 py-2 rounded-full text-sm font-medium">
              SY Grace Caribbean
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            THE BRONX&apos;S{" "}
            <span className="relative">
              PREMIER
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-red-500"
                viewBox="0 0 400 20"
                fill="none"
              >
                <path
                  d="M10 15 Q200 5 390 15"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <br />
            <span className="relative">WEST INDIAN SUPERMARKET</span>
          </h1>

          {/* CTA Button and Slider Indicators */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="flex flex-row justify-between items-center gap-4 w-full">
              {/* CTA Button */}
              <button className="group bg-[#F3E849] text-black pl-6 pr-2 py-2 font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span>VIEW CATEGORIES</span>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div className="flex gap-2 mr-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

