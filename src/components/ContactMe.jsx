

const ContactMe = () => {
    return (
      <div className="items-center lg:w-[800px] mx-auto lg:h-[337px]">
        <h1 className="text-[65px] font-bold">Lets Design Together</h1>
        <p className="text-[21px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex gap-4 my-[40px] justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="lg:w-[400px] max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FD6F00] h-12" // Added a fixed height
          />

          <button
            type="submit"
            className="bg-[#FD6F00] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#e05e00] focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:ring-opacity-50 h-12 flex items-center" // Set same height as input
          >
            Contact Me
          </button>
        </div>
      </div>
    );
};

export default ContactMe;