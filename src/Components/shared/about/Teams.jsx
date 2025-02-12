import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member1 from "../../../assets/mem1.jpg";
import Member2 from "../../../assets/mem2.jpg";
import Member3 from "../../../assets/mem3.jpg";

const teamMembers = [
  {
    name: "John Doe",
    position: "Software Engineer",
    image: Member1,
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: Member2,
  },
  {
    name: "Mike Johnson",
    position: "Project Manager",
    image: Member3,
  },
  {
    name: "Emily Davis",
    position: "Backend Developer",
    image: Member1,
  },
  {
    name: "Samuel Lee",
    position: "Frontend Developer",
    image: Member2,
  },
];

const Teams = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    ref: sliderRef,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Meet Our Team
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-xl rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.position}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 shadow-lg transition-all duration-300"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 shadow-lg transition-all duration-300"
          onClick={() => sliderRef.current.slickNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Teams;
