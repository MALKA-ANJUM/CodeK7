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
