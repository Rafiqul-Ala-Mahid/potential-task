import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import MU from "../assets/images/mu.png"

const Footer = () => {
  return (
    <div className="lg:w-[1920px] mt-[139px] lg:h-[552px] flex flex-col justify-between px-0 pt-[25px] lg:pt-[75px] bg-[#F8F8F8]">
      <div className="flex gap-6 items-center justify-center">
        <img
          src={MU}
          alt=""
          className="lg:h-[67px] lg:w-[67px] h-[40px] w-[40px] rounded-full"
        />
        <h1 className="lg:text-[48px] text-3xl text-gray-600">
          <span className="font-bold text-black">M</span>umair
        </h1>
      </div>

      <div className="justify-center flex flex-col lg:flex-row items-center lg:my-[50px]">
        <a
          href="/"
          className="text-gray-600 lg:text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-gray-600 lg:text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
        >
          About Me
        </a>
        <a
          href="/services"
          className="text-gray-600 lg:text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
        >
          Services
        </a>
        <a
          href="/projects"
          className="text-gray-600 lg:text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
        >
          Projects
        </a>
        <a
          href="/testimonials"
          className="text-gray-600 lg:text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
        >
          Testimonials
        </a>
        <a
          href="/contact"
          className="text-gray-600 lg:text-[21px] hover:text-[#FD6F00] px-4 py-2 font-medium"
        >
          Contact
        </a>
      </div>

      <div className="flex justify-center gap-6 my-[40px] mx-auto">
        <FaFacebook className="h-[32.48px] w-[32.48px]" />
        <FaTwitter className="h-[32.48px] w-[32.48px]" />
        <FaInstagram className="h-[32.48px] w-[32.48px]" />
        <FaLinkedin className="h-[32.48px] w-[32.48px]" />
      </div>

      {/* Copyright section pinned to the bottom */}
      <div className="w-full h-[60px] bg-[#545454]">
        <p className="text-white lg:text-[19px] py-[15px] text-center">
          © 2023 <span className="font-bold text-[#FD6F00]">Mumair</span> All
          Rights Reserved, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;