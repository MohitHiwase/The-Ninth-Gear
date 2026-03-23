import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white font-newsreader">
          ObsidianOS
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-[#82ef5c] font-semibold text-sm tracking-wide transition-colors duration-300"
            href="#"
          >
            Product
          </a>
          <a
            className="text-gray-400 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300"
            href="#"
          >
            Solutions
          </a>
          <a
            className="text-gray-400 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-gray-400 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300"
            href="#"
          >
            About
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden lg:block text-sm font-medium text-white hover:text-primary transition-colors">
            Sign In
          </button>
          <button className="signature-glow px-6 py-2.5 rounded-full text-on-primary font-semibold text-sm active:scale-95 duration-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
