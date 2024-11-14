import React from "react";
import ResumeBtnMain from "../../ResumeBtns/ResumeBtnMain";
import LeftSideHed from "../../LeftSideHed/LeftSideHed";
import Experience from "./Experience";

function MainExperience() {
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
            <h1 className="text-white lg:text-3xl">My Experience</h1>
            <p className="text-neutral-600 text-sm mt-3">
              Proficient in React.js, JavaScript, HTML, CSS, and familiar with
              tools such as Git, Photoshop, and Figma. Committed to continuous
              learning and adapting to emerging technologies in the field of web
              development.
            </p>
          </div>

          <div>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainExperience;
