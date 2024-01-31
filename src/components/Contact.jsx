import { SlEnvolope } from "react-icons/sl";
import Lottie from "lottie-react";
import doneAnimation from "../public/animation/done-animation.json";
import envelopeAnimation from "../public/animation/animatedEnvelope.json";
import { useState } from "react";
const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="py-16 dark:bg-[#333] dark:text-white">
      <div className="container">
        <header className="mb-8">
          <h2 className="flex items-center gap-4 text-3xl font-bold">
            <SlEnvolope size={35} className="text-subtitle" />
            Contact Us
          </h2>
          <p></p>
        </header>
        <form
          className="grid items-center md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="inputs-wrapper flow-content--m">
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
                className="w-full px-2 py-1 placeholder:text-gray-500 dark:bg-[#222]  rounded-md border dark:border-gray-600 outline-none focus:dark:border-cyan-500 duration-300"
                placeholder="Email Address"
              />
            </div>
            <div className="input-wrapper">
              <label
                htmlFor="message"
                className="inline-block mb-2 dark:text-subtitle"
              >
                Email Address
              </label>
              <textarea
                name=""
                id="message"
                placeholder="Message "
                className="w-full px-2 py-1 placeholder:text-gray-500 -subtitle dark:bg-[#222] rounded-md border dark:border-gray-600 min-h-[200px] max-h-[300px] resize-y outline-none focus:dark:border-cyan-500 duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-2 rounded-md dark:bg-[#222] hvr-rectangle-out"
            >
              Submit
            </button>
            {isSubmitted ? (
              <p className="flex items-center gap-4">
                <span className="text-green-500 duration-300 text-md opacity-1">
                  Your message was sent successfully
                </span>
                <Lottie
                  animationData={doneAnimation}
                  loop={false}
                  className="text-[25px]"
                />
              </p>
            ) : (
              <p className="flex items-center gap-4">
                <span className="text-green-500 duration-300 opacity-0 text-md">
                  Your message was sent successfully
                </span>
                <Lottie
                  animationData={doneAnimation}
                  className="text-[25px] opacity-0"
                />
              </p>
            )}
          </div>
          <div className="img-wrapper order-[-1] md:order-[0]">
            <Lottie animationData={envelopeAnimation} className="w-full" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
