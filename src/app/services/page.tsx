import { SERVICES } from "@/constants/services";
import Image from "next/image";
const ServiceItem = ({ name, Icon, description, points, reverse }: any) => (
  <div
    className={`flex items-center justify-start mb-8 ${
      reverse ? "flex-row-reverse" : ""
    }`}
  >
    <div className="w-2/3">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {points && (
        <ul className="list-disc list-inside">
          {points.map((point: any, index: any) => (
            <li key={index} className="text-gray-600">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="flex-shrink-0 w-1/3 ml-4">
      <Image src={Icon} className="w-3/4 h-auto" alt={name} />
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="container mx-auto px-12 mt-20">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
        Our Services
      </h1>
      <p className="text-center text-dec-text mt-2 md:mt-8 font-medium text-lg">
        Believing in mindfulness, simplicity, and ethics, we ensure our
        innovative approach benefits clients’ businesses and society positively.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div>
        {SERVICES.map((service, index) => (
          <ServiceItem
            key={index}
            name={service.name}
            Icon={service.Icon}
            description={service.description}
            points={service.points}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
