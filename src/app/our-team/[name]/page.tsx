import { MANAGEMENT, Engineering } from "@/constants/team";
import Image from "next/image";
import React from "react";

type teamPageProps = {
  params: {
    name: string;
  };
};
const teamDeatail: React.FC<teamPageProps> = ({ params: { name } }) => {
  console.log(decodeURIComponent(name));
  const empName = decodeURIComponent(name);
  const mEmp = MANAGEMENT.find((emp) => emp.name === empName);
  const eEmp = Engineering.find((emp) => emp.name === empName);
  console.log(mEmp, eEmp);
  return (
    <section className="container mx-auto px-12">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
        {empName}
      </h1>
      <p className="uppercase text-black-text text-base md:text-lg text-center">
        {mEmp ? mEmp.title : eEmp?.title}
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="flex items-start justify-start gap-4 mt-20 flex-col lg:flex-row">
        <Image
          src={mEmp?.image || eEmp?.image || ""}
          alt={empName}
          width={600}
          height={600}
          className="rounded-sm"
        />
        <div>
          <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
            Biography
          </h1>
          <p className="text-dec-text text-sm lg:text-lg my-10 font-medium">
            {eEmp ? eEmp.bio : mEmp?.bio}
          </p>
        </div>
      </div>
      {/* <p className="text-left text-dec-text mt-2 md:mt-8 text-lg font-medium mb-10">
        {product?.deatails.desc}
      </p>
      {product?.deatails.points?.map((point, key) => {
        return (
          <React.Fragment key={`keyes_${point.name}${key}`}>
            <p className=" text-base md:text-lg  text-dec-text font-semibold ">
              {point.name}
            </p>
            <p className=" text-base md:text-lg  text-dec-text  mb-6">
              {point.title}
            </p>
          </React.Fragment>
        );
      })} */}
    </section>
  );
};

export default teamDeatail;
