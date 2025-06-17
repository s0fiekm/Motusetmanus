"use client";
import React from "react";
import {useState} from "react";
import Image from "next/image";
import CTAButton from "./CtaBtn";
import Link from "next/link";
import {RxCross2} from "react-icons/rx";
import {RxHamburgerMenu} from "react-icons/rx";
import {AnimatePresence, motion} from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-primary px-4 sm:px-6  md:px-laptop lg:px-desktop-m xl:px-desktop py-4 flex justify-between items-center">
      <Link href="/" className=" flex flex-row items-center gap-4 ">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 h-12 lg:w-12 lg:h-12"
        />
        <span className="text-secondary  text-base xl:text-xl">
          Motus og Manus
        </span>
      </Link>

      <nav className="hidden lg:flex flex-row  gap-10 text-secondary ">
        <Link
          href="#about"
          className="relative group transition-opacity duration-200 hover:opacity-80"
        >
          <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary group-hover:after:w-full after:transition-all after:duration-300">
            Om mig
          </span>
        </Link>
        <Link
          href="#howItWorks"
          className="relative group transition-opacity duration-200 hover:opacity-80"
        >
          <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary group-hover:after:w-full after:transition-all after:duration-300">
            Hvordan fungerer det?
          </span>
        </Link>
        <Link
          href="#price"
          className="relative group transition-opacity duration-200 hover:opacity-80"
        >
          <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary group-hover:after:w-full after:transition-all after:duration-300">
            Pris og betalingsmuligheder
          </span>
        </Link>
        <Link
          href="#contact"
          className="relative group transition-opacity duration-200 hover:opacity-80"
        >
          <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary group-hover:after:w-full after:transition-all after:duration-300">
            Kontakt
          </span>
        </Link>
        <Link
          href="#FAQ"
          className="relative group transition-opacity duration-200 hover:opacity-80"
        >
          <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary group-hover:after:w-full after:transition-all after:duration-300">
            FAQ
          </span>
        </Link>
      </nav>

      <div className="hidden lg:block">
        <CTAButton text="Book møde nu" href="/booking" target="_blank" />
      </div>

      <button
        className=" text-secondary z-50 relative lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.div
          initial={false}
          animate={{rotate: menuOpen ? 90 : 0}}
          transition={{duration: 0.3}}
        >
          {menuOpen ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.3}}
            className="z-40 fixed inset-0 bg-primary py-10 text-secondary flex flex-col gap-6 lg:hidden"
          >
            <div className=" z-50 fixed inset-0 bg-primary py-10 text-secondary flex flex-col px-mobile items-start mt-10 gap-6 lg:hidden">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-9 right-5 text-secondary"
              ></button>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
