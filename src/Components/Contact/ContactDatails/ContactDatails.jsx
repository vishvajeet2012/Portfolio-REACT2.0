import React from "react";
import ContactCard from "./ContactCard";

function ContactDatails() {
  const contactCard = [
    {
      iconClass: "fa-solid fa-phone",
      conName: "Phone",
      manName: "9782744729",
      url: "tel:+9782744729"
    },
    {
      iconClass: "fa-solid fa-envelope",
      conName: "Email",
      manName: "vishvajeetshukla4711@gmail.com",
      url: "mailto:vishvajeet4711@gmail.com"
    },
    {
      iconClass: "fa-solid fa-location-arrow",
      conName: "Address",
      manName: "jaipur (raj) 303903",
      // url: "url"
    }
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center contact-card">
        {contactCard.map((value) => (
          <ContactCard data={value} />
        ))}
      </div>
    </>
  );
}

export default ContactDatails;
