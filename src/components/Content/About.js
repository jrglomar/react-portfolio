import React from "react";
import Skills from "./Skills";
import Fade from "react-reveal/Fade";
import MyImage from "../../assets/images/my_image.jpg";

const About = () => {
  return (
    <section id="about">
      <Fade duration={2500}>
        <div className="h-screen  flex justify-center font-monospace m-[10vw] ">
          <div className=" justify-evenly hidden desktop:flex tablet:flex">
            <div className="flex items-center justify-center">
              <img
                className="rounded-lg"
                src={MyImage}
                width="700"
                alt=""
              ></img>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full desktop:pl-[10vw] tablet:pl-[10vw] pl-0 text-secondary dark:text-sub-main ">
            <div className="float-left py-5 font-semibold text-sub-quaternary dark:text-sub-tertiary text-[1.2rem] ">
              About Me{" "}
              <span className="inline-block w-1/2 h-[3px] align-middle bg-tertiary dark:bg-sub-quaternary m-4"></span>
            </div>
            <Fade duration={2500} cascade bottom>
              <div className="text-[0.9rem] text-gray-dark dark:text-gray">
                <div className="pb-5">
                  Hi, you can call me Raven. I was born in Quezon City.{" "}
                  <span className="text-secondary dark:text-sub-secondary">
                    I graduated from the Polytechnic University of the
                    Philippines in Quezon City with a bachelor's degree in
                    Information Technology.
                  </span>{" "}
                  I'm also presently residing in Quezon City.
                </div>
                <div className="pb-5">
                  <span className="text-secondary dark:text-sub-secondary">
                    I am now working as a Junior Software Engineer at Cognizant
                    Softvision.
                  </span>{" "}
                  My primary goal is to strengthen my fundamental understanding
                  so that I can easily adapt to this developing technological
                  stack.
                </div>
                <div className="pb-5">
                  Basketball and video games are two of my favorite hobbies.{" "}
                  <span className="text-secondary dark:text-sub-secondary">
                    I like drinking coffee while trying to accomplish anything.
                  </span>{" "}
                  I also enjoy hanging out with my pals and going on motorcycle
                  rides.
                </div>
              </div>
            </Fade>
            <div className="float-left py-5 font-semibold text-sub-quaternary dark:text-sub-tertiary text-[1.2rem]">
              Knowledges{" "}
              <span className="inline-block w-1/2 h-[3px] align-middle  bg-tertiary dark:bg-sub-quaternary m-4"></span>
            </div>
            <Skills />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
