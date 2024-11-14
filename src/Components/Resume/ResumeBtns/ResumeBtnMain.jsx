import React from "react";
import ResumeBtns from "./ResumeBtns";
import { Link } from "react-router-dom";

function ResumeBtnMain() {
  const resumeBtn = [
    {
      btnName: "Experience",
      url: "/experience"
    },
    {
      btnName: "Education",
      url: "/education"
    },
    {
      btnName: "Skills",
      url: "/skills"
    },
    {
      btnName: "About me",
      url: "/about"
    }
  ];
  return (
    <>
      <div>
        {resumeBtn.map((value, index) => (
          <Link to={value.url} key={index}>
            <ResumeBtns resBtn={value} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ResumeBtnMain;
