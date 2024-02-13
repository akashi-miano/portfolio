import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight, FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";
import { card } from "../../public/data/Card";
import { filterOptions } from "../../public/data/Card";
const Projects = () => {
  const [arr, setArr] = useState(card);
  const filterType = (category) => {
    setArr(
      card.filter((item) => {
        return category !== "all"
          ? item.category.toLowerCase() === category.toLowerCase()
          : true;
      })
    );
  };
  return (
    <section
      className="projects min-h-screen dark:bg-[#222] duration-300 py-28"
      id="projects"
    >
      <div className="container">
        <div className="grid--1x2">
          <div
            className="flex flex-col gap-4 filter-items w-fit"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {filterOptions.map(({ id, category }) => (
              <button
                key={id}
                className="px-8 py-2 text-lg rounded-md dark:text-white dark:bg-[#333] dark:hover:bg-[#111] dark:focus:bg-[#111] duration-300 hover:bg-cyan-500 hover:text-white focus:bg-cyan-500 focus:text-white"
                onClick={() =>
                  category === "All Projects"
                    ? filterType("all")
                    : category === "HTML & CSS"
                    ? filterType("html & css")
                    : category === "React & Tailwind"
                    ? filterType("react & tailwind")
                    : category === "JavaScript"
                    ? filterType("javascript")
                    : category === "Tailwind"
                    ? filterType("tailwind")
                    : filterType("sass")
                }
              >
                {category}
              </button>
            ))}
          </div>
          <div className="cards">
            <div
              className="grid gap-8 cards-wrapper card md:grid-cols-3"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {arr.map(({ id, title, text, imgURL, link, repo }) => (
                <motion.div
                  key={id}
                  className="rounded-md card dark:bg-[#333] dark:text-white duration-300 hover:rotate-3 hover:!scale-105 hover:cursor-pointer dark:border-2 dark:border-gray-600 dark:hover:border-cyan-500"
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(0)" }}
                  transition={{ type: "spring", damping: 8 }}
                >
                  <div className="img-wrapper">
                    <img
                      src={imgURL}
                      alt={`${title}'s project image`}
                      className="w-full min-h-[200px] object-contain"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="high"
                      role="presentation"
                      srcSet={`${imgURL} 300w`}
                    />
                  </div>
                  <div className="p-6 font-semibold text-wrapper flow-content--m">
                    <h2 className="text-2xl">{title}</h2>
                    <p className="text-md text-subtitle">{text}</p>
                  </div>
                  <div className="flex items-center justify-between px-6 pt-2 pb-6 links">
                    <div className="flex items-center gap-4 links-content">
                      <a
                        href={link}
                        target="_blank"
                        aria-label={`Live preview link will take you to ${title}`}
                      >
                        <FaLink
                          size={30}
                          className="duration-300 cursor-pointer hover:text-cyan-500"
                        />
                      </a>
                      <a
                        href={repo}
                        target="_blank"
                        aria-label={`Live preview link will take you to the github page of ${title}`}
                      >
                        <FaGithub
                          size={30}
                          className="duration-300 cursor-pointer dark:hover:text-cyan-500 hover:text-green-600"
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
