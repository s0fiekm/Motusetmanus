import React from "react";

export default function PaymentCard({ text, title, number }) {
  return (
    <div className="bg-tertiary p-6 rounded-2xl flex flex-row gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-primary text-secondary opacity-40 flex items-center justify-center text-sm leading-none font-medium shrink-0">
        <span>{number}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-primary ">{title}</h3>
        <p className=" text-primary">{text}</p>
      </div>{" "}
    </div>
  );
}
