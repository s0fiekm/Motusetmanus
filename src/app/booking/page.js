"use client";
import Image from "next/image";
import React, {useState} from "react";
import BookingForm from "@/components/BookingForm";
import StepIndicator from "@/components/StepIndicator";

export default function BookingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className=" relative w-full lg:h-svh overflow-hidden">
      <main className="  relative z-10 flex flex-col lg:grid lg:grid-cols-2  ">
        <div className=" relative h-100 lg:h-svh w-full   ">
          <Image
            src="/assets/hero2.jpg"
            alt="Fysioterapeut i arbejde, portræt"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="px-mobile lg:px-desktop absolute z-20 inset-0 flex flex-col justify-center items-center text-secondary text-center">
            <h1>Book en indledende samtale</h1>
            <p className="text-pretty ">
              Her kan du booke en tid til en indledende samtale med Motus &
              Manus. Samtalen er uforpligtende og giver dig mulighed for at høre
              mere om, hvordan en skræddersyet sundhedsordning kan se ud i din
              virksomhed.
            </p>
          </div>
        </div>
        <div className="bg-secondary flex flex-col h-full   w-full">
          <div className="w-full mt-4 flex items-start lg:px-10">
            <StepIndicator currentStep={step} />
          </div>
          <div className=" py-20 px-mobile lg:px-desktop">
            <div className=" w-full    rounded-xl">
              <BookingForm step={step} setStep={setStep} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
