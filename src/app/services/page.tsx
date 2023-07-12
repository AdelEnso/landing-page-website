/* eslint-disable react/no-unescaped-entities */
import { AnimationDiv } from "@/components/client/animation-item";
import Image from "next/image";
import Link from "next/link";
import ThIm from "../../../public/hacker1.png";
import DgIm from "../../../public/Thumb-01.png";
import { ServicesClient } from "@/components/client/services-c";

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
        “Believing in mindfulness, simplicity, and ethics, we ensure our
        innovative approach benefits clients’ businesses and society
        positively.”
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <p className="text-center  mt-2   text-lg">
        "Validate your cybersecurity protocols against real-world attack
        scenarios"
      </p>
      <ServicesClient />
    </section>
  );
};

export default Services;
