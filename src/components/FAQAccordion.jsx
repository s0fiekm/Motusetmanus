"use client";
import React, { useState } from "react";
import faqData from "@/data/faqData";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState("behandling");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = Object.keys(faqData);

  return (
    <div
      id="#faq"
      className="w-full flex flex-col  xl:px-desktop lg:px-desktop-m px-mobile  bg-secondary lg:min-h-[600px]"
    >
      <div className="max-w-6xl flex flex-col lg:gap-10 py-20 ">
        <h2 className="text-primary mb-6   t text-left">
          Ofte stillede spørgsmål
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1px_2fr] gap-6 min-h-[00px]">
          <div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null);
                }}
                className="group block text-left py-2 px-1 transition-all duration-200 cursor-pointer text-cta tracking-wide"
              >
                <span
                  className={`relative text-cta ${
                    selectedCategory === cat ? "brightness-90" : ""
                  } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-cta ${
                    selectedCategory === cat
                      ? "after:opacity-100"
                      : "after:opacity-0 group-hover:after:opacity-100"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              </button>
            ))}
          </div>
          <div className="bg-tertiary w-[1px] h-full  hidden lg:block" />

          <div className="text-primary max-h-[500px] overflow-y-auto lg:pl-12">
            {faqData[selectedCategory].map((item, index) => (
              <div key={index} className="border-b border-tertiary py-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span
                    className={
                      openIndex === index ? "font-bold" : "font-normal"
                    }
                  >
                    {item.question}
                  </span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-primary">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
