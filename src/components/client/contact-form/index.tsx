"use client";

import { MailIcon } from "@/assets/svgs/mail";
import { MessageIcon } from "@/assets/svgs/message";
import { PhoneIcon } from "@/assets/svgs/phone";
import { SendIcon } from "@/assets/svgs/send";
import { SubjectIcon } from "@/assets/svgs/subject";
import { UserIcon } from "@/assets/svgs/user";
import React, { useRef, useState } from "react";

export const Form = () => {
  const nameRef: any = useRef();
  const phoneRef: any = useRef();
  const emailRef: any = useRef();
  const subjectRef: any = useRef();
  const messageRef: any = useRef();
  const [error, setError] = useState({ fields: "", mail: "" });
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Getting the values from the refs
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    // Validate form fields
    if (!name || !phone || !email || !subject || !message) {
      setError({ ...error, fields: "Please fill in all fields." });
      return;
    }

    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setError({ ...error, mail: "Please enter a valid email address." });
      return;
    }

    // Handle form submission
    // Your code here...

    // Reset the form
    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
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
        {error.fields && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.fields}
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
        {error.fields && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.fields}
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
        {error.fields && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.fields} {error.mail && "/" + error.mail}
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
        {error.fields && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.fields}
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
        {error.fields && (
          <p className="text-error text-sm font-normal mt-2  ml-6">
            {error.fields}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="px-6 py-2 md:px-12 md:py-4 text-white bg-button rounded hover:bg-dec-text flex justify-center items-center gap-2 font-medium texts"
      >
        <SendIcon />
        Get in Touch
      </button>
    </form>
  );
};
