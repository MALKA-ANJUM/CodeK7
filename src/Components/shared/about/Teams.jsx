import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member1 from '../../../assets/mem1.jpg';
import Member2 from '../../../assets/mem2.jpg';
import Member3 from '../../../assets/mem3.jpg';

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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    ref: sliderRef,
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
    <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="relative">
            <Slider {...settings}>
            {teamMembers.map((member, index) => (
                <div key={index} className="p-4">
                    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
                        <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-gray-600">{member.position}</p>
                    </div>
                </div>
            ))}
            </Slider>

            {/* Custom Navigation */}
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    </div>
  );
};

export default Teams;
