import React from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceBox() {
  const myExperience = [
    {
      year: "2024 - Present",
      exName: "Mern Stack Developer",
      insti: "Grras Solutions ltd"
    },
    // {
    //   year: "Jun 2023 - July 2024",
    //   exName: "Web Designer",
    //   insti: "Dvg Soft ltd"
    // },
    // {
    //   year: "April 2023 - Jun 2023",
    //   exName: "Internship Web Design",
    //   insti: "Git Solutions ltd"
    // }
  ];

  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-3 animate__animated animate__fadeInRight">
          {myExperience.map((value) => (
            <div className="col-span-2 lg:col-span-1  rounded-md py-4 px-4 bg-zinc-800 ">
              <ExperienceCard expValue={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperienceBox;
