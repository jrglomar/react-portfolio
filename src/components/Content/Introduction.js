import React from "react";
// import Button from "../UI/Button";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className={introductionWrapperStyle}>
        <div className={textContentWrapperStyle}>
          <div className="float-left">
            <div className="font-semibold text-tertiary dark:text-sub-tertiary">
              Hi, my name is
            </div>
            <span className="font-bold text-[3.5rem] desktop:text-[5rem] text-secondary dark:text-sub-secondary">
              John Raven Glomar
            </span>
            <div className="text-gray-dark dark:text-gray w-full text-[1rem]">
              I'm a junior software engineer. I graduated from the Polytechnic
              University of the Philippines in Quezon City with a bachelor's
              degree in Information Technology.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
        </div>
      </div>
    </section>
  );
};

const introductionWrapperStyle = `h-screen flex flex-col justify-center align-center font-monospace text-[1.2rem] desktop:mx-[2em] py-[20vh]`;
const textContentWrapperStyle = `flex flex-col desktop:border-b-8 rounded-xl mx-[10vw] items-center desktop:p-[10vw] w-auto text-main dark:text-gray-light`;

export default Introduction;
