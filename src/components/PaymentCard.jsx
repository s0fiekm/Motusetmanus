import React from "react";

export default function PaymentCard({text, title, number}) {
  return (
    <div className="bg-tertiary p-6 rounded-2xl flex flex-row gap-4 items-start">
      <div className=" opacity-40 text-secondary rounded-full  bg-primary w-8 h-8 flex items-center justify-center">
        <span>{number}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-primary ">{title}</h3>
        <p className=" text-primary">{text}</p>
      </div>{" "}
    </div>
  );
}
