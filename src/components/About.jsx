import { useState } from "react";
import SkillBar from "./SkillBar";

const About = () => {
    const [uxScore, setUxScore] = useState(80); // UX initial score
    const [websiteDesignScore, setWebsiteDesignScore] = useState(75); // Website Design initial score
    const [appDesignScore, setAppDesignScore] = useState(65); // App Design initial score
    const [graphicDesignScore, setGraphicDesignScore] = useState(90);
    return (
      <div className="max-w-[1400px] mx-auto lg:h-[586px] items-center flex flex-col lg:flex-row mt-[50px] gap-[20px]">
        <div className="lg:w-1/2">
          <div className="flex items-center justify-center lg:mt-8 relative">
            <div className="w-[400px] h-[400px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-[#FF8233] rounded-full p-[5px]">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
            </div>
            <img
              src="/src/assets/Umaiar2.png"
              alt="Your description"
              className="absolute w-[400px] mb-[60px] h-[450px] rounded-full object-cover z-10"
            />

            <div className="absolute mb-[350px] w-[375px] h-[85px] bg-[#FD6F0099] text-white flex items-center justify-center z-20"></div>
          </div>
        </div>
        <div className="lg:w-1/2 mx-[20px] text-left">
          <h1 className="text-[65px] font-bold">About Me</h1>
          <p className="text-[21px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="mt-6">
            {/* UX */}
            <SkillBar
              skillName="UX Design"
              score={uxScore}
              setScore={setUxScore}
            />
            {/* Website Design */}
            <SkillBar
              skillName="Website Design"
              score={websiteDesignScore}
              setScore={setWebsiteDesignScore}
            />
            {/* App Design */}
            <SkillBar
              skillName="App Design"
              score={appDesignScore}
              setScore={setAppDesignScore}
            />
            {/* Graphic Design */}
            <SkillBar
              skillName="Graphic Design"
              score={graphicDesignScore}
              setScore={setGraphicDesignScore}
            />
          </div>
        </div>
      </div>
    );
};

export default About;