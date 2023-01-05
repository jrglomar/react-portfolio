import React from "react";
import Skills from "./Skills";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section id="about">
      <Fade duration={4000}>
      <div className="h-screen flex justify-center font-monospace m-[10vw] ">
        <div className="flex justify-evenly md:w-0">
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg"
              src="/my_image.png"
              width="600"
              alt=""
            ></img>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full pl-[10vw] sm:pl-0 text-secondary dark:text-sub-main">
          <Fade duration={2500} cascade right>
          <h1 className="float-left py-5 font-semibold text-sub-quaternary dark:text-sub-tertiary text-[1.3rem]">
            About Me
          </h1>
          <div className="text-[1rem] text-gray-dark dark:text-gray">
            <div className="pb-5">
              Hi, just call me Raven.{" "}
              <span className="text-secondary dark:text-sub-secondary">
                I am a Software Engineer
              </span>{" "}
              from Quezon City. I love drinking coffee. I also love to play
              basketball and computer games.
            </div>
            <div>
              <span className="text-secondary dark:text-sub-secondary">
                I am currently working at Cognizant Softvision.
              </span>{" "}
              My main focus is to improve my base knowledge so I can adapt fast
              on this emerging technology stacks.
            </div>
          </div>
          <h1 className="float-left py-5 font-semibold text-sub-quaternary dark:text-sub-tertiary text-[1.3rem]">
            Knowledges
          </h1>
          <Skills />
          </Fade>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default About;
