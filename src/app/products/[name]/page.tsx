import { AppsCom } from "@/components/client/apps";
import { Products } from "@/constants/products";

import React from "react";

type ProductPageProps = {
  params: {
    name: string;
  };
};
const ProductDeatail: React.FC<ProductPageProps> = ({ params: { name } }) => {
  console.log(decodeURIComponent(name));
  const productName = decodeURIComponent(name);
  const product = Products.find((prod) => prod.name === productName);
  console.log(product);
  return (
    <section className="container mx-auto px-12">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
        {productName}
      </h1>
      <p className="text-left text-dec-text mt-2 md:mt-8 text-lg font-medium mb-10">
        {product?.deatails.desc}
      </p>

      <div className=" mb-4 p-4">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-2xl 2xl:text-3xl  text-left font-bold p-2">
          Key Features
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
          {product?.deatails.points?.map((point, key) => {
            return (
              <div
                key={`keyes_${point.title}${key}`}
                className=" border border-solid drop-shadow shadow border-white mb-4 p-4"
              >
                <h3 className=" text-base md:text-lg  text-dec-text font-semibold mb-2  px-1">
                  {point.title}
                </h3>
                <p className=" text-base md:text-lg  text-dec-text  mb-2 text-justify  px-1">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <AppsCom /> */}
      {product?.deatails.application && (
        <>
          <div className=" mb-4 p-4">
            <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-2xl 2xl:text-3xl  text-left font-bold p-2">
              Applications
            </h1>
            <div className="grid grid-cols-1 gap-4">
              {product?.deatails.application?.map((app, key) => (
                <div
                  key={`keys${app}`}
                  className=" border border-solid drop-shadow shadow border-white mb-4 p-4"
                >
                  <h3 className=" text-base md:text-lg  text-dec-text font-semibold mb-2  px-1">
                    {app.title}
                  </h3>

                  <p className=" text-base md:text-lg  text-dec-text  mb-2 px-1">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p>Supported Operating Systems</p>
          <div className=" border border-solid  border-white mb-4 p-4">
            {product?.deatails.supported}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDeatail;
