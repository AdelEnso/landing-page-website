import { Form } from "@/components/client/contact-form";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-12 mt-20">
      <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
        Have a Cool Project?
      </h1>
      <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-left font-bold">
        Contact Us!
      </h1>
      <div className="">
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
