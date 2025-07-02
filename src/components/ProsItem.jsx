import Image from "next/image";
import React from "react";

export default function ProsItem({ src, alt, title, text }) {
  return (
    <div className="flex flex-col max-w-2xs text-center lg:justify-end items-center gap-4 text-primary">
      <div className="w-10  lg:w-20 ">
        <Image
          src={src}
          alt={alt}
          width={108}
          height={108}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col ">
        <p className=" font-semibold">{title}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
}
