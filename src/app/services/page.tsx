/* eslint-disable react/no-unescaped-entities */
import { AnimationDiv } from "@/components/client/animation-item";
import Image from "next/image";
import Link from "next/link";
import ThIm from "../../../public/hacker1.png";
import DgIm from "../../../public/Thumb-01.png";

// const ServiceItem = ({
//   name,
//   Icon,
//   description,
//   points,
//   reverse,
//   isRotate,
// }: any) => (
//   <div
//     className={`flex flex-col lg:flex-row items-center justify-start mb-8 ${
//       reverse ? "lg:flex-row-reverse" : ""
//     }`}
//   >
//     <div className="w-full lg:w-2/3">
//       <h3 className="text-xl font-bold mb-2">{name}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       {points && (
//         <ul className="list-disc mx-3 md:mx-0 md:list-inside">
//           {points.map((point: any, index: any) => (
//             <li key={index} className="text-gray-600">
//               {point}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     <div className="flex-shrink-0 w-full lg:w-1/3 2xl:w-5/12  ">
//       <Image src={Icon} className={` ${isRotate && "rotate-12"}`} alt={name} />
//     </div>
//   </div>
// );

const Services = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 ">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        Our Services
      </h1>
      <p className="text-center text-dec-text mt-2  font-medium text-lg">
        Believing in mindfulness, simplicity, and ethics, we ensure our
        innovative approach benefits clients’ businesses and society positively.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="flex justify-center flex-col items-center">
        <div className="  mt-12 grid grid-cols-1 lg:grid-cols-3 place-items-center">
          <Link href="/services/Team Blue">
            <AnimationDiv>
              <p className=" text-3xl text-black-text text-center">Team Blue</p>
              <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
              <p className="text-dec-text text-lg mt-5 text-center">
                The Red Team simulates cyber attackers to uncover
                vulnerabilities and weaknesses in an organization's security
                systems.
              </p>
              <div className="flex items-center justify-center">
                <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base">
                  Learn More
                </button>
              </div>
            </AnimationDiv>
          </Link>
          {/* <div className=""> */}
          <Image
            src={ThIm}
            sizes="100vw"
            placeholder="blur"
            alt="Hacker"
            className=" w-full h-auto"
          />

          {/* </div> */}
          <Link href="/services/Team Red">
            <AnimationDiv className="">
              <p className=" text-3xl text-black-text text-center">Team Red</p>
              <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
              <p className="text-dec-text text-lg mt-5 text-center">
                The Blue Team defends an organization's information systems by
                detecting and responding to cyber threats in real time.
              </p>
              <div className="flex items-center justify-center">
                <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base">
                  Learn More
                </button>
              </div>
            </AnimationDiv>
          </Link>
        </div>
        <Link href="/services/Team Purple">
          <AnimationDiv className="mt-10">
            <p className=" text-3xl text-black-text text-center">Team Purple</p>
            <hr className=" h-[0.3px] w-1/2 mx-auto  my-4 bg-border-color border-0 rounded-sm " />
            <p className="text-dec-text text-lg mt-5 text-center">
              Purple Team generally blends the roles of Red and Blue Teams, with
              the aim of enhancing the effectiveness of both teams.Conducting
              exercises that involve both Red and Blue Teams, with Red Team
              emulating attacks and Blue Team defending against them. The
              primary objective is to provide a learning experience for both
              teams and to improve the organization's overall security posture.
            </p>
          </AnimationDiv>
        </Link>
        <div className=" border border-solid drop-shadow shadow border-white mb-4 p-4 mt-20">
          <p className=" text-base md:text-lg  text-dec-text  mb-2  px-1">
            Governance, Risk, and Compliance (GRC) services align IT operations
            with business goals, manage risks, and ensure regulatory compliance.
            These services involve setting IT policies, conducting risk
            assessments, implementing and monitoring controls, and utilizing GRC
            software for automation and efficiency. The flow and grammar of the
            statement are accurate, providing a clear overview of GRC services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
