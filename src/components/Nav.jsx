import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaM, FaSun } from "react-icons/fa6";

const Nav = () => {
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
      <nav className="dark:bg-[#222] nav dark:text-white py-4 duration-300">
        <div className="container flex justify-between ">
          <ul className="flex items-center gap-4">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <button
            className="flex justify-end p-4 rounded-full 400 dark:text-white"
            onClick={changeTheme}
          >
            {theme === "light" ? <FaSun size={30} /> : <FaMoon size={30} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
