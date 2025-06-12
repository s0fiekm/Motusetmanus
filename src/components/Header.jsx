import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary py-8 flex flex-row justify- items-center gap-4 w-full">
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <Image src="/assets/logo.svg" width={100} height={100} alt="Logo" />
        <span className="text-logo text-secondary ">Motus og Manus</span>
      </div>
      <nav className="flex flex-row gap-6 text-secondary">
        <a href="#about">Om mig</a>

        <a href="#howItWorks">Hvordan fungerer det?</a>

        <a href="#price">Pris og betalingsmuligheder</a>

        <a href="#contact">Kontakt</a>

        <a href="#FAQ">FAQ</a>
      </nav>
    </header>
  );
}
