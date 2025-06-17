import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex lg:flex-row sm:justify-start gap-10 lg:gap-24  lg:justify-between  w-full bg-secondary px-mobile  md:px-laptop  lg:px-desktop-m xl:px-desktop py-20 lg:place-items-start"
    >
      <div className=" lg:w-lg text-primary lg:pt-8  flex flex-col">
        <h2>
          Behandling der gør en forskel - både for medarbejderen og virksomheden
        </h2>
        <p>
          Udfyld formularen herunder, hvis du er nysgerrig på, hvordan en
          ordning kunne se ud for dig eller din virksomhed.
        </p>
      </div>
      <div className="w-full lg:w-1/2 ">
        <ContactForm />
      </div>
    </section>
  );
}
