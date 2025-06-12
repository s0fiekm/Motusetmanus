import Image from "next/image";
import React from "react";

export default function ProsItem({src, alt, title, text}) {
  return (
    <div className="flex flex-col  text-center lg:justify-end items-center gap-2 text-primary">
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
        className="object-cover"
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
