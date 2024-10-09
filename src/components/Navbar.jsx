import { useState } from "react";
import MU from "../assets/images/mu.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1400px] h-[67px] mx-auto px-4">
      <div className="flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={MU} className="h-[67px] w-[67px] rounded-full" alt="" />
          <a href="/" className="ml-4 text-[48px] text-gray-800">
            <span className="font-bold">M</span>umair
          </a>
        </div>

        {/* Links Section for Larger Screens */}
        <div className={`hidden md:flex items-center`}>
          <a
            href="/"
            className="text-gray-600 text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-600 text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
          >
            About Me
          </a>
          <a
            href="/services"
            className="text-gray-600 text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
          >
            Services
          </a>
          <a
            href="/projects"
            className="text-gray-600 text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
          >
            Projects
          </a>
          <a
            href="/testimonials"
            className="text-gray-600 text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
          >
            Testimonials
          </a>
          <a
            href="/contact"
            className="text-gray-600 text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
          >
            Contact
          </a>
          <button className="bg-[#FD6F00] text-[21px] text-white px-6 py-2 rounded-md hover:bg-gray-700 ml-4">
            Download CV
          </button>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center justify-center p-2 text-gray-600 hover:bg-gray-200 rounded-md"
        >
          {/* Hamburger Icon */}
          <span className="block w-6 h-0.5 bg-gray-600"></span>
          <span className="block w-6 h-0.5 bg-gray-600 mt-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600 mt-1"></span>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-slate-200 flex flex-col items-center space-y-4 mt-4">
          <a
            href="/"
            className="text-gray-600 hover:text-[#FD6F00] text-[21px] font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-[#FD6F00] text-[21px] font-medium"
          >
            About Me
          </a>
          <a
            href="/services"
            className="text-gray-600 hover:text-[#FD6F00] text-[21px] font-medium"
          >
            Services
          </a>
          <a
            href="/projects"
            className="text-gray-600 hover:text-[#FD6F00] text-[21px] font-medium"
          >
            Projects
          </a>
          <a
            href="/testimonials"
            className="text-gray-600 hover:text-[#FD6F00] text-[21px] font-medium"
          >
            Testimonials
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-[#FD6F00] text-[21px] font-medium"
          >
            Contact
          </a>
          <button className="bg-[#FD6F00] text-white text-[21px] px-6 py-2 rounded-md hover:bg-gray-700">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
}
