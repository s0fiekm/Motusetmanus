"use client";
import Link from "next/link";

export default function CTAButton({text, href, onClick}) {
  const className =
    "bg-cta text-secondary px-6 py-2 rounded-lg hover:opacity-90 transition";

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
