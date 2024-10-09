import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Introduce = () => {
  return (
    <div className="max-w-[1400px] mx-auto lg:h-[586px] items-center flex flex-col-reverse lg:flex-row mt-[128px] gap-[20px]">
      <div className="lg:w-1/2 mx-[20px] text-left">
        <p className="text-[24px]">Hi I am</p>
        <h1 className="text-[#FD6F00] text-[32px]">Muhammad Umair</h1>
        <h1 className="lg:text-[100px] text-[50px] font-extrabold">
          UI & UX <br /> <span className="">Designer</span>
        </h1>
        <p className=" text-[21px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="mt-6 bg-[#FD6F00] text-[21px] text-white py-2 px-4 rounded-md">
          Hire Me
        </button>
      </div>
      <div className="lg:w-1/2">
        <div className="flex items-center justify-center lg:mt-8 relative">
          <div className="w-[400px] h-[400px] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-[#FF8233] rounded-full p-[5px]">
              <div className="w-full h-full bg-white rounded-full"></div>
            </div>
          </div>
          <img
            src="/src/assets/Umaiar1.png"
            alt="Your description"
            className="absolute w-[400px] mb-[60px] h-[450px] rounded-full object-cover z-10"
          />

          <div className="absolute mb-[350px] w-[375px] h-[85px] bg-[#FD6F0099] text-white flex items-center justify-center z-20"></div>
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
