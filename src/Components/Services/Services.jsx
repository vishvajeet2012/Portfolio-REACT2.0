import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

function Services() {
  const servicesSec = [
    // {
    //   id: "01",
    //   title: "UI/UX Design",
    //   desc:
    //     "I specialize in UI/UX design, creating engaging, user-centered designs that enhance satisfaction and interaction. I ensure every experience is functional and visually appealing using Photoshop and Figma.",
    //   btnUrl: "hi",
    //   btnBg: "white",
    //   idBorder: "1px white"
    // },
    {
      id: "01",
      title: "Web Design",
      desc:
        "I specialize in web design for projects, utilizing HTML5, CSS3, and JavaScript. My focus is on creating engaging, user-centered designs that enhance usability and aesthetics for a satisfying user experience",
      btnUrl: "hi",
      btnBg: "white",
      idBorder: "1px white"
    },
    {
      id: "02",
      title: "Frontend Development",
      desc:
        "With expertise in React.js, JavaScript, HTML, and CSS, I develop dynamic web applications that deliver exceptional performance. I focus on clean code and best practices to ensure maintainability and scalability.",
      btnUrl: "hi",
      btnBg: "green-400",
      idBorder: "1px green"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="grid gap-5 animate__animated animate__fadeInUp grid-cols-2 mt-5 mb-5">
          {servicesSec.map((value) => (
            <div className="col-span-2 mt-2 md:col-span-1">
              <ServiceCard cardValue={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
