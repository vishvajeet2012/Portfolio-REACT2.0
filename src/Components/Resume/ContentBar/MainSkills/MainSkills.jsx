import React from "react";
import ResumeBtnMain from "../../ResumeBtns/ResumeBtnMain";
import LeftSideHed from "../../LeftSideHed/LeftSideHed";
import Skills from "./Skills";

function MainSkills() {
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
            <h1 className="text-white lg:text-3xl">My Skills</h1>
            <p className="text-neutral-600 text-sm mt-3">
            Currently expanding into backend technologies, I am committed to improving my
 expertise in JavaScript, React, and backend development, aiming to contribute to
 a collaborative team as a full-stack developer
            </p>
          </div>

          <div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSkills;
