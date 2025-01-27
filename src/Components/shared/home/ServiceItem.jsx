const ServiceItem = ({ title, description, image, animation, reverse, backgroundColor, blockClass }) => {
	return (
	  <section className={`relative -mt-2 py-12 ${blockClass}`} style={{ backgroundColor }}>
		<div className="container w-4/5 mx-auto px-4">
		  <div className={`flex justify-center items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}>
			{/* Text Section */}
			<div className="w-full sm:w-1/2 md:w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/3">
			  <div className="text-[#294848]">
				<div className="mb-12 relative">
				  <h2 className="text-5xl font-semibold">{title}</h2>
				  <span className="absolute right-0 bottom-[20px] w-48">
					<img src={animation} alt="" />
				  </span>
				</div>
				<p className="text-[#4c5a69] mb-20">{description}</p>
			  </div>
			</div>
			{/* Image Section */}
			<div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			  <picture>
				<source srcSet={image.webp} type="image/webp" />
				<source srcSet={image.jpg} type="image/jpeg" />
				<img src={image.jpg} className="" alt="Service image" loading="lazy" />
			  </picture>
  
			  {/* SVG Animation */}
			  <object type="image/svg+xml" data={image.jpg} className="absolute bottom-0 left-0">
				<img src={image.jpg} alt="Service image animation" />
			  </object>
			</div>
		  </div>
		</div>
	  </section>
	);
  };
  

export default ServiceItem

// const ServiceItem = ({
// 	title,
// 	description,
// 	image,
// 	animation,
// 	reverse = false,
// 	backgroundColor = "#f9f9f9",
// 	blockClass = "",
//   }) => {
// 	return (
// 	  <section
// 		className={`relative py-16 ${blockClass}`}
// 		style={{ backgroundColor }}
// 	  >
// 		<div className="container mx-auto px-6 lg:px-12">
// 		  <div
// 			className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
// 			  reverse ? "lg:flex-row-reverse" : ""
// 			}`}
// 		  >
// 			<div
// 			  className="space-y-6"
// 			  data-aos={reverse ? "fade-left" : "fade-right"} // Animation hook (optional)
// 			>
// 			  <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
// 				{title}
// 			  </h2>
// 			  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
// 				{description}
// 			  </p>
// 			  <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all">
// 				Learn More
// 			  </button>
// 			</div>
  
// 			<div
// 			  className="relative group"
// 			  data-aos={reverse ? "fade-right" : "fade-left"} // Animation hook (optional)
// 			>
// 			  <picture>
// 				<source srcSet={image.webp} type="image/webp" />
// 				<source srcSet={image.jpg} type="image/jpeg" />
// 				<img
// 				  src={image.jpg}
// 				  alt="Service Visual"
// 				  className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
// 				  loading="lazy"
// 				/>
// 			  </picture>
// 			  {animation && (
// 				<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
// 			  )}
// 			</div>
// 		  </div>
// 		</div>
// 	  </section>
// 	);
//   };
  
//   export default ServiceItem;
  