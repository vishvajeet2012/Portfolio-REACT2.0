import React from "react";
import ExperienceCard from "../../MainExperience/ExperienceBox/ExperienceCard";

function EducationBox() {
  const myEducation = [
    {
      year: "Present - 2024",
      exName: "Mern Stack Developer",
      insti: "Grras Solutions ltd"
    },
    {
      year: "2022",
      exName: "BCA",
      insti: "University of Rajasthan"
    }
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-2 animate__animated animate__fadeInRight gap-3">
          {myEducation.map((value) => (
            <div className="col-span-2 lg:col-span-1  rounded-md py-4 px-4 bg-zinc-800 ">
              <ExperienceCard expValue={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EducationBox;
