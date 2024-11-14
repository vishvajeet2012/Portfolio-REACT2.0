import React from "react";
import ResumeBtnMain from "../../ResumeBtns/ResumeBtnMain";
import LeftSideHed from "../../LeftSideHed/LeftSideHed";
import Education from "./Education";

function MainEducation() {
  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-10 gap-3 mt-5">
        <div className="col-span-10 md:col-span-3">
          <LeftSideHed />
          <div className="mt-3">
            <ResumeBtnMain />
          </div>
        </div>

        <div className="col-span-10 md:col-span-7 px-4">
          <div className="animate__animated animate__fadeIn">
            <h1 className="text-white lg:text-3xl">My Education</h1>
            <p className="text-neutral-600 text-sm mt-3">
            I am currently enrolled in the MERN Stack Developer course at
              Grras Solutions Ltd 2024 and have completed a Master of Arts
              degree from the University of Rajasthan 2022
            </p>
          </div>

          <div>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainEducation;
