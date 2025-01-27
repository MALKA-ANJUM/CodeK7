import ServiceItem from "./ServiceItem";
import AfterArrow from "../../../assets/arrow-after (1).svg";
import card1 from "../../../assets/Card1.png";
import anim1 from "../../../assets/anim1.svg";  
import AfterArrow2 from "../../../assets/software-after.svg";
import card2 from "../../../assets/Card2.png";
import anim2 from "../../../assets/008-anim.svg";
import AfterArrow3 from "../../../assets/software-after.svg";
import card3 from "../../../assets/Card3.png";
import anim3 from "../../../assets/007-anim.svg";
import AfterArrow4 from "../../../assets/software-after.svg";
import card4 from "../../../assets/Card4.png";
import anim4 from "../../../assets/009-anim.svg";

const Services = () => {
  return (
    <>
		<ServiceItem
			title="Website Development"
			description="We have a web development team that uses beautiful designs to create an impactful digital experience for your brand, as well as high-end custom codes, techniques, and technologies."
			image={{
			webp: card1,
			jpg: anim1,
			}}
			animation={AfterArrow}
			reverse={false}
			backgroundColor="#f0e6f2"
			blockClass="website-development"
		/>

		<ServiceItem
			title="Graphic Design"
			description="Get professional graphic design services for your company, website, or social media accounts. Our team of experts will create stunning designs that reflect your brand's personality and captivate your audience. Everything from logos to brochures is covered."
			image={{
			webp: card2,
			jpg: anim2,
			}}
			animation={AfterArrow2}
			reverse={true}
			backgroundColor="#FFF3F8"
			blockClass="website-development"
		/>

		<ServiceItem
			title="Software Development"
			description="For your business needs, our software development company offers innovative and high-quality software solutions. Custom software development, mobile app development, and web development are our specialties. Contact us to make your vision a reality!"
			image={{
			webp: card3,
			jpg: anim3,
			}}
			animation={AfterArrow3}
			reverse={false}
			backgroundColor="#DAF1F0"
			blockClass="website-development"
		/>

		<ServiceItem
			title="3D Product Visualization"
			description="Make stunning 3D visualisations of your products to show them off in a new and exciting way. Your products will come to life and impress your customers thanks to our cutting-edge technology."
			image={{
			webp: card4,
			jpg: anim4,
			}}
			animation={AfterArrow4}
			reverse={true}
			backgroundColor="#EBF9E8"
			blockClass="website-development"
		/>
    </>
  );
};

export default Services;
