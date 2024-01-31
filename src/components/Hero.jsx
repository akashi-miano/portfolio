import { FaSquareXTwitter, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import avatar from "../../public/assets/avatar.jpg";
import developerAnimation from "../../public/animation/developerAnimation.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-16 dark:bg-[#333] hero duration-300">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div className="text-section flow-content--m">
            <img
              src={avatar}
              alt="Avatar"
              className="w-[100px] h-[100px] rounded-full border-4 border-orange-500"
            />
            <motion.h1
              className="text-4xl dark:text-title"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            >
              Software developer, frounder, and amaeur astronautl
            </motion.h1>
            <p className="dark:text-subtitle text-md max-w-[550px]">
              My journey in web development has been marked by a commitment to
              creating seamless and intuitive interfaces that not only meet but
              exceed user expectations. I thrive on the challenges of optimizing
              performance, ensuring cross-browser compatibility, and delivering
              visually stunning websites.
            </p>
            <ul className="flex items-center gap-4 socials">
              <li>
                <a href="">
                  <FaTwitter
                    size={30}
                    className="duration-300 dark:text-subtitle dark:hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram
                    size={30}
                    className="duration-300 dark:text-subtitle dark:hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithub
                    size={30}
                    className="duration-300 dark:text-subtitle dark:hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin
                    size={30}
                    className="duration-300 dark:text-subtitle dark:hover:text-white"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="img-wrapper">
            <Lottie animationData={developerAnimation} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
