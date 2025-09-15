"use client";

import { useState } from "react";
import Image from "next/image";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email subscribed:", email);
    setEmail("");
  };

  return (
    <section className="bg-white">
      <div className="w-full mx-auto h-full">
        <div className="grid lg:grid-cols-5 items-stretch">
          {/* Left Side - Image */}
          <div className="lg:col-span-2 relative h-64 sm:h-80 lg:h-auto">
            <Image
              src="/subscribe.png"
              alt="S.Y Grace Market Interior"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Subscription Form */}
          <div className="lg:col-span-3 bg-[#F3E849] p-6 sm:p-8 lg:p-12 flex items-center w-full">
            <div className="space-y-6 sm:space-y-8 w-full">
              {/* Headline */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  The Freshness you can Trust
                  <br />
                  <span className="relative">
                    only at S.Y Grace Market
                    {/* Red underline */}
                    <svg
                      className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-red-500"
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
                </h2>
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="relative flex-1 w-full">
                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 sm:pl-12 pr-24 sm:pr-32 py-3 sm:py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>

                    {/* Subscribe Button - Inside the input */}
                    <button
                      type="submit"
                      className="absolute right-2 sm:right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                    >
                      Subscribe
                    </button>
                  </div>

                  {/* Additional Information */}
                  <div className="text-black text-sm sm:text-base font-medium text-center sm:text-left">
                    More information for discounts,
                    <br />
                    promos, events, etc!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
