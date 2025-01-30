import AboutImage from '../../../assets/aboutbanner.jpg'

const Banner = () => {
  return (
    <section className="relative mt-14 py-16 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
       
        <div className="relative">
            <img src={AboutImage} alt="About Us" className="rounded-lg shadow-lg object-cover w-full" />
        </div>
        {/* Right Text Section */}
        <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">ABOUT US</h2>
            <p className="text-gray-600 leading-relaxed">
                At K7CodeLab, we are passionate about crafting innovative software solutions that drive business success. As a leading software development company, we specialize in creating scalable, high-performance applications tailored to meet the unique needs of our clients.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
                With a team of skilled developers, designers, and tech enthusiasts, we focus on delivering cutting-edge web and mobile applications, enterprise solutions, and custom software development. Our expertise spans across various technologies, ensuring that we provide robust, user-friendly, and future-ready solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
                At K7CodeLab, we believe in a customer-centric approach, combining creativity with technology to transform ideas into reality. Whether you're a startup, SME, or enterprise, we are here to accelerate your digital journey with innovation, efficiency, and excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
                Let’s build the future together with K7CodeLab! 
            </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
