/* eslint-disable react/no-unescaped-entities */
const Researches = () => {
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        Research & Development
      </h1>
      <p className="text-center text-dec-text mt-2  font-medium text-lg mx-4 md:mx-12">
        Our R&D is the driving force behind our inventive solutions, guiding us
        to create advanced products for cyber attack prevention, quantum-proof
        cryptographic solutions, and secure communication technologies. We're
        committed to transforming lives and businesses for a better tomorrow.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto  mt-4 bg-black-bg border-0 rounded-sm " />
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 mx-4 md:mx-12 mt-20">
        <div className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20">
          <p className="text-center text-dec-text text-sm md:text-lg">
            True Random Number Generation (TRNG)
          </p>
        </div>

        <div className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20">
          <p className="text-center text-dec-text text-sm md:text-lg">
            Hardwear Transactional Memory Architecture
          </p>
        </div>
        <div className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20">
          <p className="text-center text-dec-text text-sm md:text-lg">
            Trusted Execution Environment (TEE)
          </p>
        </div>
        <div className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20">
          <p className="text-center text-dec-text text-sm md:text-lg">
            FPGA-based hardware design on post-quantum cryptography.
          </p>
        </div>
      </div>
    </>
  );
};
export default Researches;
