import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight, FaLink } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
const filterOptions = [
  {
    id: 1,
    category: "All Projects",
  },
  { id: 2, category: "HTML & CSS" },
  { id: 3, category: "JavaScript" },
  { id: 4, category: "React & Tailwind" },
  { id: 5, category: "SASS" },
];

const card = [
  {
    id: 1,
    imgURL:
      "https://static.wikia.nocookie.net/kurokonobasuke/images/d/dc/Akashi232.png/revision/latest?cb=20151017234702",
    title: "Landing Page",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, debitis dicta exercitationem asperiores soluta vitae.",
    category: "sass",
  },
  {
    id: 2,
    imgURL:
      "https://static.wikia.nocookie.net/kurokonobasuke/images/d/dc/Akashi232.png/revision/latest?cb=20151017234702",
    title: "Landing Page",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, debitis dicta exercitationem asperiores soluta vitae.",
    category: "html & css",
  },
  {
    id: 3,
    imgURL:
      "https://static.wikia.nocookie.net/kurokonobasuke/images/d/dc/Akashi232.png/revision/latest?cb=20151017234702",
    title: "Landing Page",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, debitis dicta exercitationem asperiores soluta vitae.",
    category: "sass",
  },
  {
    id: 4,
    imgURL:
      "https://static.wikia.nocookie.net/kurokonobasuke/images/d/dc/Akashi232.png/revision/latest?cb=20151017234702",
    title: "Landing Page",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, debitis dicta exercitationem asperiores soluta vitae.",
    category: "sass",
  },
];
const Projects = () => {
  const [selected, setSelected] = useState("");

  const handleClick = (e) => {
    setSelected(e.target.value);
  };

  const filterItems = (arr) => {
    return arr.filter((item) => {
      return selected !== "" && selected !== "allprojects"
        ? item.category.toLowerCase().replace(/\s/g, "") === selected
        : item;
    });
  };
  return (
    <section className="projects min-h-screen dark:bg-[#222] duration-300 py-16">
      <div className="container">
        <div className="grid--1x2">
          <div className="flex flex-col gap-4 filter-items w-fit">
            {filterOptions.map(({ id, category }) => (
              <button
                key={id}
                className="px-8 py-2 text-lg rounded-md dark:text-white dark:bg-[#333] dark:hover:bg-[#111] duration-300"
                onClick={handleClick}
                value={category.toLocaleLowerCase().replace(/\s/g, "")}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="cards">
            <div className="grid gap-8 cards-wrapper card md:grid-cols-3">
              <AnimatePresence key={selected}>
                {filterItems(card).map(({ id, title, text, imgURL }) => (
                  <motion.div
                    key={id}
                    className="rounded-md card dark:bg-[#333] dark:text-white duration-300 hover:rotate-3 hover:scale-105 hover:cursor-pointer dark:border-2 dark:border-gray-600 dark:hover:border-cyan-500"
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    exit={{ transform: "scale(0)" }}
                    transition={{ type: "spring", damping: 8 }}
                  >
                    <div className="img-wrapper">
                      <img src={imgURL} alt="dummy img" className="w-full" />
                    </div>
                    <div className="p-6 font-semibold text-wrapper flow-content--m">
                      <h2 className="text-2xl">{title}</h2>
                      <p className="text-sm text-subtitle">{text}</p>
                    </div>
                    <div className="flex items-center justify-between px-6 pt-2 pb-6 links">
                      <div className="flex items-center gap-4 links-content">
                        <FaLink
                          size={30}
                          className="duration-300 cursor-pointer dark:hover:text-cyan-500"
                        />
                        <FaGithub
                          size={30}
                          className="duration-300 cursor-pointer dark:hover:text-cyan-500"
                        />
                      </div>
                      <div className="links-content">
                        <a
                          href=""
                          className="flex items-center gap-4 text-lg dark:text-cyan-500 group"
                        >
                          More{" "}
                          <FaArrowRight className="duration-300 group-hover:translate-x-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
