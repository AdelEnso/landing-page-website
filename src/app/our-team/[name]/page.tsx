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
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <p className="uppercase text-black-text text-base md:text-lg text-center">
        {mEmp ? mEmp.title : eEmp?.title}
      </p>

      <div className="flex items-center lg:items-center justify-start gap-4 mt-20 flex-col lg:flex-row">
        <Image
          src={mEmp?.image || eEmp?.image || ""}
          alt={empName}
          width={250}
          height={250}
          className="rounded-sm 2xl:w-[500px] 2xl:h-[500px]"
        />
        <div className="">
          <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
            Biography
          </h1>
          <p className="text-dec-text text-sm lg:text-lg my-5 font-medium">
            {eEmp ? eEmp.bio : mEmp?.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default teamDeatail;
