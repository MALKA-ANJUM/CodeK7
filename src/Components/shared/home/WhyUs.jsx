import React from "react";

const features = [
  { img: "consultation.svg", text: "30-min\nfree consultation" },
  { img: "sign.svg", text: "Signs NDA" },
  { img: "developers.svg", text: "Dedicated web\ndevelopers and designers" },
  { img: "security.svg", text: "100% data\nsecurity" },
  { img: "feedback.svg", text: "Constant\nfeedback cycle" },
  { img: "update.svg", text: "Regular updates" },
  { img: "transprency.svg", text: "Complete\ntransparency" },
  { img: "quality.svg", text: "Highest code\nquality" },
  { img: "maintanance.svg", text: "90-days\nmaintenance support" },
  { img: "analytics.svg", text: "Analytics and\nperformance report" },
];

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Why K7CodeLabs is the Best Web Technology Partner for You
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
          Based in Aurangabad (M.H.), K7CodeLabs delivers scalable, cost-effective web solutions tailored to your business needs. Let us take your business digital with exceptional customizable web application development services. We guarantee the highest quality standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={`https://shaats.com/assets/images/why-shaats/${feature.img}`}
                alt={feature.text}
                className="h-16 mb-4"
              />
              <p className="text-gray-700 font-medium whitespace-pre-line text-lg">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
