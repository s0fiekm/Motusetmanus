"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" md:px-laptop w-full pt-10 pb-5 lg:pt-20 px-mobile lg:px-desktop-m xl:px-desktop bg-tertiary text-primary  ">
      <div className="flex flex-col gap-6 lg:flex lg:flex-row lg:items-start lg:justify-between">
        <div className="">
          <p>Mikkel Kjær Regnér</p>
          <p>Fysioterapeut og Manuel Terapeut</p>
          <p>Motus og Manus - Bevægelse og Hånd</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <span>Telefon: +45 00 00 00 00 </span>
          <span>Email: kontakt@motusogmanus.dk</span>
          <span>CVR: 12345678</span>
        </div>
        <div className=" flex flex-col gap-2">
          <Link href="#about">Om</Link>
          <Link href="#howItWorks">Hvordan fungerer det?</Link>
          <Link href="#price">Priser og betalingsmetoder</Link>
          <Link href="#contact">Kontakt</Link>
          <Link href="#FAQ">FAQ</Link>
        </div>
      </div>

      <p className="pt-3">
        © 2025 Mikkel Kjær Regnér · Alle rettigheder forbeholdes
      </p>
    </footer>
  );
}
