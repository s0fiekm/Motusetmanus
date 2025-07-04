"use client";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-primary py-30 flex flex-col gap-10 overflow-hidden w-full px-mobile lg:px-desktop mx-auto relative">
      <div className="text-secondary xl:w-1/3">
        <h2>
          En sundhedsordning skal kunne mærkes, både fysisk og i arbejdsmiljøet.
        </h2>
        <p className="opacity-70">
          Her er hvad tidligere kunder fortæller om deres oplevelse med Motus &
          Manus.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-primary/50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-primary/50 to-transparent z-10" />

        <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar">
          <div className="flex flex-nowrap gap-6 pb-4">
            <TestimonialCard
              title="Mikkel Kjær Regnér har igennem snart 3 år fungeret som vores faste massør på kontoret hos Amrop. Vi er 6 faste medarbejder, der får massage hver 14.dag. Vi er alle enige om, at Mikkel er absolut en af de mest kompetente massører vi har haft. Derudover bliver vi altid mødt med et smil. De varmeste anbefalinger skal lyde her fra Amrop."
              author=""
            />
            <TestimonialCard
              title="I had physiotherapy with Mikkel who helped me tremendously with my joint issues, posture, muscle and joint strength. His diagnosis and treatment was right on point and exercises he gave me helped to maintain the results. The atmosphere is very professional and at the same time relaxed and friendly."
              author=""
            />
            <TestimonialCard
              title="Very recommended. I had 5 sessions with Mikkel and my very intense shoulder pain is almost gone. I got some manual therapy and an exercise plan to do at the gym/home. This plan has been modified every session according to my needs. I’m now back to my regular life and training."
              author=""
            />
            <TestimonialCard
              title="I was in terrible condition due to a disc prolapse, suffering from severe back pain and very limited mobility. Honestly, I felt hopeless about my situation until I came to Kiro Fys and met Mikkel. From the very first session, Mikkel made me feel heard and reassured. His proper guidance, personalized treatment plan, and professional expertise have been life-changing for me. Not only did he help reduce my pain, but he also guided me step by step toward regaining my mobility. Mikkel's approach is thorough and supportive. He not only addresses the immediate problem but also focuses on long-term recovery and strengthening. His explanations and advice made me feel confident in my progress every step of the way."
              author=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
