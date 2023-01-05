import React from "react";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className="flex item-start">
      <Fade duration={2500} cascade right>
      <div className="flex flex-row justify-between w-full">
        <div className="">
          <span className={ulTitle}>Frontend</span>
          <ul className={ulStyle}>
            <li>Javascript(ES6)</li>
            <li>React</li>
            <li>Vue</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="">
          <span className={ulTitle}>Backend</span>
          <ul className={ulStyle}>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>CodeIgniter</li>
            <li>Python</li>
            <li>FastAPI</li>
          </ul>
        </div>
        <div className="">
          <span className={ulTitle}>Others</span>
          <ul className={ulStyle}>
            <li>Version Control (Git)</li>
            <li>Postman (API Test & Documentation)</li>
            <li>SDLC (Agile)</li>
          </ul>
        </div>
      </div>

      </Fade>
    </div>
  );
};

const ulStyle = `list-disc text-[0.9rem] pl-[1vw] text-gray-dark dark:text-gray`;
const ulTitle = `text-[1.1rem] font-[] text-secondary dark:text-sub-secondary`;

export default Skills;
