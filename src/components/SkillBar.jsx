import  "./skillBar.css"


// eslint-disable-next-line react/prop-types
const SkillBar = ({ skillName, score, setScore }) => {
  return (
    <div className="mb-6 relative">
      {/* Skill Name */}
      <div className="flex justify-between items-center">
        <span className="text-[24px] font-bold">{skillName}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-[8px] rounded-lg relative">
        <div
          style={{ width: `${score}%` }}
          className="bg-[#FD6F00] h-full"
        ></div>

        {/* Slider Control on top of the progress bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="w-full absolute top-0 left-0 appearance-none bg-transparent h-[8px] cursor-pointer z-10 range-slider"
          style={{ pointerEvents: "auto" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

