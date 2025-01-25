import scribble from '../../../assets/green-scribble-portfolio.svg'

function HomeDescription() {
  return (
    <section className="home-about py-24">
        <div className="container mx-auto w-4/5">
            <div className="home-about-text-block text-center">
            <h1 className="ha-title text-3xl font-semibold text-theme-text2 mb-8 relative">
                Experience trustworthy IT services for your company's requirements.
            </h1>
            <div className="ha-description">
                <p className="text-lg font-semibold text-gray-700">
                We are a creative organisation focusing in many of the brand-building aspects including web design,
                web development, graphic design, animation video, and digital marketing services. We offer
                beautiful, handcrafted digital solutions for businesses all over the world, including the USA,
                Canada, the UK, India, and Gulf countries.
                <br />
                <span className="text-black font-semibold relative">
                    Explore our services...
                    <embed src={scribble} type="image/svg+xml" className="absolute top-0 right-0 w-[10rem] h-[4rem]" />
                </span>
                </p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default HomeDescription
