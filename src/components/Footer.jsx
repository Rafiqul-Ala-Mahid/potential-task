import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mb-[-30px] pt-[25px] lg:pt-[75px] bg-[#F8F8F8]">
      <div className="flex gap-4 items-center justify-center">
        <img
          src="/src/assets/mu.png"
          alt=""
          className="h-[67px] w-[67px] rounded-full"
        />
        <h1 className="text-[48px] text-gray-600">
          <span className="font-bold text-black">M</span>umair
        </h1>
      </div>
      <div
        className={`justify-center flex flex-col lg:flex-row items-center lg:my-[50px]`}
      >
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
      </div>
      <div className="flex justify-center gap-6 my-[40px] mx-auto">
        <FaFacebook className="h-[32.48px] w-[32.48px]" />
        <FaTwitter className="h-[32.48px] w-[32.48px]" />
        <FaInstagram className="h-[34.48px] w-[34.48px]" />
        <FaLinkedin className="h-[34.48px] w-[34.48px]" />
      </div>
      <div className="h-[60px] bg-[#545454]">
        <p className="text-white text-[19px] py-[15px]">
          © 2023 <span className="font-bold text-[#FD6F00]">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
