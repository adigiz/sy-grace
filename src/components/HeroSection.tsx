"use client";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Cloudinary Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://res.cloudinary.com/dsqhuq9cb/image/upload/f_auto,q_auto/v1/samples/cld-sample-video"
        >
          <source
            src="https://res.cloudinary.com/dsqhuq9cb/video/upload/f_auto,q_auto/v1/samples/cld-sample-video"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/dsqhuq9cb/video/upload/f_auto,q_auto/v1/samples/cld-sample-video.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

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
        <div className="hidden md:block max-w-4xl">
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

          {/* CTA Button */}
          <div className="mt-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
