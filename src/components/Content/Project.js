import { React } from "react";
import ProjectList from "./ProjectList";

const Project = () => {
  return (
    <section id="project">
      <div className={projectWrapperStyle}>
        <div className="h-3/4 w-4/5">
          <ProjectList />
        </div>
      </div>
    </section>
  );
};

const projectWrapperStyle = `h-full py-[10vh] flex justify-center items-center font-monospace text-[1.2rem] w-full`;

export default Project;
