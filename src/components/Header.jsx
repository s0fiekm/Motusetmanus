"use client";
import React from "react";
import {useState} from "react";
import Image from "next/image";
import CTAButton from "./CtaBtn";
import Link from "next/link";
import {RxCross2} from "react-icons/rx";
import {RxHamburgerMenu} from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-primary py-4 flex flex-row px-mobile lg:px-desktop justify-between items-center gap-4 w-full">
      <Link
        href="/"
        className=" flex flex-col justify-center items-center gap-1 "
      >
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 h-12 lg:w-20 lg:h-20"
        />
        <span className="text-logo text-secondary ">Motus og Manus</span>
      </Link>

      <nav className="hidden lg:flex flex-row  gap-6 text-secondary">
        <Link href="#about">Om mig</Link>

        <Link href="#howItWorks">Hvordan fungerer det?</Link>

        <Link href="#price">Pris og betalingsmuligheder</Link>

        <Link href="#contact">Kontakt</Link>

        <Link href="#FAQ">FAQ</Link>
      </nav>

      <div className="hidden lg:block">
        <CTAButton text="Book møde nu" href="/booking" target="_blank" />
      </div>

      <button
        className="lg:hidden    text-secondary"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
      </button>

      {menuOpen && (
        <div className=" z-50 fixed inset-0 bg-primary py-10 text-secondary flex flex-col items-center gap-6 lg:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-9 right-5 text-secondary"
          >
            <RxCross2 size={28} />
          </button>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            Om mig
          </Link>
          <Link href="#howItWorks" onClick={() => setMenuOpen(false)}>
            Hvordan fungerer det?
          </Link>
          <Link href="#price" onClick={() => setMenuOpen(false)}>
            Pris og betalingsmuligheder
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </Link>
          <Link href="#FAQ" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <CTAButton text="Book møde nu" href="/booking" target="_blank" />
        </div>
      )}
    </header>
  );
}
