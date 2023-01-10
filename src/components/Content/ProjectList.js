import React from "react";
import Fade from "react-reveal/Fade";

const ProjectList = () => {
  return (
    <Fade duration={2500} cascade>
      <div className="py-[5vh] font-semibold text-sub-quaternary dark:text-sub-tertiary">
        Projects
      </div>
      <div className="flex flex-col">
        <div className="flex justify-evenly flex-wrap">
          {PROJECT_LIST.map((project) => (
            <Fade key={project.title} duration={2500} cascade bottom>
              <div className="m-4 p-4 w-1/2 desktop:w-1/4 border-y-2 rounded-lg border-b-sub-tertiary dark:border-b-secondary border-tertiary dark:border-sub-tertiary">
                <a
                  href={project.links}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center"
                >
                  <button className="text-gray-light text-center rounded-lg bg-sub-quaternary dark:bg-sub-quaternary  dark:text-gray-light m-2 p-2 sm:text-[0.6rem] text-[0.8rem] w-full hover:bg-sub-tertiary dark:hover:bg-sub-tertiary">
                    {project.title}
                  </button>
                </a>

                <div className="text-gray-dark dark:text-gray text-[0.8rem]">
                  {project.stacks.map((stack) => (
                    <li key={stack} className="">
                      {stack}
                    </li>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
};

const PROJECT_LIST = [
  {
    title: "CSV Academy Practice Project",
    description: `I maintained and update the design of PSUCCESS.`,
    stacks: ["Java", "Spring Boot"],
    links: ["https://github.com/jrglomar/week5day1project"],
  },
  {
    title: "Web Portfolio",
    description: `It is a web portfolio made with ReactJS and styled it with tailwind css.`,
    stacks: ["ReactJS", "TailwindCSS"],
    links: ["https://github.com/jrglomar/react-portfolio"],
  },
  {
    title: "Faculty Monitoring System",
    description: `I lead the developer team in FMS team with two co-developers. 
    Faculty Monitoring System is a system that will aid the faculty staff in managing the
    details of submitting the required documents, class attendance, and
    campus activities. It will also provide the faculties with automated
    tools to quickly follow them. It is a web application that offers an
    automated solution for faculty monitoring that is well-organized and
    improved.`,
    stacks: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    links: ["https://github.com/jrglomar/fms"],
  },
  {
    title: "BITbo",
    description: `Contribute and developed a module on Project called bitbo a Barangay IT Robot is
    designed to handle a wide-range of information relating to barangay profile,
    citizens profile, barangay IDs/clearances/certifications, blotter cases, local
    businesses, and barangay legislation.`,
    stacks: ["Laravel", "MySQL", "jQuery"],
    links: [
      "https://github.com/jrglomar/bitbov1",
      "https://gfmic.ph/barangay-it/",
    ],
  },
  {
    title: "Bus Management System",
    description: `I lead the team as a lead developer and project manager in this project. The Bus Management Information System with Online Reservation Payment is an easy-to-use online booking system which helps users to reserve and pay bus tours with ease and convenience. It a system that is used for reserving seats, canceling bookings, and obtaining various forms of route to make quicker reservations. It is created to manage and computerize traditional databases, ticket purchasing, and bus and travel tracking. It keeps track of all passenger information, bus information, and reservation information. This will make the booking process more efficient, convenient, and pleasant.`,
    stacks: [
      "NodeJS",
      "Express",
      "SequelizeORM",
      "MySQL",
      "jQuery",
      "Bootstrap",
    ],
    links: [
      "https://github.com/jrglomar/brs-api",
      "https://github.com/jrglomar/brs-web",
    ],
  },
  {
    title: "Time and Attendance",
    description: `I solo developed this project. The Time and Attendance System is a system that will assist the Human Resource Office of a hospital by making shift and scheduling, time and attendance, and leave application more convenient and simpler for both human resource personnel and employees.`,
    stacks: ["FastAPI", "SQLAlchemy", "MySQL", "jQuery", "Bootstrap"],
    links: ["https://github.com/jrglomar/time-and-attendance"],
  },
  {
    title: "realme Raffle System",
    description: `I maintained some of the functionalities of realme Raffle System Website.`,
    stacks: ["CodeIgniter", "MySQL", "jQuery"],
    links: ["https://realmephpromos.com/registration"],
  },
  {
    title: "PUP E-Boto",
    description: `I am solo developer in this project with a team of QAs. The University elections depends on how the PUP QC COMELEC, Organizations, and The University organized its process and policy. PUP E-BOTO was designed to provide sufficient effect for the elections, contest, and poll that students can participate. The traditional way of voting which is through paper ballots pushed the researchers to develop an E-Voting site which is the PUP E-BOTO, it is an effective way of handling elections compared to manually or physically attending the elections that involves a bunch of physical contacts to other people, long lines to wait, and prone to anomalies or tampering. Therefore, the researchers come up with the study that addressed this kind of dilemma.`,
    stacks: ["CodeIgniter", "MSSQL", "jQuery", "Bootstrap"],
    links: ["https://github.com/jrglomar/eboto"],
  },
  {
    title: "Study Helper System",
    description: `I solo developed this project. Study helper aims to help student to list down their tasks and also track their academic activity progress in every subject. It is a Desktop GUI Application.`,
    stacks: ["Tkinter", "MySQL"],
    links: ["https://github.com/jrglomar/studyhelpersystem"],
  },
  {
    title: "Asset Information Management System",
    description: `It is a web app that handles assets information such as school equipments.`,
    stacks: ["Laravel", "MySQL", "Javascript", "Bootstrap"],
    links: ["https://github.com/jrglomar/aims"],
  },
  {
    title: "Forget-Me-Not",
    description: `This project is a task management system with email notification.`,
    stacks: ["CodeIgniter", "MSSQL", "jQuery", "Bootstrap"],
    links: ["https://github.com/jrglomar/forgetmenot"],
  },
  {
    title: "GTV Dayo",
    description: `This project is a online basketball game appointment.`,
    stacks: ["CodeIgniter", "MSSQL", "jQuery", "Bootstrap"],
    links: ["https://github.com/jrglomar/gtvdayo"],
  },
];

export default ProjectList;
