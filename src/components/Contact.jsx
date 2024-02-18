import { SlEnvolope } from "react-icons/sl";
import Lottie from "lottie-react";
import doneAnimation from "../../public/animation/done-animation.json";
import envelopeAnimation from "../../public/animation/animatedEnvelope.json";
import React, { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const schema = z.object({
  email: z.string().email({ message: "Enter valid Email address" }),
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  message: z
    .string()
    .min(10, { message: "Message length must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_6ju217h",
        "template_k86b5xg",
        form.current,
        "jMHt5msMMzPaqPJfK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    setSubmitted(true);
    sendEmail();
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  return (
    <section className="py-28 dark:bg-[#333] dark:text-white" id="contact">
      <div className="container">
        <header className="mb-6" data-aos="zoom-in" data-aos-delay="400">
          <h2 className="flex items-center gap-4 text-3xl font-bold">
            <SlEnvolope
              size={35}
              className="dark:text-subtitle"
              aria-hidden="true"
            />
            Contact Us
          </h2>
        </header>
        <form
          className="grid items-center md:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
        >
          <div
            className="inputs-wrapper flow-content--m"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <div className="input-wrapper">
              <label
                htmlFor="name"
                className="inline-block mb-2 dark:text-subtitle"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-2 py-1 placeholder:text-gray-500 dark:bg-[#222]  rounded-md border dark:border-gray-600 outline-none focus:dark:border-cyan-500 duration-300 border-zinc-700"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-md text-red-500">{errors.name?.message}</p>
              )}
            </div>
            <div className="input-wrapper">
              <label
                htmlFor="email"
                className="inline-block mb-2 dark:text-subtitle"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-2 py-1 placeholder:text-gray-500 dark:bg-[#222]  rounded-md border dark:border-gray-600 outline-none focus:dark:border-cyan-500 duration-300 border-zinc-700"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-md text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="input-wrapper">
              <label
                htmlFor="message"
                className="inline-block mb-2 dark:text-subtitle"
              >
                Email Address
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message "
                className="w-full px-2 py-1 placeholder:text-gray-500 -subtitle dark:bg-[#222] rounded-md border dark:border-gray-600 min-h-[250px] max-h-[300px] resize-y outline-none focus:dark:border-cyan-500 duration-300 border-zinc-700"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-md text-red-500">
                  {errors.message?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={
                isValid
                  ? "px-8 py-2 rounded-md bg-[#222] hover:bg-[#000] duration-300 text-white"
                  : "px-8 py-2 rounded-md bg-gray-600  text-white duration-300 "
              }
            >
              Submit
            </button>
            {isSubmitted ? (
              <div className="flex items-center gap-4">
                <span className="text-green-500 duration-300 text-md opacity-1">
                  Your message was sent successfully
                </span>
                <Lottie
                  animationData={doneAnimation}
                  loop={false}
                  className="text-[25px]"
                />
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-green-500 duration-300 opacity-0 text-md">
                  Your message was sent successfully
                </span>
                <Lottie
                  animationData={doneAnimation}
                  className="text-[25px] opacity-0"
                />
              </div>
            )}
          </div>
          <div
            className="img-wrapper order-[-1] md:order-[0]"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <Lottie animationData={envelopeAnimation} className="w-full" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
