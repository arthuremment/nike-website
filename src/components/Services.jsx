import { services } from "../constants";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      <div className="mt-16 flex flex-wrap sm:gap-4 gap-20">
        {services.map((service) => (
          <ServicesCard
            key={service.label} {...service}
          />
        ))}
      </div>
    </section>
  )
}

export default Services