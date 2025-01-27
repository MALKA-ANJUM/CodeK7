import HeroBanner from '../Components/shared/home/HeroBanner'
import HomeDescription from '../Components/shared/home/HomeDescription'
import Services from '../Components/shared/home/Services'
import WhyUs from '../Components/shared/home/WhyUs'
import OurClients from '../Components/shared/home/OurClients'
import DevProcess from '../Components/shared/home/DevProcess'
import FAQ from '../Components/shared/home/FAQ'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HomeDescription />
      <Services />
      <WhyUs />
      <OurClients />
      <DevProcess />
      <FAQ />
    </div>
  )
}

export default Home
