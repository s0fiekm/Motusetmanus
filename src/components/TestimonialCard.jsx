import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialCard({ title, author }) {
  return (
    <article className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white shadow-md snap-start min-w-[260px] max-w-[320px] shrink-0">
      <ImQuotesLeft className="absolute text-white opacity-10 text-[80px] top-2 right-2 z-0" />
      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm italic opacity-80">{author}</p>
      </div>
    </article>
  );
}
