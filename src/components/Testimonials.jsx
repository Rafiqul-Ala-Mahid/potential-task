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
        className={`h-2 w-[20px] rounded-lg ${
          i === activeSlide ? "bg-[#FD6F00]" : "bg-gray-300"
        }`}
      />
    ),
    dotsClass: "slick-dots custom-dots flex justify-center",
  };

  return (
    <div className="lg:h-[850px] mx-auto">
      <h1 className="text-[65px] font-bold text-center">Testimonials</h1>
      <p className="text-[21px] lg:w-[50%] mx-auto text-center mb-8">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium.
      </p>
      <div className=" mx-auto py-12 px-2 sm:px-2 lg:px-2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6">
              <div className="flex lg:w-[900px] w-full mx-auto items-center bg-white shadow-lg rounded-lg p-8">
                <div className="w-[40%]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="lg:w-[200px] lg:h-[200px] w-[130px] h-[130px] rounded-full object-cover mb-4"
                  />
                </div>
                <div className="w-[60%]">
                  <p className="ms-[20px] italic text-left text-gray-600 mb-6">
                    <img
                      src={Quote}
                      alt="quote"
                      className="w-6 h-6 ms-[-30px] mb-[-25px] inline-block"
                    />
                    {testimonial.quote}
                    <img
                      src={Quote}
                      alt="quote"
                      className="w-6 h-6 mt-[-25px] lg:ml-[48%] ml-[90%] inline-block transform rotate-180"
                    />
                  </p>
                  <h3 className="text-xl text-left font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-left text-gray-500">
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
