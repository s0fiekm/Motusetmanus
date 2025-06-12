import React from "react";

export default function PaymentCard({text, title, number}) {
  return (
    <div className="bg-tertiary p-6 rounded-2xl flex flex-row gap-2 place-items-baseline">
      <div className=" text-cta mb-2 rounded-full  bg-secondary w-6 h-6 flex items-center justify-center">
        <span>{number}</span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-primary ">{title}</h3>
        <p className=" text-primary">{text}</p>
      </div>{" "}
    </div>
  );
}
