import { useState } from "react";
import MU from "../assets/images/mu.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "cupcake");
    } else {
      document.documentElement.setAttribute("data-theme", "black");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="lg:w-[1420px] mt-[61px] h-[67px] lg:mx-[250px] px-4">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src={MU} className="h-[67px] w-[67px] rounded-full" alt="" />
          <a href="/" className="ml-4 text-[48px] text-gray-800">
            <span className="font-bold">M</span>umair
          </a>
        </div>

        {/* Desktop Menu */}
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

          {/* Toggle Button for Dark and Light Mode (Desktop) */}
          <div className="ml-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                onChange={toggleTheme}
                checked={isDarkMode}
              />
              <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-[#FD6F00] peer dark:bg-gray-700 dark:peer-focus:ring-gray-800">
                <div
                  className={`dot absolute left-[2px] top-[2px] bg-white w-6 h-6 rounded-full transition-all ${
                    isDarkMode ? "translate-x-full bg-gray-700" : ""
                  }`}
                ></div>
              </div>
              <span className="ml-3 text-gray-900 dark:text-white">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </label>
          </div>
        </div>

        {/* Mobile Menu and Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle for Mobile */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              onChange={toggleTheme}
              checked={isDarkMode}
            />
            <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-[#FD6F00] peer dark:bg-gray-700 dark:peer-focus:ring-gray-800">
              <div
                className={`dot absolute left-[2px] top-[2px] bg-white w-6 h-6 rounded-full transition-all ${
                  isDarkMode ? "translate-x-full bg-gray-700" : ""
                }`}
              ></div>
            </div>
          </label>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center p-2 text-gray-600 hover:bg-gray-200 rounded-md"
          >
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mt-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mt-1"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-24 left-0 w-full h-[400px] bg-slate-200 flex flex-col items-center space-y-4 pt-8 z-50 transition-all duration-500 ease-in-out">
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
