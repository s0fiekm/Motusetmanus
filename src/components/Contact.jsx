import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" grid grid-cols-1 gap-10 md:grid md:grid-cols-[1fr_2fr] 2xl:gap-40  w-full bg-secondary px-mobile  md:px-laptop  lg:px-desktop-m xl:px-desktop py-20 "
    >
      <div className="  text-primary lg:pt-12 flex flex-col">
        <h2>
          Behandling der gør en forskel - både for medarbejderen og virksomheden
        </h2>
        <p>
          Udfyld formularen herunder, hvis du er nysgerrig på, hvordan en
          ordning kunne se ud for dig eller din virksomhed.
        </p>
      </div>
      <div className="w-full  ">
        <ContactForm />
      </div>
    </section>
  );
}
