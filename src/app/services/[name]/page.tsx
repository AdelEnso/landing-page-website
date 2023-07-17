/* eslint-disable react/no-unescaped-entities */
import { TEAMS } from "@/constants/services";

type teamservicesPageProps = {
  params: {
    name: string;
  };
};
const ServiceDeatail: React.FC<teamservicesPageProps> = ({
  params: { name },
}) => {
  const teamName = decodeURIComponent(name);
  const team = TEAMS.find((team) => team.name === teamName);
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        {team?.title}
      </h1>
      <p className="text-center text-dec-text mt-2  font-medium text-lg">
        “{team?.desc}”
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto  mt-4 bg-black-bg border-0 rounded-sm " />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 container mx-auto px-4   mt-5 place-items-center">
        {team?.activtes.map((item, index) => (
          <div
            key={`keyes_${item}${index}`}
            className=" border border-solid drop-shadow shadow border-white  p-4 h-full lg:h-80"
          >
            <h3 className=" text-base md:text-lg  text-dec-text font-semibold mb-2  px-1">
              {item.title}
            </h3>
            <p className=" text-base md:text-lg  text-dec-text  mb-2  px-1">
              {item.desc}
            </p>
            {item?.adv && (
              <h3 className=" text-base md:text-lg  text-dec-text font-medium mb-2  px-1">
                Advantages:{" "}
                <text className=" text-base md:text-lg  text-dec-text ">
                  {item.adv}
                </text>
              </h3>
            )}
          </div>
        ))}
      </div>
      <p className="text-base md:text-lg  text-dec-text mx-4 mt-10">
        {" "}
        {team?.paragraph}
      </p>
    </>
  );
};

export default ServiceDeatail;
