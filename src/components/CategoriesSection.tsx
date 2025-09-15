"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    title: "FRESH CARIBBEAN SEAFOOD",
    description: "Premium Caribbean fish and specialty meats delivered fresh",
    image: "/seafood.png",
    color: "#0E61AE",
    lightColor: "#E6F2FF",
    textColor: "#0E61AE",
    items: [
      "Fresh Cod Fish",
      "Red Snapper & Mackerel",
      "King Fish & Parrot Fish",
      "Goat Meat & Oxtail",
    ],
  },
  {
    title: "CARIBBEAN SEASONINGS & SAUCES",
    description: "Authentic seasonings, sauces, and flavor enhancers",
    image: "/sauces.png",
    color: "#F3E849",
    lightColor: "#FDFCE8",
    textColor: "#000000",
    items: [
      "Jerk Seasoning & Maggi",
      "Grace Hot Sauce",
      "Scotch Bonnet Peppers",
      "Traditional Curry Blends",
    ],
  },
  {
    title: "FROZEN CARIBBEAN",
    description: "Frozen tropical fruits and Caribbean frozen foods",
    image: "/frozen.png",
    color: "#A328B4",
    lightColor: "#F5E6F7",
    textColor: "#A328B4",
    items: [
      "Frozen Breadfruit",
      "Frozen Ackee & Soursop",
      "Caribbean Ice Cream",
      "Frozen Fish & Patties",
    ],
  },
  {
    title: "FRESH TROPICAL PRODUCE",
    description:
      "Authentic Caribbean fruits and vegetables imported fresh weekly",
    image: "/fruits.png",
    color: "#057857",
    lightColor: "#E6F7F0",
    textColor: "#057857",
    items: [
      "Yellow Yam & White Yam",
      "Ghana Yam & Breadfruit",
      "Callaloo & Scotch Bonnet",
      "Soursop & June Plum",
    ],
  },
  {
    title: "CARIBBEAN BAKERY & SNACKS",
    description: "Traditional West Indian baked goods and popular snacks",
    image: "/bakery.png",
    color: "#D13050",
    lightColor: "#FCE8EB",
    textColor: "#D13050",
    items: [
      "Spice Bun & Festival",
      "Bammy & Coco Bread",
      "St Mary Banana Chips",
      "Chippies & Tastee Cheese",
    ],
  },
  {
    title: "CARIBBEAN SPECIALITIES",
    description: "Unique Caribbean ingredients and traditional foods",
    image: "/specialities.png",
    color: "#1AB0BB",
    lightColor: "#E6F9FA",
    textColor: "#1AB0BB",
    items: [
      "Fresh Ackee",
      "Grace & Walkerswood",
      "Caribbean Rice & Beans",
      "Tropical Beverages",
    ],
  },
];

export default function CategoriesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-white border border-gray-300 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wide">
              Product Categories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            West Indie Favorites
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Everything you need is under the roof
          </p>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 min-w-max px-4 sm:px-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 h-[400px] sm:h-[500px] ${
                  expandedCard === index ? `w-80 sm:w-96` : `w-72 sm:w-80`
                }`}
                style={{
                  backgroundColor: category.color,
                  color:
                    category.title === "CARIBBEAN SEASONINGS & SAUCES"
                      ? "black"
                      : expandedCard === index
                      ? category.textColor
                      : "white",
                }}
                onClick={() => toggleCard(index)}
              >
                {/* Card Content */}
                <div className={`h-full flex flex-col`}>
                  {/* Title */}
                  <h3
                    className={
                      `text-lg sm:text-xl lg:text-2xl font-bold mb-4 leading-tight p-6 sm:p-8` +
                      (expandedCard === index ? " p-6 sm:p-8" : " p-0")
                    }
                    style={{
                      color:
                        category.title === "CARIBBEAN SEASONINGS & SAUCES"
                          ? "black"
                          : "white",
                    }}
                  >
                    {category.title}
                  </h3>

                  {/* Expanded Content - Horizontal Layout */}
                  {expandedCard === index && (
                    <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 relative px-6 sm:px-8">
                      {/* Left Side - Text Content */}
                      <div className="flex-1">
                        {/* Description */}
                        <p
                          className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed"
                          style={{
                            color:
                              category.title === "CARIBBEAN SEASONINGS & SAUCES"
                                ? "black"
                                : "white",
                          }}
                        >
                          {category.description}
                        </p>

                        {/* Items List */}
                        <div className="space-y-2 sm:space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center text-xs sm:text-sm"
                            >
                              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0">
                                <svg
                                  className="w-2 h-2 sm:w-3 sm:h-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span
                                className="font-medium"
                                style={{
                                  color:
                                    category.title ===
                                    "CARIBBEAN SEASONINGS & SAUCES"
                                      ? "black"
                                      : "white",
                                }}
                              >
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Image positioned at bottom right */}
                      <div className="absolute bottom-0 right-0 w-32 h-24 sm:w-48 sm:h-32">
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={192}
                          height={128}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  {/* Collapsed State - Image at Bottom without padding */}
                  {expandedCard !== index && (
                    <div className="mt-auto">
                      <div className="relative h-48 w-full">
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={320}
                          height={192}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
