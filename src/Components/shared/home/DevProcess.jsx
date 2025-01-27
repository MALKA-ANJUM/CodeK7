import React from "react";

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
    <section className="bg-gray-50 py-16">
      <div className="container w-4/5 mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Web Application Development Process
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          We have a standard web application development process curated over
          years of working on web application development projects. With a
          streamlined, well-tested development process, we will use minimum
          resources to develop custom web apps from scratch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-left transition-all duration-500 w-full cursor-pointer hover:bg-primary ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
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
