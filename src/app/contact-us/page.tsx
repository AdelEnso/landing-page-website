import { Form } from "@/components/client/contact-form";
import Image from "next/image";
import Map from "../../../public/Map-01.png";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 mt-20">
      <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
        Contact Us!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <Form />
        <div className="flex items-center">
          <Image src={Map} alt="MAP" placeholder="blur" />
        </div>
      </div>
      <text className="pt-10">
        By submitting this form, you agree to our Terms of Use and acknowledge
        our Privacy Statement.
      </text>
    </section>
  );
};

export default ContactUs;
