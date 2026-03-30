"use client";

import Image from "next/image";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import mentor from "../../../public/career/mentor.png";
import agile from "../../../public/career/agile.png";
import colab from "../../../public/career/Global_Clients.jpg";
import learning from "../../../public/career/learning.jpg";
import workLife from "../../../public/career/worklife.png";
import diversity from "../../../public/career/diversity.jpg";

const workItems = [
  {
    title: "Guided by Mentors, Driven by You",
    description:
      "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
    image: mentor,
    size: "md:col-span-6",
  },
  {
    title: "Collaboration Without Borders",
    description:
      "Our teams across India and the U.S. collaborate seamlessly, sharing knowledge, ideas, and expertise to deliver world-class solutions.",
    image: colab,
    size: "md:col-span-6",
  },
  {
    title: "Continuous Learning Culture",
    description:
      "From industry-recognized certifications to workshops and global conferences, we invest in your growth — so you can keep learning, evolving, and leading.",
    image: learning,
    size: "md:col-span-5",
  },
  {
    title: "Agile + DevOps in Action",
    description:
      "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
    image: agile,
    size: "md:col-span-7",
  },
  {
    title: "Flexible Work, Real Balance",
    description:
      "We offer hybrid and remote opportunities that let you work where you’re most productive — because great ideas don’t depend on location.",
    image: workLife,
    size: "md:col-span-6",
  },
  {
    title: "Diversity as Our Strength",
    description:
      "We thrive on diverse perspectives. By fostering an inclusive environment where every voice is heard, we build more empathetic products and a stronger, more creative team.",
    image: diversity, // Reusing learning as in original, but could vary if more assets existed
    size: "md:col-span-6",
  },
];

export default function HowWeWorkSection() {
  return (
    <Section id="how-we-work" size="lg" className="bg-slate-50/30">
      <div className="container mx-auto">
        <Heading
          headline="How We Work"
          subheadline="At i-Connectresources, work isn’t just about delivering projects — it’s about growing together, innovating boldly, and creating real impact every day."
          maxWidth="4xl"
        />

        <div className="grid grid-cols-12 gap-6 mt-20">
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`relative col-span-12 ${item.size} h-[350px] md:h-[400px] rounded-[2rem] overflow-hidden group transition-all duration-500 shadow-md hover:shadow-xl`}
            >
              {/* Noisy Texture Overlay */}
              <div className="noisy absolute inset-0 z-10 opacity-20 pointer-events-none" />

              {/* Background Image with Hover Scale */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 "
              />

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:from-slate-900/95" />

              {/* Card Content with Improved Alignment and Spacing */}
              <div className="absolute inset-0 z-30 p-8 md:p-10 flex flex-col justify-end text-white transform transition-transform duration-500">
                <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-slate-200 leading-relaxed font-light max-w-[90%]  ">
                  {item.description}
                </p>
              </div>

              {/* Decorative Element on Corner */}
              {/* <div className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
