"use client";

import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Zachary Zawila",
    rating: 4.5,
    text: "Fantastic Caribbean supermarket for fish, produce, and groceries. One of the largest selections of tea I've ever seen!",
    date: "A week ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Stephanie Pamphile",
    rating: 4.5,
    text: "Great shopping experience, great price, excellent produce, excellent products, very busy, great staff!",
    date: "A month ago",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Debra Wright",
    rating: 4.5,
    text: "Great Caribbean products you can't find elsewhere. Fresh produce and Island seasoning product from the Caribbean Islands.",
    date: "2 days ago",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    rating: 4.5,
    text: "Best Caribbean market in the Bronx! Fresh produce, authentic flavors, and friendly staff. I've been coming here for over 10 years.",
    date: "2 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "James Thompson",
    rating: 4.5,
    text: "Amazing selection of Caribbean foods. The fresh fish is always top quality and the staff knows their products well.",
    date: "1 month ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Patricia Williams",
    rating: 4.5,
    text: "Love this place! They have everything I need for authentic Caribbean cooking. The breadfruit and callaloo are always fresh.",
    date: "3 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "David Brown",
    rating: 4.5,
    text: "Excellent customer service and the best Caribbean products in the area. The frozen section has great variety too.",
    date: "1 week ago",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 8,
    name: "Lisa Johnson",
    rating: 4.5,
    text: "This market is a gem! Fresh ingredients, reasonable prices, and they always have what I'm looking for. Highly recommended!",
    date: "2 months ago",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
  },
];

export default function ReviewsSection() {
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto py-6 sm:py-8 bg-[#F5FAF8] rounded-2xl">
        {/* Section Header with Google Rating */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8 gap-6 lg:gap-0">
          <div className="text-left">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block border border-gray-200 bg-white text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wide">
                Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hear From Our Best Customers
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg relative overflow-hidden w-full lg:w-auto">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
                  Google Rating
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
                    4.4
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < 4
                            ? "text-orange-500"
                            : i === 4
                            ? "text-orange-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {i === 4 ? (
                          <defs>
                            <linearGradient
                              id="partialStar"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="40%" stopColor="#F59E0B" />
                              <stop offset="40%" stopColor="#D1D5DB" />
                            </linearGradient>
                          </defs>
                        ) : null}
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          fill={i === 4 ? "url(#partialStar)" : "currentColor"}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600">886 Reviews</div>
              </div>
            </div>

            {/* Green line at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ backgroundColor: "#34A853" }}
            ></div>
          </div>
        </div>

        {/* Infinite Scrolling Reviews */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row - Scrolling Right */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right">
              {duplicatedReviews.map((review, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4"
                >
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg h-40 sm:h-48">
                    <div className="flex items-center gap-1 mb-2 sm:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(review.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs sm:text-sm text-gray-500 ml-2">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={32}
                        height={32}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-gray-900 text-xs sm:text-sm">
                        {review.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right-reverse">
              {duplicatedReviews
                .slice()
                .reverse()
                .map((review, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4"
                  >
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg h-40 sm:h-48">
                      <div className="flex items-center gap-1 mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(review.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs sm:text-sm text-gray-500 ml-2">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                        {review.text}
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">
                          {review.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
