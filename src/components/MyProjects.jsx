import { useState } from "react";
import Img1 from "../assets/images/image1.png"
import Img2 from "../assets/images/image2.png"
import Img3 from "../assets/images/image3.png"
import Img4 from "../assets/images/image4.png"
import Img5 from "../assets/images/image5.png"
import Img6 from "../assets/images/image6.png"

const MyProjects = () => {
  const [activeButton, setActiveButton] = useState("Web Design");

  const buttons = [
    "ALL",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
  ];

    const divData = [
      {
        title: "Web Design",
        description: "AirCalling Landing Page Design ",
        bgImage: `${Img5}`,
        overlayImage: `${Img2}`,
      },
      {
        title: "Web Design",
        description: "Business Landing Page Design ",
        bgImage: `${Img4}`,
        overlayImage: `${Img1}`,
      },
      {
        title: "Web Design",
        description: "Ecom Web Page Design",
        bgImage: `${Img6}`,
        overlayImage: `${Img3}`,
      },
    ];


  return (
    <div className="lg:h-[1000px]">
      <h1 className="text-[65px] text-center font-bold">My Projects</h1>
      <p className="text-[21px] text-center lg:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>
      <div className="flex my-[40px] justify-center space-x-4">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => setActiveButton(button)}
            className={`px-4 py-2 text-xs lg:text-lg font-medium rounded-lg ${
              activeButton === button
                ? "bg-[#FD6F00] text-white"
                : "bg-gray-200 text-gray-600"
            } transition duration-300`}
          >
            {button}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center space-y-6 lg:space-y-0 lg:space-x-2">
        {divData.map((item, index) => (
          <div key={index} className=" p-4 mx-auto rounded-lg">
            {/* Background Image */}
            <div
              className="relative bg-[#FFEBDB] w-[360px] h-[420px]"
            >
              <img
                src={item.bgImage}
                alt={`${item.title} background`}
                className="absolute top-[0px] left-[115px] w-[220px] h-[420px] object-cover"
              />
              {/* Overlay Image */}
              <img
                src={item.overlayImage}
                alt={`${item.title} overlay`}
                className="absolute top-[90px] left-[30px] w-[220px] h-[330px] "
              />
            </div>
            {/* Title and Description */}
            <h2 className="mt-4 text-left text-[19px] text-[#FD6F00]">
              {item.title}
            </h2>
            <p className="text-[24px] text-left font-bold">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
