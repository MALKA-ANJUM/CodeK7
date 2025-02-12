import React from "react";

const OurMission = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center">
      <div className="container max-w-4xl mx-auto">
        {/* Mission Title */}
        <div className="mb-12">
          <h5 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Our Mission
          </h5>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-4 leading-snug">
            Driving innovation not only within our organization but also in the
            way we shape every aspect of our business approach.
          </h2>
        </div>

        {/* Decorative Divider */}
        <div className="mt-8 flex justify-center">
          <span className="h-1 w-20 bg-blue-600 rounded"></span>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
