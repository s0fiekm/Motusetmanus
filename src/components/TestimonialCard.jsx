"use client";
import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialCard({ title, author }) {
  const [expanded, setExpanded] = useState(false);

  const previewLength = 350;

  const isLong = title.length > previewLength;

  const visibleText =
    expanded || !isLong ? title : title.slice(0, previewLength) + "…";

  return (
    <article className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white shadow-md snap-start min-w-[160px] max-w-[400px] shrink-0 h-[350px] flex flex-col gap-2">
      <ImQuotesLeft className=" text-secondary opacity-80 text-[40px] top-4 left-6 z-0" />

      <div className="relative z-10 flex flex-col gap-2 overflow-hidden h-full">
        <div className="overflow-y-auto pr-2  flex-1">{visibleText}</div>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-cta  mt-2 underline self-start"
          >
            {expanded ? "Læs mindre" : "Fortsæt læsning"}
          </button>
        )}

        <p className=" italic opacity-80">{author}</p>
      </div>
    </article>
  );
}
