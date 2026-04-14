"use client";

import { useState } from "react";
import type { DesktopPageAssets } from "./desktop-assets";

const ITEMS: { question: string; answer: string }[] = [
  {
    question: "What is the onboarding process?",
    answer:
      "Getting started takes about 30 minutes. Connect your POS system and upload your recipes in the format that works best for you. From there, Trove begins reflecting your current operations right away.",
  },
  {
    question: "What makes Trove different from other inventory software?",
    answer:
      "When invoices are uploaded, Trove automatically assigns units to each product and standardizes them across your system. For less precise items, the platform uses flexible unit tracking and historical usage patterns to maintain accurate estimates over time.",
  },
  {
    question: "How does Trove help improve margins?",
    answer:
      "Most systems focus on tracking inventory after the fact. Trove is built around helping you make better ordering decisions in the first place. It factors in perishable inventory, frequent ordering, vendor lead times, and how cafes actually operate day to day.",
  },
  {
    question: "How does Trove handle items that can't be precisely measured?",
    answer:
      "Trove is purpose-built for cafes dealing with perishable inventory and high turnover rates. We reduce waste and lost sales by optimizing what and when you purchase. The result is lower inventory costs, less spoilage, and more efficient day-to-day operations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data used within Trove is securely stored and strictly confidential. Your information is never shared with other businesses or third parties.",
  },
];

export function DesktopFaq({ assets }: { assets: DesktopPageAssets }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="absolute left-[203px] top-[2783px] flex w-[1104.5px] flex-col items-end gap-[50px]">
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="relative flex w-full shrink-0 flex-col items-start gap-[15px]">
            <div className="relative flex w-[1102.5px] shrink-0 items-center justify-between">
              <button
                type="button"
                className="min-h-0 min-w-0 flex-1 text-left font-medium leading-normal text-[35px] text-[#2c2b2a]"
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {item.question}
              </button>
              <button
                type="button"
                className="relative h-[8px] w-[18.5px] shrink-0 cursor-pointer"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <div className="absolute inset-[-15.63%_-6.76%_-20.66%_-6.76%]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={isOpen ? assets.chevronUp : assets.chevronDown}
                  />
                </div>
              </button>
            </div>
            {isOpen && (
              <p
                className="relative w-[696px] shrink-0 text-[20px] font-medium leading-[1.11] text-[#9a958b]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
