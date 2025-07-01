import React from "react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div
      id="contactInfo"
      className="w-full min-h-[70vh] bg-surface flex flex-col lg:grid lg:grid-cols-2 "
    >
      <div className="relative h-[600px] lg:h-auto w-full">
        <Image
          src="/assets/contact.jpg"
          alt="Portræt af fysioterapeut i behandling "
          fill
          className="object-cover object-[70%_20%] "
        />
      </div>
      <div className="gap-10 text-primary  lg:gap-20 lg:justify-center flex flex-col py-15 px-mobile lg:px-desktop   md:px-laptop lg:py-20">
        <div className="flex flex-col  ">
          <h2 className="text-balance">
            Lad os sammen skabe en sundere og mere produktiv arbejdsplads!
          </h2>
          <h3
            className="opacity-70 text-balance
"
          >
            I er altid velkommen til at tage kontakt for en uforpligtende
            samtale.
          </h3>
        </div>
        <div className="flex flex-col gap-5  lg:flex lg:flex-row items-start lg:gap-20 ">
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
                motusetmanus@gmail.com
              </a>
            </li>
          </ul>
          <ul>
            <li>Motus og Manus</li>
            <li>CVR: 38774441 </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
