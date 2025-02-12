import AboutImage from "../../../assets/aboutbanner.jpg";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-blue-500">K7CodeLab</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            At K7CodeLab, we’re committed to delivering innovative software
            solutions that drive success. With a focus on excellence and
            customer satisfaction, we transform ideas into reality through
            cutting-edge technology.
          </p>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mt-4">
            Join us on a journey of innovation, creativity, and growth as we
            build the future of technology, together.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start md:justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
              Learn More
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <img
              src={AboutImage}
              alt="About Us"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:bg-black/30 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-600 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Banner;
