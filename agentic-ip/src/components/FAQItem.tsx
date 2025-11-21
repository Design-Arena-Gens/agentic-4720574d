"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur transition-all duration-300 hover:bg-white/[0.06]">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-cyan-300 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-slate-300 text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
