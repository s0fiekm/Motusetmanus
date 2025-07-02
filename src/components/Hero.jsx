"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative  h-[40vh] lg:h-[90vh]">
      <Image
        src="/assets/hero.jpg"
        alt="Hero image"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div className="text-secondary max-w-4xl px-mobile lg:px-desktop-m">
          <h1>
            Sundhedspakke til Virksomheder - Manuel Behandling & Fysioterapi
          </h1>
        </div>
      </div>
    </section>
  );
}
