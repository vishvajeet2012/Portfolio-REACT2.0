import React from "react";
import ResumeBtnMain from "../../ResumeBtns/ResumeBtnMain";
import LeftSideHed from "../../LeftSideHed/LeftSideHed";
import About from "./About";

function MainAbout() {
  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-10  gap-3 mt-5">
        <div className="col-span-10 md:col-span-3">
          <LeftSideHed />
          <div className="mt-3">
            <ResumeBtnMain />
          </div>
        </div>

        <div className="col-span-10  md:col-span-7 px-4">
          <div className="animate__animated animate__fadeIn">
            <h1 className="text-white lg:text-3xl">About me</h1>
          </div>

          <div>
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAbout;
