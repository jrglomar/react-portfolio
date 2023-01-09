import React from "react";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <div className="flex item-start">
      <div className="flex flex-row justify-between w-full flex-wrap">
        <SkillList />
      </div>
    </div>
  );
};

export default Skills;
