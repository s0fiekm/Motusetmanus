import React from "react";
import FAQAccordion from "./FAQAccordion";

export default function FaqSection() {
  return (
    <section
      id="FAQ"
      className="w-full bg-secondary px-mobile lg:px-desktop text-primary flex flex-col  lg:gap-10 py-30"
    >
      <h2>Ofte stillede spørgsmål</h2>
      <FAQAccordion />
    </section>
  );
}
