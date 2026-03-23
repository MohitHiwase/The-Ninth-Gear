import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 mt-40 bg-[#0e0e0e]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        {/* Brand Column */}
        <div className="col-span-2 space-y-8">
          <div className="text-lg font-bold text-white font-newsreader">
            ObsidianOS
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed">
            Defining the intersection of professional engineering and editorial
            design.
          </p>
        </div>
        {/* Links Column 1 */}
        <div className="space-y-6">
          <h5 className="label-md text-[12px] uppercase tracking-widest text-white"
            style={{ fontFamily: "Inter" }}
          >
            Product
          </h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Analytics
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Security
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Automations
              </a>
            </li>
          </ul>
        </div>
        {/* Links Column 2 */}
        <div className="space-y-6">
          <h5 className="label-md text-[12px] uppercase tracking-widest text-white"
            style={{ fontFamily: "Inter" }}
          >
            Company
          </h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Manifesto
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Newsroom
              </a>
            </li>
          </ul>
        </div>
        {/* Links Column 3 */}
        <div className="space-y-6">
          <h5 className="label-md text-[12px] uppercase tracking-widest text-white"
            style={{ fontFamily: "Inter" }}
          >
            Resources
          </h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Community
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Docs
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Webinars
              </a>
            </li>
          </ul>
        </div>
        {/* Links Column 4 */}
        <div className="space-y-6">
          <h5 className="label-md text-[12px] uppercase tracking-widest text-white"
            style={{ fontFamily: "Inter" }}
          >
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-[#82ef5c] transition-all text-sm" href="#">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 text-sm italic">
          © 2024 ObsidianOS. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a className="text-gray-500 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="text-gray-500 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">code</span>
          </a>
          <a className="text-gray-500 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
