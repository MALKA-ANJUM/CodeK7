import React from 'react'
import AfterArrow from "../../../assets/arrow-after (1).svg"

const ServiceItem = () => {
  return (
	<section className="bg-[#f0e6f2] relative -mt-2 py-12">
			<div className="container w-4/5 mx-auto px-4">
				<div className="flex justify-center
				
				items-center">
				{/* Text Section */}
				<div className="w-full sm:w-1/2 md:w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/3 order-2 sm:order-1 md:order-1 lg:order-1">
					<div className="text-[#294848]">
					<div className=" mb-12 relative">
						<h2 className='text-5xl font-semibold'>Website Development</h2>
						<span className="absolute right-0 bottom-[20px] w-48">
						<img src={AfterArrow} alt="" />
						</span>
					</div>
					<p className="text-[#4c5a69] mb-20">
						We have a web development team that uses beautiful designs to
						create an impactful digital experience for your brand, as well
						as high-end custom codes, techniques, and technologies.
					</p>
					</div>
				</div>
				{/* Image Section */}
				<div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 order-1 sm:order-2 md:order-2 lg:order-2">
					<picture>
						<source
						srcSet="https://shaats.com/assets/images/services/001-bg.webp"
						type="image/webp"
						/>
						<source
						srcSet="https://shaats.com/assets/images/services/001-bg.jpg"
						type="image/jpeg"
						/>
						<img
						src="https://shaats.com/assets/images/services/001-bg.jpg"
						className=""
						alt="Web development"
						loading="lazy"
						/>
					</picture>

					{/* SVG Animation */}
					<object
						type="image/svg+xml"
						data="https://shaats.com/assets/images/services/001-anim.svg"
						className="absolute bottom-0 left-0"
					>
						<img
						src="https://shaats.com/assets/images/services/001-anim.svg"
						alt="Web development image animation"
						/>
					</object>
				</div>
				</div>
			</div>
		</section>
  )
}

export default ServiceItem
