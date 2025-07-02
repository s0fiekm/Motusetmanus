"use client";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-primary py-30 flex flex-col gap-10 overflow-hidden w-full  px-mobile lg:px-desktop mx-auto">
      <div className="text-secondary xl:w-1/3 ">
        <h2 className="">
          En sundhedsordning skal kunne mærkes, både fysisk og i arbejdsmiljøet.
        </h2>
        <p className=" opacity-70">
          Her er hvad tidligere kunder fortæller om deres oplevelse med Motus &
          Manus.
        </p>
      </div>

      <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
        <div className="flex flex-nowrap gap-6 pb-4  ">
          <TestimonialCard
            title="Jeg mærkede en tydelig forskel efter første behandling – det gav mig ny energi til arbejdsdagen."
            author="Medarbejder, kontor"
          />
          <TestimonialCard
            title="En ordning der faktisk gør en forskel – både for kroppen og stemningen på kontoret."
            author="HR-ansvarlig, tech"
          />
          <TestimonialCard
            title="Jeg føler mig både set og løsnet op – en fantastisk måde at starte dagen på."
            author="Medarbejder, lager"
          />
        </div>
      </div>
    </section>
  );
}
