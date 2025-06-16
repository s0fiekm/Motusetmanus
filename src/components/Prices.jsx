import React from "react";
import PaymentCard from "./PaymentCard";
import {GoDotFill} from "react-icons/go";

export default function Prices() {
  return (
    <section
      id="price"
      className="flex flex-col gap-10 lg:gap-0  lg:flex lg:flex-row w-full justify-between px-mobile lg:px-desktop bg-secondary py-30"
    >
      <div className="lg:w-lg text-primary flex flex-col lg:px-0">
        <h2>Pris & Betalingsløsninger</h2>
        <p>
          Få en fleksibel ordning, der kan tilpasses dine behov og dit budget –
          uanset om du er selvstændig eller enkeltperson i en virksomhed. Du
          vælger selv, hvordan betalingen skal struktureres.
        </p>
        <div
          className="bg-primary w-full h-[0.5px] relative my-4
"
        ></div>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row items-center gap-1">
            <GoDotFill />
            550 kr. pr. time (momsfritaget)
          </li>
          <li className="flex flex-row items-center gap-1">
            {" "}
            <GoDotFill />
            Betaling via faktura efter hver behandlingsdag
          </li>
          <li className="flex flex-row items-center gap-1">
            {" "}
            <GoDotFill />
            Bruttolønsordning (skattefri sundhedsfremme)
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 lg:px-0">
        <PaymentCard
          title="Virksomhedsfinaniseret"
          number="1"
          text="En forkælelsesfordel til medarbejderne, hvor I som arbejdsgiver dækker omkostningerne fuldt ud."
        />
        <PaymentCard
          title="Fordelt finansiering "
          number="2"
          text=" Medarbejder og arbejdsgiver aftaler, hvordan udgiften fordeles, f.eks. 50/50."
        />
        <PaymentCard
          title="Medarbejderfinansieret"
          number="3"
          text="Medarbejderne dækker omkostninger selv via deres lønseddel."
        />
      </div>
    </section>
  );
}
