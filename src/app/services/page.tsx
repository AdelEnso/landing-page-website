import { SERVICES } from "@/constants/services";

const Services = () => {
  return (
    <section className="container mx-auto px-12">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
        Our Services
      </h1>
      <p className="text-center text-dec-text mt-2 md:mt-8 font-medium text-lg">
        Believing in mindfulness, simplicity, and ethics, we ensure our
        innovative approach benefits clients’ businesses and society positively.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="flex flex-wrap">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-between p-4"
          >
            {/* Left item */}
            <div>
              <h2 className="text-lg font-bold text-black-text">
                {service.name}
              </h2>
              <p className="text-md text-dec-text font-medium mt-2">
                {service.description}
              </p>

              {service.points && (
                <ul className="list-disc pl-4 mt-4">
                  {service.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-md text-dec-text font-medium"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right item */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
