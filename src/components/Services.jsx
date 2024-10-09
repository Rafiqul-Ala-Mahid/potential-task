
const Services = () => {
     const skills = [
       {
         title: "UI/UX",
         description:
           "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
         imgSrc: "/src/assets/icons/Vector.svg", // Replace with your image path
       },
       {
         title: "Web Design",
         description:
           "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
         imgSrc: "/src/assets/icons/Layer_1.svg", // Replace with your image path
       },
       {
         title: "App Design",
         description:
           "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
         imgSrc: "/src/assets/icons/Group 18.svg", // Replace with your image path
       },
       {
         title: "Graphic Design",
         description:
           "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
         imgSrc: "/src/assets/icons/Vector-3.svg", // Replace with your image path
       },
     ];

    return (
      <div className="lg:h-[584px]">
        <h1 className="text-[65px] text-center font-bold">Services</h1>
        <p className="text-[21px] text-center lg:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex flex-wrap mt-[50px] justify-between gap-6 lg:w-full w-[80%] mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full md:w-[48%] lg:w-[23%] bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col"
            >
              <img
                src={skill.imgSrc}
                alt={skill.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-[32px] text-left font-bold mb-2 text-gray-800">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-left text-[19px]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Services;