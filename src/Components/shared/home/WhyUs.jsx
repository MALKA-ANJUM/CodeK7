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
    <section className="bg-gray-50 py-16">
      <div className="container w-4/5 mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Why K7CodeLabs is the best web technology <br /> partner for you
        </h2>
        <p className="text-gray-600 mb-10">
          We are an Aurangabad (M.H.)-based customizable web application development organization. 
          At K7CodeLabs, we think that digitalization can propel businesses forward. We provide scalable, 
          cost-effective online solutions that resolve your business problems successfully. Do you want an 
          organization that knows the ins and outs of your sector? Please contact us. We guarantee the 
          highest quality customizable web application development services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
              <img 
                src={`https://shaats.com/assets/images/why-shaats/${feature.img}`} 
                alt={feature.text} 
                className="h-20 mb-3"
              />
              <p className="text-gray-700 whitespace-pre-line">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

