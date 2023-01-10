import { React, useState, useEffect } from "react";
import {
  // FaHouseUser,
  // FaInfo,
  // FaBriefcase,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Header = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  const handleLightToDarkToggle = () => {
    document.documentElement.classList.add(`dark`);
    localStorage.theme = "dark";
    setDarkToggle(true);
  };

  const handleDarkToLightToggle = () => {
    document.documentElement.classList.remove(`dark`);
    localStorage.theme = "light";
    setDarkToggle(false);
  };

  const getPreferMode = () => {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      handleDarkToLightToggle();
    } else {
      handleLightToDarkToggle();
    }
  };

  useEffect(() => {
    getPreferMode();
  });

  return (
    <div>
      <div className="fixed bg-sub-main dark:bg-main  font-monospace w-full z-10">
        <div className="text-[1.1rem] mx-[2em]">
          <div className="flex items-center justify-between py-5">
            <div className="flex justify-center tablet:justify-start desktop:justify-start w-full py-5 pr-10">
              {!darkToggle && (
                <button
                  className="flex flex-row"
                  onClick={handleLightToDarkToggle}
                >
                  <FaMoon className="text-[1.5rem]" />{" "}
                  <span className="px-4 text-gray-dark"> Dark</span>
                </button>
              )}
              {darkToggle && (
                <button
                  className="flex flex-row"
                  onClick={handleDarkToLightToggle}
                >
                  <FaSun className="text-sub-main text-[1.5rem]" />{" "}
                  <span className="px-4 text-gray-light"> Light</span>
                </button>
              )}
            </div>
            <div className="hidden tablet:flex desktop:flex flex-row justify-evenly text-gray-light ">
              <a className={aStyle} href="#introduction">
                {/* <FaHouseUser className={faStyle} />{" "} */}
                <div className={spanStyle}>Home</div>
              </a>
              <a className={aStyle} href="#about">
                {/* <FaInfo className={faStyle} /> */}
                <span className={spanStyle}>About</span>
              </a>
              <a className={aStyle} href="#experience">
                {/* <FaBriefcase className={faStyle} /> */}
                <span className={spanStyle}>Experiences</span>
              </a>
              <a className={aStyle} href="#project">
                {/* <FaBriefcase className={faStyle} /> */}
                <span className={spanStyle}>Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const faStyle = `text-sub-quaternary dark:text-sub-secondary text-[1.2rem] mt-[2px]`;
const spanStyle = `px-3  text-gray-dark dark:text-sub-main`;
const aStyle = `px-[3vw] flex flex-row`;
export default Header;
