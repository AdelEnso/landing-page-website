import { Form } from "@/components/client/contact-form";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-12 mt-20">
      <p className="text-left text-base text-black-text font-medium opacity-60 ">
        CONTACT US
      </p>
      <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
        Have a Cool Project?
      </h1>
      <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
        Get in Touch!
      </h1>
      <div className="">
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
