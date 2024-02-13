import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import Lottie from "lottie-react";
import avatar from "../../public/assets/image.jpg";
import developerAnimation from "../../public/animation/developerAnimation.json";

const Hero = () => {
  return (
    <section className="py-16 dark:bg-[#333] hero duration-300">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div
            className="text-section flow-content--m"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-[100px] h-[100px] rounded-full border-4 border-orange-500"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <h1
              className="text-4xl dark:text-title"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            >
              Front-End Dev | CSS Wizard 🧙‍♂️ | React.js | Next.js | Linux God |
              2nd year student @MMU | VIM user BTW
            </h1>
            <p className="dark:text-subtitle text-md max-w-[550px]">
              My journey in web development has been marked by a commitment to
              creating seamless and intuitive interfaces that not only meet but
              exceed user expectations. I thrive on the challenges of optimizing
              performance, ensuring cross-browser compatibility, and delivering
              visually stunning websites.
            </p>
            <ul className="flex items-center gap-4 socials">
              <li>
                <a
                  href="https://twitter.com/TrollerHD1"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter
                    size={30}
                    className="duration-300 dark:text-subtitle hover:text-cyan-500 dark:hover:text-white"
                    role="img"
                    aria-labelledby="twitter-title"
                    aria-describedby="twitter-desc"
                    alt="Twitter icon"
                  />
                  <title id="twitter-title" className="sr-only">
                    Twitter
                  </title>
                  <desc id="twitter-desc" className="sr-only">
                    Takes you to my Twitter profile.
                  </desc>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akashi-miano"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub
                    size={30}
                    className="duration-300 dark:text-subtitle hover:text-green-600 dark:hover:text-white"
                    role="img"
                    alt="Github icon"
                    aria-labelledby="github-title"
                    aria-describedby="github-desc"
                  />
                  <title id="github-title" className="sr-only">
                    Github
                  </title>
                  <desc id="github-desc" className="sr-only">
                    Takes you to my Github profile.
                  </desc>
                </a>
              </li>
              <li>
                <a
                  href="https://www.frontendmentor.io/profile/akashi-miano"
                  target="_blank"
                  aria-label="Frontned Mentor"
                >
                  <SiFrontendmentor
                    size={30}
                    className="duration-300 dark:text-subtitle hover:text-red-500 dark:hover:text-white"
                    role="img"
                    alt="Frontend mentor icon"
                    aria-labelledby="frotnendmentor-title"
                    aria-describedby="frotnendmentor-desc"
                  />
                  <title id="frotnendmentor-title" className="sr-only">
                    Frontend mentor
                  </title>
                  <desc id="frotnendmentor-desc" className="sr-only">
                    Takes you to my FroatnEnd mentor profile.
                  </desc>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdisalam-hussein-a704b3274/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin
                    size={30}
                    className="duration-300 dark:text-subtitle hover:text-blue-700 dark:hover:text-white"
                    role="img"
                    alt="Takes you to my Linkedin profile."
                    aria-labelledby="linkedin-title"
                    aria-describedby="linkedin-desc"
                  />
                  <title id="linkedin-title" className="sr-only">
                    Linkedin
                  </title>
                  <desc id="linkedin-desc" className="sr-only">
                    Takes you to my Linkedin profile.
                  </desc>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="img-wrapper"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <Lottie animationData={developerAnimation} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
