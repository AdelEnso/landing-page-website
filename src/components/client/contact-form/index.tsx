"use client";

import { MailIcon } from "@/assets/svgs/mail";
import { MessageIcon } from "@/assets/svgs/message";
import { PhoneIcon } from "@/assets/svgs/phone";
import { SendIcon } from "@/assets/svgs/send";
import { SubjectIcon } from "@/assets/svgs/subject";
import { UserIcon } from "@/assets/svgs/user";
import React, { useRef, useState } from "react";
import { AnimationDiv } from "../animation-item";

export const Form = () => {
  const nameRef: any = useRef();
  const phoneRef: any = useRef();
  const emailRef: any = useRef();
  const subjectRef: any = useRef();
  const messageRef: any = useRef();
  const [error, setError]: any = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const validationSchema: any = {
    name: {
      validate: (value: any) => value.trim().length > 0,
      errorMessage: "Please enter your name.",
    },
    phone: {
      validate: (value: any) => /^\d+$/.test(value) && value.trim().length > 0,
      errorMessage: "Please enter a valid phone number.",
    },
    email: {
      validate: (value: any) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.trim().length > 0,
      errorMessage: "Please enter a valid email address.",
    },
    subject: {
      validate: (value: any) => value.trim().length > 0,
      errorMessage: "Please enter the subject.",
    },
    message: {
      validate: (value: any) => value.trim().length > 0,
      errorMessage: "Please enter the message.",
    },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Getting the values from the refs
    const formData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    const invalidFields = Object.entries(formData).reduce(
      (errors, [fieldName, value]) => {
        const fieldValidation: any = validationSchema[fieldName];
        if (!fieldValidation.validate(value)) {
          //@ts-ignore
          errors[fieldName] = fieldValidation.errorMessage;
        } else {
          //@ts-ignore
          errors[fieldName] = ""; // Set the error message to an empty string or remove this line if you don't need to store empty error messages
        }
        return errors;
      },
      {}
    );

    setError(invalidFields); // Update the error state with all the error messages

    // Check if there are any error messages
    const hasErrors = Object.values(invalidFields).some(
      (error) => error !== ""
    );

    const data = {
      data: {
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Subject: formData.subject,
        Help: formData.message,
      },
    };
    if (!hasErrors) {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:1337/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          // Request successful, handle the response
          // Your code here...

          nameRef.current.value = "";
          phoneRef.current.value = "";
          emailRef.current.value = "";
          subjectRef.current.value = "";
          messageRef.current.value = "";
        } else {
          // Request failed, handle the error
          console.error("Failed to post data");
        }
      } catch (e) {
        setSuccess("An error occurred");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-24">
      <div className="mb-12">
        <label htmlFor="name" className="flex items-center">
          <UserIcon />
          <input
            type="text"
            id="name"
            ref={nameRef}
            placeholder="Name"
            className="w-full p-2 border-b border-dec-text border-opacity-40 focus:border-gray-text hover:border-gray-text focus:outline-none hover:transition-transform hover:duration-500"
          />
        </label>
        {error.name && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.name}
          </p>
        )}
      </div>

      <div className="mb-12">
        <label htmlFor="phone" className="flex items-center">
          <PhoneIcon />
          <input
            type="text"
            id="phone"
            ref={phoneRef}
            placeholder="Phone"
            className="w-full p-2 border-b border-dec-text border-opacity-40 focus:border-gray-text hover:border-gray-text focus:outline-none hover:transition-transform hover:duration-500"
          />
        </label>
        {error.phone && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.phone}
          </p>
        )}
      </div>

      <div className="mb-12">
        <label htmlFor="email" className="flex items-center">
          <MailIcon />
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Email"
            className="w-full p-2 border-b border-dec-text border-opacity-40 focus:border-gray-text hover:border-gray-text focus:outline-none hover:transition-transform hover:duration-500"
          />
        </label>
        {error.email && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.email}
          </p>
        )}
      </div>

      <div className="mb-12">
        <label htmlFor="subject" className="flex items-center">
          <SubjectIcon />
          <input
            type="text"
            id="subject"
            ref={subjectRef}
            placeholder="Subject"
            className="w-full p-2 border-b border-dec-text border-opacity-40 focus:border-gray-text hover:border-gray-text focus:outline-none hover:transition-transform hover:duration-500"
          />
        </label>
        {error.subject && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.subject}
          </p>
        )}
      </div>

      <div className="mb-12">
        <label htmlFor="message" className="flex items-start">
          <MessageIcon />

          <textarea
            id="message"
            ref={messageRef}
            placeholder="How can we help you?"
            className="w-full p-2 border-b border-dec-text border-opacity-40 focus:border-gray-text hover:border-gray-text focus:outline-none hover:transition-transform hover:duration-500"
            rows={2}
          />
        </label>
        {error.message && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.message}
          </p>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <button
          disabled={loading}
          type="submit"
          className="px-6 py-2 md:px-12 md:py-4 text-white bg-button rounded hover:bg-dec-text flex justify-center items-center gap-2 font-medium texts disabled:cursor-wait disabled:bg-dec-text"
        >
          <SendIcon />
          Get in Touch
        </button>
        <AnimationDiv>
          <p className="text-dec-text font-semibold text-lg">{success}</p>
        </AnimationDiv>
      </div>
    </form>
  );
};
