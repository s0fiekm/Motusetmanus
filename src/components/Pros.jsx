import React from "react";
import ProsItem from "./ProsItem";

export default function Pros() {
  return (
    <section className="flex px-mobile lg:px-desktop flex-col w-full bg-secondary py-30 items-center gap-20">
      <div className="flex flex-col text-center lg:w-3xl text-primary">
        <h3>
          Motus & Manus (latin for "bevægelse og hånd") tilbyder skræddersyede
          sundhedsløsninger til virksomheder, der prioriterer deres
          medarbejderes trivsel og produktivitet.
        </h3>
        <p>
          Mange kontoransatte oplever spændinger, nakke- og rygsmerter på grund
          af en række faktorer, blandt andet langvarigt stillesiddende arbejde
          og inaktivitet. Ved at tilbyde kvalificeret manuel behandling og
          fysioterapeutisk rådgivning på arbejdspladsen kan i styrke både
          trivsel og bundlinje
        </p>
      </div>
      <div className=" w-full gap-5 lg:gap-0 flex flex-col lg:flex items-flex-start lg:justify-between lg:flex-row">
        <ProsItem
          src="/assets/fravær.svg"
          alt="fravær-ikon"
          title="Forebyg sygefravær"
          text="Reducer smerter og undgå fravær relateret til muskler og led."
        />
        <ProsItem
          src="/assets/trivsel.svg"
          alt="trivsel-ikon"
          title="Styrk trivsel og arbejdsmoral"
          text="Medarbejdere med færre smerter arbejder bedre og gladere."
        />
        <ProsItem
          src="/assets/sundhed.svg"
          alt="sundhed-ikon"
          title="Skab en sund arbejdsplads"
          text="En aktiv arbejdsdag giver energi og øget motivation."
        />
      </div>
    </section>
  );
}
