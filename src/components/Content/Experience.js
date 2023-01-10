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
        "I started working for Cognizant Softvision in October 2022 as a Junior Software Engineer."
      );
      setExpJobTitle("Junior Software Engineer");
      setExpJobCompany("Cognizant Softvision");
    } else if (selectedExp === "PUPQC") {
      setExpDescription(
        "As our OJT in our school in June 2022, I was in charge of the development team that created a project called Faculty Monitoring System, a web application."
      );
      setExpJobTitle("Web Developer");
      setExpJobCompany("Polytechnic University of the Philippines");
    } else if (selectedExp === "Freelance") {
      setExpDescription(
        "I used to work on some freelance projects while I was a student, primarily web applications."
      );
      setExpJobTitle("Software Developer");
      setExpJobCompany("Freelance");
    } else if (selectedExp === "Software Research Group") {
      setExpDescription(
        "I've been a member of a group at my school called the Software Research Group that tries to provide school system solutions that assist university professionals in doing their duties effectively."
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
const experienceContentStyle = `flex py-[5vh] flex-col items-start w-5/6 desktop:w-2/3`;

export default Experience;
