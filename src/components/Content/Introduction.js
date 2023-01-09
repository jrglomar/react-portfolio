import React from "react";
// import Button from "../UI/Button";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className={introductionWrapperStyle}>
        <div className={textContentWrapperStyle}>
          <div className="float-left">
            <div className="font-semibold text-sub-quaternary dark:text-sub-tertiary">
              Hi, my name is
            </div>
            <span className="font-bold text-[5rem] text-tertiary dark:text-sub-secondary">
              John Raven Glomar
            </span>
            <div className="text-gray-dark dark:text-gray w-3/4 ">
              I am a junior software engineer. I graduated from the Polytechnic
              University of the Philippines in Quezon City with a bachelor's
              degree in Information Technology.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* <Button buttonName={"Click Here"} classes={btnClickHereStyle} /> */}
        </div>
      </div>
    </section>
  );
};

const introductionWrapperStyle = `h-screen flex flex-col justify-center font-monospace text-[1.2rem] mx-[2em] py-[20vh]`;
// const btnClickHereStyle = `p-3 w-80 border-2 border-sub-secondary text-sub-main hover:bg-sub-main hover:text-sub-quaternary rounded-full`;
const textContentWrapperStyle = `flex flex-col pl-[15vw] items-center py-[6em] w-auto text-main dark:text-gray-light`;

export default Introduction;
