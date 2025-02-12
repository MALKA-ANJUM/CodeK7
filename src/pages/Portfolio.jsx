import PortfolioItem from '../Components/shared/PortfolioItem';
const portfolioItems = [
    {
        id: 1,
        title: "MGM University",
        image: "https://shaats.com/assets/images/portfolio/main/mgmu.jpg",
        link: "https://shaats.com/portfolio-details/mgmu",
        tags: ["#website", "#webdesign", "#angular"],
    },
    {
        id: 2,
        title: "Project B",
        image: "https://shaats.com/assets/images/portfolio/main/mgmu.jpg",
        link: "https://shaats.com/portfolio-details/projectb",
        tags: ["#branding", "#design"],
    },
    {
        id: 3,
        title: "Project C",
        image: "https://shaats.com/assets/images/portfolio/main/mgmu.jpg",
        link: "https://shaats.com/portfolio-details/projectc",
        tags: ["#react", "#development"],
    },
];
const Portfolio = () => {
    return (
        <section className="py-12 mt-14 ">
            <div className="container w-4/5 mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map(item => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;