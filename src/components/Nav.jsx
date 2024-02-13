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
      <nav
        className="dark:bg-[#222] nav dark:text-white py-4 duration-300 sticky top-0 left-0 z-[999] shadow-lg bg-white"
        role="navigation"
        aria-label="navigation"
      >
        <div className="container flex justify-between items-center">
          <ul className="items-center gap-4 hidden md:flex">
            <li>
              <a href="#" aria-label="About me">
                About
              </a>
            </li>
            <li>
              <a href="#projects" aria-label="My projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" aria-label="Contact me">
                Contact
              </a>
            </li>
          </ul>
          <div className="mobile-menu  md:hidden">
            <button aria-label="mobile menu" role="button">
              <GiHamburgerMenu
                size={35}
                onClick={() => setNav(!nav)}
                tabIndex={"0"}
                role="img"
                alt="Hamburger menu icon for mobile menu"
              />
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
                  aria-label="About me"
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
                  aria-label="My projects"
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
                  aria-label="Contact me"
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
            aria-label="Dark and light mode toggler"
            role="button"
            tabIndex={"0"}
          >
            {theme === "light" ? (
              <FaSun size={20} role="img" alt={"Light Mode"} />
            ) : (
              <FaMoon size={20} role="img" alt="Dark Mode" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
