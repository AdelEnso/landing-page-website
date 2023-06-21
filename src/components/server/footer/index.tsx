import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" bg-black-bg h-full">
      <div className="container mx-auto mt-12 px-4 py-8 lg:grid lg:grid-cols-3  lg:gap-4 md:flex md:flex-col md:items-start">
        {/* Footer Part 1 */}
        <div className="lg:text-left md:text-center">
          <p className=" text-white text-2xl lg:text-4xl font-bold mb-4">
            Ensō Lab
          </p>
          <p className=" text-white opacity-75 font-normal mb-8">
            Ensō Lab is a research-driven tech startup developing solutions for
            info-security, cyber protection, and secure communication.
          </p>
          <p className=" text-white opacity-75 font-normal">
            Ensō Lab © 2023. All Rights Reserved.
          </p>
        </div>

        {/* Footer Part 2 */}
        <div className="lg:text-center md:text-center  lg:mt-0 md:mt-4 flex  flex-col items-start lg:items-center">
          <p className="text-white text-2xl lg:text-4xl font-bold mb-4">
            Office
          </p>
          <p className="text-white opacity-75 font-normal  max-w-sm">
            Office 2603, Ubora Tower Business Bay, Dubai, United Arab Emirates.
          </p>
        </div>

        {/* Footer Part 3 */}
        <div className="lg:text-right md:text-center mt-4 lg:mt-0 md:mt-4">
          {/* Content for Footer Part 3 */}
          <Link
            className="text-white opacity-75 font-normal"
            href={"https://www.linkedin.com/company/enso-lab/"}
          >
            Linkdin
          </Link>
          <p className="text-white opacity-75 font-normal">hello@ensolab.co</p>
          <p className=" text-white">+971 (4) 529 4214</p>
        </div>
      </div>
    </footer>
  );
};