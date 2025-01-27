import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    points: [
      "Understanding your goals and business vision",
      "Choosing your web development team",
      "Discussing your budget and timeframe",
    ],
  },
  {
    number: "02",
    title: "Research and Planning",
    points: [
      "Validating your idea with professionals",
      "Conducting market research",
      "Creating a personalized development plan",
    ],
  },
  {
    number: "03",
    title: "Designing UI/UX",
    points: [
      "Designing the web app architecture",
      "Creating wireframes for each module",
      "Creating responsive user interfaces",
    ],
  },
  {
    number: "04",
    title: "Coding and Development",
    points: [
      "Converting UI designs into working frontend",
      "Coding each module of the web app",
      "Creating a database",
    ],
  },
  {
    number: "05",
    title: "Testing",
    points: [
      "Conducting functional and non-functional tests",
      "Removing bugs and re-testing until code is optimized",
      "Getting your feedback and making changes",
    ],
  },
  {
    number: "06",
    title: "Launch and Maintenance",
    points: [
      "Launching the web solution on servers",
      "90-days of additional tech support",
      "Tracking and evaluating web app performance",
    ],
  },
];

const DevProcess = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Our Web Application Development Process
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Our refined process ensures that your web application is built efficiently, maintaining high standards of design and functionality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg rounded-xl text-left transition-transform transform hover:scale-105 hover:bg-blue-100 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-2xl rounded-full mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {step.title}
              </h3>
              <ul className="space-y-4">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-4 text-gray-600">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
