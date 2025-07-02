import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function About() {
  return (
    <section
      id="about"
      className=" md:gap-10 xl:gap-0 px-mobile xl:px-desktop py-10 lg:py-20 md:grid md:grid-cols-2 w-full   items-center bg-surface  flex flex-col"
    >
      <div className="relative w-full lg:max-w-[510px] h-[700px] lg:h-[580px]  ">
        <Image
          src="/assets/mikkel.jpg"
          alt="Mikkel"
          fill
          className="object-cover object-[70%_20%] "
        />
      </div>
      <div className="text-primary  lg:items-start flex flex-col gap-5  py-20  xl:text-balance">
        <div className="flex flex-col  lg:items-start">
          <h2>Om Mig - Mikkel Kjær Regnér, Fysioterapeut</h2>
          <p>
            Jeg er specialiseret i manuel behandling med over 7 års erfaring,
            herunder 4 år hos Kiro Fys og 3 år i Massagekompagniet. Jeg har
            flere 1.000 timers behandlingserfaring og har deltaget i en bred
            vifte af kurser der har udbygget min viden indenfor:
          </p>
        </div>
        <ul className="flex flex-col gap-4 opacity-70">
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>
              Massage & bindevævsbehandling (løsne spændinger, fremme heling)
            </p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Ledmobilisering & manipulation (bedre og friere bevægelighed)</p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Vestibulær rehabilitering (svimmelheds og balance behandling)</p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>
              Ergonomirådgivning (forebyggelse af uhensigtsmæssig belastning)
            </p>
          </li>
          <li className="flex flex-row items-center gap-2 text-primary">
            <GoDotFill />
            <p>Kost- og træningsvejledning (fremme langvarige resultater)</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
