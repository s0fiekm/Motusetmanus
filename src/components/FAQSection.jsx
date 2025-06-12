import React from "react";
import FAQAccordion from "./FAQAccordion";

export default function FaqSection() {
  return (
    <section
      id="FAQ"
      className="w-full bg-secondary px-40 text-primary flex flex-col gap-12 py-30"
    >
      <h2>Ofte stillede spørgsmål</h2>
      <FAQAccordion />
    </section>
  );
}
