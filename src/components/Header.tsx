"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Side - Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SY Grace Caribbean Market"
                  width={48}
                  height={48}
                  className="object-contain rounded-full"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-8 lg:ml-12">
              <a
                href="#home"
                onClick={() => setActiveLink("home")}
                className={`transition-colors duration-200 font-medium ${
                  activeLink === "home"
                    ? isScrolled
                      ? "text-gray-900 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setActiveLink("about")}
                className={`transition-colors duration-200 font-medium ${
                  activeLink === "about"
                    ? isScrolled
                      ? "text-gray-900 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                About Us
              </a>
              <a
                href="#categories"
                onClick={() => setActiveLink("categories")}
                className={`transition-colors duration-200 font-medium ${
                  activeLink === "categories"
                    ? isScrolled
                      ? "text-gray-900 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Categories
              </a>
              <a
                href="#community"
                onClick={() => setActiveLink("community")}
                className={`transition-colors duration-200 font-medium ${
                  activeLink === "community"
                    ? isScrolled
                      ? "text-gray-900 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Community
              </a>
              <a
                href="#reviews"
                onClick={() => setActiveLink("reviews")}
                className={`transition-colors duration-200 font-medium ${
                  activeLink === "reviews"
                    ? isScrolled
                      ? "text-gray-900 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Review
              </a>
            </nav>
          </div>

          {/* Right Side - CTA Button and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-white border border-gray-300 text-black px-4 lg:px-6 py-2 lg:py-3 font-medium text-xs lg:text-sm rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
              }`}
            >
              <svg
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div
              className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-400 border-2 border-green-600">
                    <Image
                      src="/logo.png"
                      alt="SY Grace Caribbean Market"
                      width={32}
                      height={32}
                      className="object-contain rounded-full"
                    />
                  </div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">
                    S&Y GRACE
                    <br />
                    <span className="text-green-600">
                      Caribbean Supermarket
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <div className="space-y-2">
                  <a
                    href="#home"
                    className={`block text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-200 ${
                      activeLink === "home"
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveLink("home");
                      setIsMenuOpen(false);
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className={`block text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-200 ${
                      activeLink === "about"
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveLink("about");
                      setIsMenuOpen(false);
                    }}
                  >
                    About Us
                  </a>
                  <a
                    href="#categories"
                    className={`block text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-200 ${
                      activeLink === "categories"
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveLink("categories");
                      setIsMenuOpen(false);
                    }}
                  >
                    Categories
                  </a>
                  <a
                    href="#community"
                    className={`block text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-200 ${
                      activeLink === "community"
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveLink("community");
                      setIsMenuOpen(false);
                    }}
                  >
                    Community
                  </a>
                  <a
                    href="#reviews"
                    className={`block text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-200 ${
                      activeLink === "reviews"
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveLink("reviews");
                      setIsMenuOpen(false);
                    }}
                  >
                    Review
                  </a>
                </div>

                {/* Contact Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
                    Contact
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

