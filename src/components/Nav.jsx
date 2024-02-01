import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaM, FaSun } from "react-icons/fa6";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <>
      <nav className="dark:bg-[#222] nav dark:text-white py-8 duration-300">
        <div className="container flex justify-between items-center">
          <ul className="items-center gap-4 hidden md:flex">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="mobile-menu  md:hidden">
            <button>
              <GiHamburgerMenu size={35} onClick={() => setNav(!nav)} />
            </button>
            <ul
              className={
                nav
                  ? "fixed top-0 inset-0 bg-[#fdf2e9]  flex  justify-center items-center flex-col z-[999] gap-4 duration-300 dark:bg-[#111]"
                  : "fixed top-0 inset-0 bg-[#fdf2e9]  flex  justify-center items-center flex-col z-[999] gap-4 duration-300 translate-x-[-100%] dark:bg-[#111]"
              }
            >
              <IoClose
                className="absolute top-5 right-10 dark:text-white"
                size={40}
                onClick={() => setNav(!nav)}
              />
              <li className="item" data-text="About">
                <a
                  href="#"
                  className="!text-6xl"
                  onClick={() => {
                    setNav(!nav);
                  }}
                >
                  About
                </a>
              </li>
              <li className="item" data-text="Projects">
                <a
                  href="#projects"
                  className="!text-6xl"
                  onClick={() => {
                    setNav(!nav);
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="item" data-text="Contact">
                <a
                  href="#contact"
                  className="!text-6xl"
                  onClick={() => {
                    setNav(!nav);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="flex justify-end dark:text-white rounded-full border border-orange-500 p-4 dark:bg-[#333]"
            onClick={changeTheme}
          >
            {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
