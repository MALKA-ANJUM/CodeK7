import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <ServiceItem
      title="Website Development"
      description="We have a web development team that uses beautiful designs to create an impactful digital experience for your brand, as well as high-end custom codes, techniques and technologies."
      image={{
        webp: "https://shaats.com/assets/images/services/001-bg.webp",
        jpg: "https://shaats.com/assets/images/services/001-bg.jpg",
      }}
      animation="https://shaats.com/assets/images/services/001-anim.svg"
      reverse={false}
      backgroundColor="##f0e6f2"
      blockClass="website-development"
    />
  );
};

export default Services;
