import Image from "next/image";
import React from "react";
import {GoDotFill} from "react-icons/go";

export default function About() {
  return (
    <section
      id="about"
      className=" lg:gap-10 xl:gap-0 md:px-laptop lg:px-desktop-m px-mobile xl:px-desktop py-10 lg:py-20 lg:grid lg:grid-cols-2 w-full   items-center bg-surface  flex flex-col"
    >
      <div className="relative w-full max-w-[500px] h-[580px]  ">
        <Image
          src="/assets/mikkel.jpg"
          alt="Mikkel"
          fill
          className="object-cover object-[70%_20%] "
        />
      </div>
      <div className="text-primary md:items-center lg:items-start flex flex-col gap-5  py-20  text-balance">
        <div className="flex flex-col md:items-center  md:text-center lg:text-start lg:items-start">
          <h2>Om Mig - Mikkel Kjær Regnér, Fysioterapeut</h2>
          <p>
            Jeg er specialiseret i manuel behandling med over 7 års erfaring,
            herunder 4 år hos Kiro Fys og 3 år i Massagekompagniet. Jeg har
            behandlet mere end 1.000 timer og har deltaget i en bred vifte af
            kurser der har udbygget min viden indenfor:
          </p>
        </div>
        <ul className="flex flex-col gap-4 opacity-70">
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
