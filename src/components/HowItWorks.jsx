import React from "react";
import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorks() {
  return (
    <section
      id="howItWorks"
      className="bg-primary w-full flex flex-col items-center text-secondary py-20 px-mobile lg:px-desktop"
    >
      <h2 className="text-2xl lg:text-4xl mb-10 text-center">
        Hvordan fungerer det?
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 w-full">
        <HowItWorksCard
          number="01"
          title="Jeres eksklusive sammenfoldelige briks"
          text="vil blive deponeret på jeres lokation"
          align="left"
        />
        <HowItWorksCard
          number="02"
          title="Behandling foregår i et lokale på mindst 10 m²"
          text="(fx et mødelokale eller frit rum)"
          align="right"
        />
        <HowItWorksCard
          number="03"
          title="Varighed:"
          text="30, 45 eller 60 minutter pr. session"
          align="left"
        />
        <HowItWorksCard
          number="04"
          title="Anbefalet forløbsmodel:"
          text="2-4 behandlinger pr. måned over 2-3 måneder"
          align="right"
        />
      </div>
    </section>
  );
}
