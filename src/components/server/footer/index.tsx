import { LinkedinIcon } from "@/assets/svgs/linkedin";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" bg-black-bg mt-12">
      <div className="container mx-auto  px-4 py-4 lg:grid lg:grid-cols-3  lg:gap-4 md:flex md:flex-col items-center lg:items-start">
        {/* Footer Part 1 */}
        <div className="lg:text-left md:text-center">
          <p className=" text-nav font-normal">
            Ensō Lab is a research-driven tech startup developing solutions for
            info-security, cyber protection, and secure communication.
          </p>
        </div>

        {/* Footer Part 2 */}
        <div className="lg:text-center md:text-center  lg:mt-0 md:mt-4 flex justify-start  flex-col items-start lg:items-center">
          <p className="text-nav  font-normal  max-w-sm leading-6">
            Office 2603, Ubora Tower Business Bay, Marasi Drive, Dubai, United
            Arab Emirates.
          </p>
        </div>

        {/* Footer Part 3 */}
        <div className="lg:text-right md:text-center mt-4 lg:mt-0 md:mt-4 flex flex-col items-start md:items-center lg:items-end">
          {/* Content for Footer Part 3 */}

          <Link
            className="text-nav font-normal  hover:underline hover:animate-pulse"
            target="_new"
            href={"https://www.linkedin.com/company/enso-lab/"}
          >
            <LinkedinIcon />
          </Link>
          <Link
            className="text-nav font-normal  hover:underline hover:underline-offset-2 my-2"
            href="mailto:hello@ensolab.co"
          >
            hello@ensolab.co
          </Link>

          <Link
            href="tel:+971 (4) 529 4214"
            className=" text-nav  hover:underline hover:underline-offset-2"
          >
            +971 (4) 529 4214
          </Link>
        </div>
      </div>
      <div className="px-4">
        <p className=" text-nav font-normal text-center lg:text-left">
          Ensō Lab © 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
