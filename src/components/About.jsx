import Image from "next/image";
import React from "react";
import {GoDotFill} from "react-icons/go";

export default function About() {
  return (
    <section
      id="about"
      className="lg:flex lg:flex-row w-full lg:justify-between  lg:pr-30 items-center bg-surface  flex flex-col"
    >
      <div className="relative w-full lg:w-1/3 h-[660px]">
        <Image
          src="/assets/mikkel.jpg"
          alt="Mikkel"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-primary flex flex-col gap-5 lg:w-3xl py-10  px-mobile lg:px-desktop text-balance">
        <div>
          <h2>Om Mig - Mikkel Kjær Regnér, Fysioterapeut</h2>
          <p>
            Jeg er specialiseret i manuel behandling med over 7 års erfaring,
            herunder 4 år hos Kiro Fys og 3 år i Massagekompagniet. Jeg har
            behandlet mere end 1.000 timer og har deltaget i en bred vifte af
            kurser der har udbygget min viden indenfor:
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Massage & bindevævsbehandling (for at løsne dybe spændinger)</p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Ledmobilisering & manipulation (til bedre bevægelighed)</p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Ergonomirådgivning (forebyggelse af gentagne belastninger)</p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Kost- og træningsvejledning (for en mere bæredygtig livsstil)</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
