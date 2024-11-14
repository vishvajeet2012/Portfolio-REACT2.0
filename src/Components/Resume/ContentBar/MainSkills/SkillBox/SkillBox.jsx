import React from "react";
import SkillCard from "./SkillCard";
import "boxicons";
function SkillBox() {
  const skillBox = [
    {
      nameSkl: "Html 5",
      iconUrl: "fa-brands fa-html5"
    },
    {
      nameSkl: "Css 3",
      iconUrl: "fa-brands fa-css3-alt"
    },
    {
      nameSkl: "JavaScript",
      iconUrl: "fa-brands fa-js"
    },
    {
      nameSkl: "ReactJs",
      iconUrl: "fa-brands fa-react"
    },
    {
      nameSkl: "Tailwind",
      iconUrl: "bx bxl-tailwind-css"
    },
    {
      nameSkl: "Bootstrap",
      iconUrl: "fa-brands fa-bootstrap"
    },
    {
      nameSkl: "Figma",
      iconUrl: "fa-brands fa-figma"
    },
    {
      nameSkl: "Photoshop",
      iconUrl: "bi bi-images"
    }
  ];
  return (
    <>
      <div className="mt-4 mx-auto mb-5 animate__animated animate__fadeInUp">
        <div className="grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {skillBox.map((value) => (
            <div className=" slill_icons-box sm:col-span-2 relative  h-32 sm:w-52 md:col-span-1 lg:col-span-1 sm:h-52 md:h-36 md:w-36 flex justify-center items-center  rounded-md   bg-zinc-800 ">
              <div className="absolute top-1 left-0 w-full text-center">
                <p className="skill_names text-white" style={{ display: "none" }}>
                  {value.nameSkl}
                </p>
              </div>
              <SkillCard iconClass={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillBox;
