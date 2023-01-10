import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const SkillList = () => {
  return (
    <Fade duration={2500} cascade bottom>
      <div className="">
        <span className={ulTitle}>Frontend</span>
        <ul className={ulStyle}>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Javascript
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            React
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Vue
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            jQuery
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            HTML
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            CSS
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Tailwind
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Bootstrap
          </li>
        </ul>
      </div>
      <div className="">
        <span className={ulTitle}>Backend</span>
        <ul className={ulStyle}>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Java
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Spring Boot
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            PHP
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Laravel
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            CodeIgniter
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Python
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            FastAPI
          </li>
        </ul>
      </div>
      <div className="">
        <span className={ulTitle}>Others</span>
        <ul className={ulStyle}>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Version Control (Git)
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            Postman (API Test & Documentation)
          </li>
          <li>
            {" "}
            <span className={faStyleArrow}>
              <FaArrowRight />
            </span>
            SDLC (Agile)
          </li>
        </ul>
      </div>
    </Fade>
  );
};

const ulStyle = ` text-[0.8rem]  text-gray-dark dark:text-gray`;
const ulTitle = `text-[0.9rem] font-[] text-secondary dark:text-sub-secondary`;
const faStyleArrow = `inline-block text-[0.6rem] pr-2 text-tertiary dark:text-sub-quaternary`;

export default SkillList;
