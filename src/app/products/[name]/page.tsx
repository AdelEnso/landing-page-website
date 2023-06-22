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
      })}
    </section>
  );
};

export default ProductDeatail;
