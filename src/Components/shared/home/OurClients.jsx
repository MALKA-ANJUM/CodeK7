import React from "react";

const OurClients = () => {
  const clients = [
    "abbas-transport.svg",
    "accountax.svg",
    "alankar-restaurant.svg",
    "asian-hospital.svg",
    "aurangabad-turf-football.jpg",
    "intact-safety.svg",
    "csbm.svg",
    "deluxe-bakery.svg",
    "design-n-draft.svg",
    "dulhe-raja.svg",
    "hayat-packaged-drinking-water.svg",
    "hindustan-townships.svg",
    "hotel-new-punjab.svg",
    "kohinoor-college.jpg",
    "mgm-university.svg",
    "perfect-xpress-cargo.jpg",
    "silver-moon-auto-cars.jpg",
    "train-e.svg",
    "wonder-construction.svg",
    "dr-rafiq-zakaria-womens-college.svg",
  ];

  return (
    <section className="py-10 bg-gray-100">
        <div className="container mx-auto w-4/5 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Brands we have worked with!
            </h2>
            <p className="text-gray-600 mb-8">
            Creating visual concepts to communicate ideas that inspire, inform, and captivate consumers.
            </p>
            <div className="overflow-hidden whitespace-nowrap relative w-full">
                <div className="flex animate-marquee space-x-10">
                    {clients.map((client, index) => (
                    <img
                        key={index}
                        src={`https://shaats.com/assets/images/clients/${client}`}
                        alt={`Client ${index + 1}`}
                        className="h-16 sm:h-20 md:h-24 object-contain"
                    />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default OurClients;
