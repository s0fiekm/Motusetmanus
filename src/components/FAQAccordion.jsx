"use client";
import React, {useState} from "react";
import faqData from "@/data/Faqdata";

export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState("behandling");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = Object.keys(faqData);

  return (
    <div className="flex flex-col lg:flex-row w-full  mx-auto gap-10">
      <div className="lg:w-1/3 border-r border-gray-300 pr-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndex(null);
            }}
            className={`block w-full text-left py-2 font-medium ${
              selectedCategory === cat
                ? "text-cta font-bold underline"
                : "text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="lg:w-2/3 pl-4 text-primary">
        {faqData[selectedCategory].map((item, index) => (
          <div key={index} className="border-b border-tertiary py-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-primary text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
