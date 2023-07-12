/* eslint-disable react/no-unescaped-entities */
import { CASES } from "@/constants/cases";

type casePageProps = {
  params: {
    name: string;
  };
};
const CaseDeatail: React.FC<casePageProps> = ({ params: { name } }) => {
  const caseName = decodeURIComponent(name);
  const Item = CASES.find((item) => item.title === caseName);
  console.log(caseName);
  return (
    <div className="flex flex-col justify-center items-center container mx-auto ">
      <h1 className="font-medium text-lg lg:text-2xl">{Item?.title}</h1>
      <hr className=" w-32 h-[0.3px]  my-4 bg-black-bg border-0 rounded-sm " />
      <h1 className="font-medium text-lg lg:text-2xl">
        “{" "}
        {Item?.titletwo === "Generating Efficient Molecular Designs"
          ? Item?.titletwo + " of Drugs"
          : Item?.titletwo}
        ”
      </h1>

      <div className="container mx-auto px-4 mt-20">
        {Item?.points.map((point, key) => (
          <div className="my-4 text-center" key={`${key}${point.desc}`}>
            <h1 className="font-normal text-lg lg:text-2xl text-center">
              {point.title}
            </h1>
            <p className="font-normal  text-center">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseDeatail;
