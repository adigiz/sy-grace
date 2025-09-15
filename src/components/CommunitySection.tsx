"use client";

import Image from "next/image";

const communityItems = [
  {
    title: "Customer Appreciation Day",
    image: "/pict-1.png",
    description:
      "Annual celebration thanking our loyal customers with special deals and giveaways. We host this event every year to show our gratitude to the community that has supported us since 1996.",
  },
  {
    title: "College Scholarship Program",
    image: "/pict-2.png",
    description:
      "Supporting local students with educational opportunities and financial assistance. We believe in investing in our community's future through education.",
  },
  {
    title: "Church Fundraising Support",
    image: "/pict-3.png",
    description:
      "Donated Tastee cheese to help raise funds for church chair lift for elders. We continue to support this church with annual Easter donations for their community programs.",
  },
  {
    title: "Holiday Giveaways",
    image: "/pict-4.png",
    description:
      "Free cases of Cranwata (Jamaican drink) for customers during the holidays. We love spreading joy and authentic Caribbean flavors during the festive season.",
  },
  {
    title: "Easter Church Support",
    image: "/pict-5.png",
    description:
      "Annual Easter donations to support church fundraisers and community programs. This tradition started with the Tastee cheese donation and continues every year.",
  },
  {
    title: "Media Recognition",
    image: "/pict-6.png",
    description:
      "Featured in Jamaican Gleaner and South Florida Caribbean News for community service. Our commitment to the community has been recognized by major Caribbean media outlets.",
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

        {/* Community Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto">
          {communityItems.map((item, index) => (
            <div
              key={index}
              className="flip-card group cursor-pointer"
              style={{
                height: "400px",
                perspective: "1000px",
                position: "relative",
              }}
            >
              <div
                className="flip-card-inner transition-transform duration-300 ease-in-out group-hover:rotate-y-180"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card */}
                <div
                  className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200"
                  style={{
                    backfaceVisibility: "hidden",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0 tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="flip-card-back absolute w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 flex flex-col justify-center p-4 sm:p-6"
                  style={{
                    backfaceVisibility: "hidden",
                    backgroundColor: "#f9fafb",
                    color: "#374151",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
