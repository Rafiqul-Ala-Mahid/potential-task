import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Umair1 from "../assets/images/Umaiar1.png"

const Introduce = () => {
  return (
    <div className="lg:w-[1400px] lg:mx-[260px] lg:h-[617.24px] items-center flex flex-col-reverse lg:flex-row mt-[150px] lg:mt-[120px] gap-[20px]">
      <div className="lg:w-[714px] mx-[20px] text-left">
        <p className="lg:text-[24px] text-[19px]">Hi I am</p>
        <h1 className="text-[#FD6F00] text-[21px] lg:text-[32px]">Muhammad Umair</h1>
        <h1 className="lg:text-[100px] text-3xl font-bold">UI & UX</h1>
        <h1 className="lg:text-[100px] lg:text-end text-3xl font-bold">
          Designer
        </h1>
        <p className="lg:text-[21px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="mt-6 bg-[#FD6F00] lg:text-[21px] text-white py-2 px-4 rounded-md">
          Hire Me
        </button>
      </div>
      <div className="lg:w-[686px] mx-auto ">
        <div className="flex items-center justify-center lg:mt-8 relative">
          <div className="w-[485.87px] h-[485.87px] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-[#FF8233] rounded-full p-[5px]">
              <div className="w-full h-full bg-white rounded-full"></div>
            </div>
          </div>
          <img
            src={Umair1}
            alt="Your description"
            className="absolute w-[485.87px] mb-[80px] h-[560px] rounded-full object-cover z-10"
          />

          <div className="absolute mb-[430px] w-[374px] h-[83px] bg-[#FD6F0099] text-white flex items-center justify-center z-20"></div>
        </div>
        <div className="flex justify-center gap-6 mt-[40px] mx-auto">
          <FaFacebook className="h-[32.48px] w-[32.48px]" />
          <FaTwitter className="h-[32.48px] w-[32.48px]" />
          <FaInstagram className="h-[32.48px] w-[32.48px]" />
          <FaLinkedin className="h-[32.48px] w-[32.48px]" />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
