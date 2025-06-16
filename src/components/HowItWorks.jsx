"use client";
import {motion} from "framer-motion";
import FlowStep from "@/components/FlowStep";

const steps = [
  {
    number: "01",
    title: "Briks på jeres lokation",
    text: "En eksklusiv sammenfoldelig briks deponeres hos jer.",
  },
  {
    number: "02",
    title: "Behandling i lokale",
    text: "Foregår i et rum på min. 10 m² (fx mødelokale).",
  },
  {
    number: "03",
    title: "Varighed",
    text: "30, 45 eller 60 min. pr. session.",
  },
  {
    number: "04",
    title: "Forløbsmodel",
    text: "2–4 behandlinger pr. måned i 2–3 måneder.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className=" relative w-full bg-primary text-secondary py-20 px-6">
      <h2 className=" text-center mb-20">Hvordan fungerer det?</h2>

      <div className="relative lg:px-desktop mx-auto">
        <motion.div
          className="hidden lg:block absolute top-[24px] left-30 right-30 h-[1px] bg-secondary rounded-full z-0"
          style={{transformOrigin: "left"}}
          initial={{scaleX: 0, opacity: 0}}
          whileInView={{scaleX: 1, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 1}}
        />

        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between gap-4 lg:items-start  relative z-0">
          {steps.map((step, index) => (
            <FlowStep
              key={index}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
