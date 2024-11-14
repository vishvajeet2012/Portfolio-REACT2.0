import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactDatails from "./ContactDatails/ContactDatails";
import "./Contact.css"

function Contact() {
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-2">
        <div className="col-span-2 animate__animated   animate__fadeInLeft  md:col-span-1 p-1">
          <ContactForm />
        </div>
        <div className="md:col-span-1 col-span-2">
          <ContactDatails />
        </div>
      </div>
    </div>
  );
}

export default Contact;
