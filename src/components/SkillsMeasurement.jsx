import { useState } from "react";

export default function SkillsMeasurement() {
  const [reactScore, setReactScore] = useState(40); // initial score 40

  // Function to update score based on slider input
  const handleScoreChange = (e) => {
    setReactScore(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Skills Measurement
      </h1>

      {/* Skill Block */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">React</span>
          <span className="text-lg font-medium">{reactScore}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden mt-2">
          <div
            style={{ width: `${reactScore}%` }}
            className="bg-[#FD6F00] h-full"
          ></div>
        </div>

        {/* Slider Control */}
        <input
          type="range"
          min="0"
          max="100"
          value={reactScore}
          onChange={handleScoreChange}
          className="w-full mt-4 appearance-none bg-transparent slider-thumb h-2"
        />
      </div>

      {/* More skill blocks can be added similarly */}
    </div>
  );
}
