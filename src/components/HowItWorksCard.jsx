export default function HowItWorksCard({number, title, text, align}) {
  const isLeft = align === "left";

  return (
    <div
      className={`
        flex 
        ${isLeft ? "justify-start" : "justify-end"} 
        lg:justify-center
      `}
    >
      <div className="w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] lg:-ml-20 border border-secondary rounded-full flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-start text-left text-secondary max-w-[220px]">
          <h3 className="font-bold text-lg">{number}</h3>
          <p className="font-bold">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
