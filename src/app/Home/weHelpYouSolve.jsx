"use client";

import { useEffect, useState } from "react";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    tag: "ENTERPRISE IT",
    quote:
      "Our teams struggled with scattered IT support. i-Connectresources streamlined it with ServiceNow and Virtual Agents.",
    solution: "ServiceNow & Virtual Agents",
  },
  {
    tag: "INFRASTRUCTURE",
    quote:
      "Managing infrastructure across cloud and legacy systems was painful. They made it seamless.",
    solution: "Hybrid Cloud Management",
  },
  {
    tag: "ENTERPRISE IT",
    quote:
      "Our teams struggled with scattered IT support. i-Connectresources streamlined it with ServiceNow and Virtual Agents.",
    solution: "ServiceNow & Virtual Agents",
  },
  {
    tag: "INFRASTRUCTURE",
    quote:
      "Managing infrastructure across cloud and legacy systems was painful. They made it seamless.",
    solution: "Hybrid Cloud Management",
  },
];

export default function WeHelpYouSolve() {
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- Responsive cards-per-page ---------------- */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => {
      setCardsPerPage(media.matches ? 1 : 2);
      setIndex(0);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));

  useEffect(() => {
    if (index === totalPages) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
    setEnableTransition(true);
  }, [index, totalPages]);

  const pages = Array.from({ length: totalPages + 1 }).map((_, pageIndex) => {
    const start = (pageIndex % totalPages) * cardsPerPage;
    return cards.slice(start, start + cardsPerPage);
  });

  if (!mounted) return null;

  return (
    <Section
      id="use-cases"
      size="xl"
      background="relative bg-zinc-100/70 overflow-hidden" // Light Background
    >
      {/* Subtle grid background for light theme */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:210px_100%]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100%_210px]"></div>

      <div className="container relative">
        <Heading
          headline="We Help You Solve What Matters Most"
          subheadline="Real solutions for real business challenges — because your problems deserve outcomes, not excuses."
          color="black" // Light theme heading
          className="mb-16"
        />

        <div className="relative overflow-hidden">
          <div
            className={`flex ${
              enableTransition ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {pages.map((pageCards, pageIndex) => (
              <div
                key={pageIndex}
                className={`min-w-full grid gap-10 px-4 ${
                  cardsPerPage === 1 ? "grid-cols-1" : "lg:grid-cols-2"
                }`}
              >
                {pageCards.map((card, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300"
                  >
                    {/* Subtle internal glow for light theme */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-50/50 opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-sm text-primary font-bold tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        {card.tag}
                      </div>

                      <p className="mt-6 text-zinc-700 leading-relaxed text-base italic">
                        “{card.quote}”
                      </p>

                      <div className="mt-6 border-t border-zinc-100 pt-4 text-sm text-zinc-500 flex flex-col sm:flex-row">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="font-semibold">Solution:</span>
                        </div>

                        <div className="mt-1 sm:mt-0 sm:ml-6 text-primary font-medium">
                          {card.solution}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Inverted to Dark */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 hover:scale-105 transition shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 hover:scale-105 transition shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
}