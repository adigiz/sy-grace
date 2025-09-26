"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      {/* Mobile Layout */}
      <section className="bg-white md:hidden">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          {/* Top Section - White Background */}
          <div className="bg-white shadow-none lg:shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-12">
              {/* About us tag */}
              <div className="mb-6">
                <span className="inline-block bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  About us
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Bringing the Taste of the Caribbean Home
              </h2>

              <div className="mb-8">
                <div className="inline-flex items-center bg-[#FEFEF6] text-black px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg text-[#057857]">
                    EST. 1994
                  </span>
                </div>
                <span className="ml-2 text-sm">
                  or <strong>over 30+ YEARS</strong>
                </span>
              </div>

              {/* Description text */}
              <div className="text-gray-600 leading-relaxed text-base sm:text-lg">
                <p>
                  SY Grace Caribbean West Indian Supermarket has been the
                  Northeast&apos;s{" "}
                  <span className="text-red-600 font-semibold">
                    premier destination
                  </span>{" "}
                  for authentic Caribbean foods and culture. We take immense
                  pride in being the largest Caribbean supermarket in the
                  region, serving our vibrant community with the freshest
                  seafood, tropical produce, and traditional West Indian
                  specialties.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section - Video */}
          <div className="bg-gray-100 shadow-2xl overflow-hidden">
            <div className="relative p-0 sm:p-8 lg:p-12">
              <div className="aspect-video w-full relative">
                <iframe
                  src="https://www.youtube.com/embed/Vu1q0bY1FiE"
                  title="SY Grace Market Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Section - Yellow Background */}
          <div className="bg-[#F3E849] shadow-none lg:shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              {/* Salad icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-full flex items-center justify-center">
                  <Image
                    src="/salad.svg"
                    alt="Salad icon"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
              </div>

              {/* Description text */}
              <p className="text-black text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-4xl mx-auto">
                We source directly from Caribbean suppliers and trusted
                importers to bring the Bronx fresh seafood, tropical produce,
                and authentic island favorites you can trust.
              </p>

              {/* Explore Products button */}
              <button className="bg-white text-black px-8 py-3 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-200">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout - Original Design */}
      <section className="hidden md:block left-0 right-0 z-40 pt-20 pb-20 bg-[#FEFEF6] min-h-[85vh]">
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8">
          <div className="absolute -top-40 mr-8">
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
              <div className="flex gap-0">
                <div className="p-6 flex-1">
                  <div className="mb-8">
                    <span className="inline-block bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      About us
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    Bringing the Taste of the Caribbean Home
                  </h2>

                  <div className="mb-8">
                    <div className="inline-flex items-center bg-green-100 text-black px-4 py-2 rounded-lg">
                      <span className="font-bold text-lg text-[#057857]">
                        EST. 1994
                      </span>
                    </div>
                    <span className="ml-2 text-sm">
                      or <strong>over 30+ YEARS</strong>
                    </span>
                  </div>

                  {/* Description text */}
                  <div className="space-y-6 text-md text-gray-600 leading-relaxed">
                    <p>
                      SY Grace Caribbean West Indian Supermarket has been the
                      Northeast&apos;s{" "}
                      <span className="text-red-600">premier destination</span>{" "}
                      for authentic Caribbean foods and culture. We take immense
                      pride in being the largest Caribbean supermarket in the
                      region, serving our vibrant community with the freshest
                      seafood, tropical produce, and traditional West Indian
                      specialties.
                    </p>
                  </div>
                </div>

                {/* Right Side - Video */}
                <div className="relative bg-gray-100 p-8 flex-[2]">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/Vu1q0bY1FiE"
                      title="SY Grace Market Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl p-8 flex items-center justify-between bg-[#F3E849] gap-12">
              <div className="flex items-center space-x-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/salad.svg"
                    alt="Salad icon"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-black text-xl font-medium">
                  We source directly from Caribbean suppliers and trusted
                  importers to bring the Bronx fresh seafood, tropical produce,
                  and authentic island favorites you can trust.
                </p>
              </div>
              <button className="bg-white text-black px-8 py-3 font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
