import React from "react";
import AboutLine from "./AboutLine";

function About() {
  const aboutMe = [
    {
      meName: "Name",
      meData: "Vishvajeet Shukla"
    },
    {
      meName: "Experience",
      meData: "1+ Year"
    },
    {
      meName: "Nationality",
      meData: "Indian"
    },
    {
      meName: "Freelance",
      meData: "Available"
    },
    {
      meName: "Phone",
      meData: "9782744749"
    },
    // {
    //   meName: "Skype",
    //   meData: "a7370df3033a29c5"
    // },
    {
      meName: "Email",
      meData: "vishvajeet4711@gmail.com"
    },
    {
      meName: "Languages",
      meData: "Hindi, English"
    }
  ];
  return (
    <>
      <div className="mt-5">
        {aboutMe.map((value) => (
          <AboutLine aboutMe={value} />
        ))}
      </div>
    </>
  );
}

export default About;
