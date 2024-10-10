import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviewer1 from "../assets/images/testimonial1.png.jpeg";
import Reviewer2 from "../assets/images/testimonial2.png.jpeg";
import { useState } from "react";

import Quote from "../assets/icons/quote.svg"

// Testimonial data
const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, ABC Company",
    image: Reviewer1,
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    name: "Jane Smith",
    designation: "Designer, XYZ Studio",
    image: Reviewer2,
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    name: "Robert Johnson",
    designation: "Manager, QRS Corp",
    image: Reviewer1,
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    name: "Jane Smith",
    designation: "Designer, XYZ Studio",
    image: Reviewer2,
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only 1 slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div
        className={`h-2 mt-[30px] w-[20px] rounded-lg ${
          i === activeSlide ? "bg-[#FD6F00]" : "bg-gray-300"
        }`}
      />
    ),
    dotsClass: "slick-dots custom-dots flex justify-center",
  };

  return (
    <div className="lg:h-[733px] flex flex-col justify-between mt-[139px] lg:w-[1420px] lg:mx-[250px]">
      <h1 className="lg:text-[65px] mb-[30px] font-bold text-3xl text-center">
        Testimonials
      </h1>
      <p className="lg:text-[21px] mb-[70px] text-md lg:w-[50%] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium.
      </p>
      <div className=" py-12 px-2 sm:px-2 lg:px-2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="">
              <div className="flex flex-col lg:flex-row  lg:w-[900px] border-2 lg:h-[344px] w-full mx-auto items-center bg-[#F8F8F8] shadow-lg rounded-lg p-8">
                <div className="lg:w-[40%] mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] rounded-full object-cover "
                  />
                </div>
                <div className="lg:w-[716px] lg:h-[216px] ms-[10px] w-[90%]">
                  <div className="flex flex-col">
                    <img
                      src={Quote}
                      alt="quote"
                      className="w-6 h-6 ms-[-20px] mb-[0px] inline-block"
                    />
                    <p className="italic text-justify lg:text-[21px] text-gray-600">
                      {testimonial.quote}
                    </p>
                    <img
                      src={Quote}
                      alt="quote"
                      className="w-6 h-6 ml-[90%] inline-block transform rotate-180"
                    />
                  </div>
                  <h3 className="text-xl lg:text-[24px] text-left font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm lg:text-[19px] text-left text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
