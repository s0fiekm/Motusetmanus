import React from "react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div
      id="contactInfo"
      className="w-full  bg-surface flex flex-col lg:grid lg:grid-cols-[1fr_2fr] "
    >
      <div className="relative w-full lg:h-[500px] h-[700px] lg:aspect-[3/4]">
        <Image
          src="/assets/mikkel2.jpg"
          alt="Portræt"
          fill
          className="object-cover"
        />
      </div>
      <div className="gap-10 text-primary  lg:gap-20 justify-center flex flex-col py-15 px-mobile xl:px-desktop md:px-laptop lg:py-20">
        <div className="flex flex-col ">
          <h2 className="text-balance max-w-3xl">
            Lad os sammen skabe en sundere og mere produktiv arbejdsplads!
          </h2>
          <p
            className=" text-balance
"
          >
            I er altid velkommen til at tage kontakt for en uforpligtende
            samtale.
          </p>
        </div>
        <div className="flex flex-col gap-10  md:flex md:flex-row items-start lg:gap-24 ">
          <ul>
            <li>Mikkel Kjær Regnér </li>
            <li> København og omegn</li>
          </ul>
          <ul>
            <li>+45 81 61 63 05</li>
            <li>
              <a
                href="mailto:email@mail.dk"
                className="underline hover:opacity-80"
              >
                motusetmanus@yahoo.com
              </a>
            </li>
          </ul>
          <ul>
            <li>Motus & Manus</li>
            <li>CVR: 38774441 </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
