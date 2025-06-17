import React from "react";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <section
      id="FAQ"
      className="w-full bg-secondary gap-0 px-mobile  md:px-laptop lg:px-desktop-m xl:px-desktop text-primary py-20 lg:py-30 "
    >
      <h2>Ofte stillede spørgsmål</h2>
      <FAQAccordion />
    </section>
  );
}
