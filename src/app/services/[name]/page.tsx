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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 container px-4 ">
      {team?.activtes.map((item, index) => (
        <div
          key={`keyes_${item}${index}`}
          className=" border border-solid drop-shadow shadow border-white mb-4 p-4"
        >
          <h3 className=" text-base md:text-lg  text-dec-text font-semibold mb-2  px-1">
            {item.title}
          </h3>
          <p className=" text-base md:text-lg  text-dec-text  mb-2  px-1">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceDeatail;
