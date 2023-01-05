import React, { useState } from "react";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  const [expDescription, setExpDescription] = useState(
    "I am hired as Junior Software Engineer at Cognizant Softvision last October 2022"
  );
  const [expJobTitle, setExpJobTitle] = useState("Junior Software Engineer");
  const [expJobCompany, setExpJobCompany] = useState("Cognizant Softvision");

  const handleBtnExperience = (selectedExp) => {
    if (selectedExp === "Cognizant Softvision") {
      setExpDescription(
        "I am hired as Junior Software Engineer at Cognizant Softvision last October 2022."
      );
      setExpJobTitle("Junior Software Engineer");
      setExpJobCompany("Cognizant Softvision");
    } else if (selectedExp === "PUPQC") {
      setExpDescription(
        "I lead the developer team that developed a project called Faculty Monitoring System a web application  as our OJT in our school last June 2022."
      );
      setExpJobTitle("Web Developer");
      setExpJobCompany("Polytechnic University of the Philippines");
    } else if (selectedExp === "Freelance") {
      setExpDescription(
        "When I was a student I used to work on some freelance project mostly a Web Application."
      );
      setExpJobTitle("Software Developer");
      setExpJobCompany("Freelance");
    } else if (selectedExp === "Software Research Group") {
      setExpDescription(
        "I've been part of a group called Software Research Group in our school who aims to develop school system solution that helped university staff to fullfil their work with efficiency."
      );
      setExpJobTitle("Web Developer");
      setExpJobCompany("Software Research Group");
    }
  };

  return (
    <section id="experience">
      <div className={experienceWrapperStyle}>
        <div className={experienceContentStyle}>
          <ExperienceList
            onHandleBtnExp={handleBtnExperience}
            expJobTitle={expJobTitle}
            expJobCompany={expJobCompany}
            expDescription={expDescription}
          />
        </div>
      </div>
    </section>
  );
};

const experienceWrapperStyle = `h-screen py-[30vh] flex justify-center items-center font-monospace text-[1.2rem] w-full`;
const experienceContentStyle = `flex py-[5vh] flex-col items-start w-2/3`;

export default Experience;
