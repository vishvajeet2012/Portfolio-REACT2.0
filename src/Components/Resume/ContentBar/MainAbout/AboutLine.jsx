import React from "react";

function AboutLine({ aboutMe }) {
  const { meName, meData } = aboutMe;
  return (
    <>
      <div className=" grid grid-cols-4 items-center mt-4 animate__animated animate__fadeIn">
        <div className="col-span-2 md:col-span-1">
          <p className=" text-neutral-600 me-4 m-0 text-base">{meName}</p>
        </div>
        <div className="col-span-2 md:col-span-2">
          <h6 className="text-white m-0 text-xs pe-2 text-wrap md:text-lg">
            {meData}
          </h6>
        </div>
      </div>
    </>
  );
}

export default AboutLine;
