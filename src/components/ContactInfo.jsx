import React from "react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="w-full bg-surface flex flex-col lg:grid lg:grid-cols-3">
      <div className="col-span-1">
        <Image
          src="/assets/contact.jpg"
          alt="Portræt af fysioterapeut i behandling "
          width={600}
          height={800}
          className="object-cover w-full h-full "
        />
      </div>
      <div>
        <h2>Kontakt</h2>
        <h3>Lad os sammen skabe en sundere og mere produktiv arbejdsplads!</h3>
        <p>Kontakt mig for en uforpligtende samtale</p>
        <ul>
          <li>+45 00 00 00 00</li>
          <li>email@mail.dk</li>
        </ul>
      </div>
    </div>
  );
}
