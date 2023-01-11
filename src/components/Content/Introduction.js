import React from "react";
// import Button from "../UI/Button";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className={introductionWrapperStyle}>
        <div className={textContentWrapperStyle}>
          <div className="font-semibold text-tertiary dark:text-sub-tertiary">
            Hi, my name is
          </div>
          <span className="font-bold text-[5rem] desktop:text-[5rem] text-secondary dark:text-sub-secondary animate__animated animate__pulse animate__infinite  animate__slow">
            John Raven Glomar
          </span>
          <div className="text-gray-dark dark:text-gray w-full text-[1rem]">
            I'm a junior software engineer. I graduated from the Polytechnic
            University of the Philippines in Quezon City with a bachelor's
            degree in Information Technology. You can get in touch with me using
            the social media links on the left.
          </div>
        </div>
      </div>
    </section>
  );
};

const introductionWrapperStyle = `h-screen flex flex-col justify-center align-center font-monospace text-[1.2rem] desktop:mx-[2em] py-[20vh]`;
const textContentWrapperStyle = `flex flex-col rounded-xl mx-[10vw] desktop:p-[10vw] w-auto text-main dark:text-gray-light`;

export default Introduction;
