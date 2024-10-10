

const ContactMe = () => {
    return (
      <div className="flex flex-col justify-between mt-[139px] items-center lg:w-[932px] lg:mx-[500px] lg:h-[337px]">
        <h1 className="lg:text-[65px] text-3xl font-bold mb-[30px]">Lets Design Together</h1>
        <p className="lg:text-[21px] lg:w-[900px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex gap-4 mt-[40px] justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="lg:w-[400px] max-w-md lg:text-[21px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FD6F00] h-12"
          />

          <button
            type="submit"
            className="bg-[#FD6F00] text-white lg:text-[24px] font-semibold py-2 px-6 rounded-md hover:bg-[#e05e00] focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:ring-opacity-50 h-12 flex items-center"
          >
            Contact Me
          </button>
        </div>
      </div>
    );
};

export default ContactMe;