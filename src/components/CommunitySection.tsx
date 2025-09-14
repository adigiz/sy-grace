"use client";

import Image from "next/image";

const communityItems = [
  {
    title: "Customer Appreciation Day",
    image: "/pict-1.png",
  },
  {
    title: "College Scholarship Program",
    image: "/pict-2.png",
  },
  {
    title: "Church Fundraising Support",
    image: "/pict-3.png",
  },
  {
    title: "Holiday Giveaways",
    image: "/pict-4.png",
  },
  {
    title: "Easter Church Support",
    image: "/pict-5.png",
  },
  {
    title: "Media Recognition",
    image: "/pict-6.png",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FEFEF6]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block border border-gray-200 bg-white text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wide">
              Community
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Giving Back to the Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium">
            Serving our community with heart and dedication
          </p>
        </div>

        {/* Community Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {communityItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-60 lg:h-75 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
