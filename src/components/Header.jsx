"use client";
import React from "react";
import Image from "next/image";
import CTAButton from "./CtaBtn";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary py-4 flex flex-row lg:px-desktop justify-between items-center gap-4 w-full">
      <Link
        href="/"
        className=" flex flex-col justify-center items-center gap-2 "
      >
        <Image src="/assets/logo.svg" width={80} height={80} alt="Logo" />
        <span className="text-logo text-secondary ">Motus og Manus</span>
      </Link>
      <nav className="flex flex-row  gap-6 text-secondary">
        <a href="#about">Om mig</a>

        <Link href="#howItWorks">Hvordan fungerer det?</Link>

        <Link href="#price">Pris og betalingsmuligheder</Link>

        <Link href="#contact">Kontakt</Link>

        <Link href="#FAQ">FAQ</Link>
      </nav>
      <CTAButton text="Book møde nu" href="/booking" target="_blank" />
    </header>
  );
}
