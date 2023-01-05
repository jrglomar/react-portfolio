import { React, useState } from "react";
import Fade from "react-reveal/Fade";

const ExperienceList = (props) => {
  const [cognizantState, setCognizantState] = useState(
    "bg-secondary dark:bg-sub-quaternary"
  );
  const [pupState, setPupState] = useState("");
  const [freelanceState, setFreelanceState] = useState("");
  const [srgState, setSrgState] = useState("");

  const handleBtnExperience = (event) => {
    props.onHandleBtnExp(event.target.innerHTML);

    if (event.target.innerHTML === "Cognizant Softvision") {
      setCognizantState("bg-secondary dark:bg-sub-quaternary");
      setPupState("");
      setFreelanceState("");
      setSrgState("");
    } else if (event.target.innerHTML === "PUPQC") {
      setCognizantState("");
      setPupState("bg-secondary dark:bg-sub-quaternary");
      setFreelanceState("");
      setSrgState("");
    } else if (event.target.innerHTML === "Freelance") {
      setCognizantState("");
      setPupState("");
      setFreelanceState("bg-secondary dark:bg-sub-quaternary");
      setSrgState("");
    } else if (event.target.innerHTML === "Software Research Group") {
      setCognizantState("");
      setPupState("");
      setFreelanceState("");
      setSrgState("bg-secondary dark:bg-sub-quaternary");
    }
  };

  return (
    <Fade duration={2500} cascade bottom>
      <div>
        <h1 className="font-semibold text-sub-quaternary dark:text-sub-tertiary">
          Experiences
        </h1>
        <Fade duration={2500} cascade bottom>
          <div className="flex flex-row justify-between py-10">
            <ul className=" text-main dark:text-sub-main ">
              <li>
                <button
                  onClick={handleBtnExperience}
                  className={companyTitleStyle + " " + cognizantState}
                >
                  Cognizant Softvision
                </button>
              </li>
              <li>
                <button
                  onClick={handleBtnExperience}
                  className={companyTitleStyle + " " + pupState}
                >
                  PUPQC
                </button>
              </li>
              <li>
                <button
                  onClick={handleBtnExperience}
                  className={companyTitleStyle + " " + freelanceState}
                >
                  Freelance
                </button>
              </li>
              <li>
                <button
                  onClick={handleBtnExperience}
                  className={companyTitleStyle + " " + srgState}
                >
                  Software Research Group
                </button>
              </li>
            </ul>
            <div className="flex flex-col w-2/3 border-2 border-secondary dark:border-sub-quaternary rounded-lg p-10">
              <div className="text-sub-tertiary font-semibold dark:text-sub-secondary text-[1.1rem] ">
                {props.expJobTitle}{" "}
                <div className="text-secondary dark:text-sub-quaternary">
                  @{props.expJobCompany}
                </div>{" "}
              </div>
              <div className="text-dark-gray dark:text-gray text-[0.9rem] w-full">
                {props.expDescription}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

const companyTitleStyle = `p-2 mx-10 text-[1rem] rounded-md hover:text-secondary text-gray-dark dark:text-gray-light hover:text-gray-dark dark:hover:text-gray-light text-left`;

export default ExperienceList;
