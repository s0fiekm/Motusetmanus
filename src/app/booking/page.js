"use client";

import React, {useState} from "react";
import BookingForm from "@/components/BookingForm";
import StepIndicator from "@/components/StepIndicator";

export default function BookingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className=" relative w-full h-svh overflow-hidden">
      <main className="  relative z-10 lg:grid lg:grid-cols-2  ">
        <div className="py-30  px-desktop text-primary h-svh inset-0  bg-[url('/assets/hero2.jpg')] bg-cover bg-center z-0">
          <h1>Book en indledende samtale</h1>
          <p className="text-pretty">
            Her kan du booke en tid til en indledende samtale med Motus & Manus.
            Samtalen er uforpligtende og giver dig mulighed for at høre mere om,
            hvordan en skræddersyet sundhedsordning kan se ud i din virksomhed.
          </p>
        </div>
        <div className="bg-secondary flex flex-col   w-full">
          <div className="w-full mt-4 flex items-start lg:px-10">
            <StepIndicator currentStep={step} />
          </div>
          <div className=" py-20 lg:px-desktop">
            <div className=" w-full   rounded-xl">
              <BookingForm step={step} setStep={setStep} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
