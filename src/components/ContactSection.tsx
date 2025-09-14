"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    subject: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Section - Contact Information and Map */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Contact Tag */}
            <div>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wide">
                Contact
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Let&apos;s talk, we&apos;re here for you
              </h2>
            </div>

            {/* Contact Details and Map Side by Side */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Phone</div>
                    <a
                      href="tel:+17186715544"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                    >
                      (718) 671-5544
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Address
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      4008 Boston Rd, Shopwell Plaza
                      <br />
                      Bronx, NY 10475
                    </div>
                  </div>
                </div>

                {/* Store Hours */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Store Hours
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      Open everyday from 8am - 9pm
                      <br />
                      (except Sunday close 8pm)
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8234567890123!2d-73.8472145!3d40.8621234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f0123456789a%3A0x1234567890abcdef!2s4008%20Boston%20Rd%2C%20Bronx%2C%20NY%2010475!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SY Grace Market Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                No worries, get reply within 24h
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white text-sm sm:text-base"
                    placeholder="Subject: e.g Inquiry, become Vendor, Wholesale, other."
                  />
                </div>

                {/* Email/Phone */}
                <div>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white text-sm sm:text-base"
                    placeholder="Your Email/Phone"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none bg-white text-sm sm:text-base"
                    placeholder="How can we help you"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  Send Message
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      transform="rotate(45 12 12)"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
