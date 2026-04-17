"use client";

import Image from "next/image";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";

// Image Imports
// import mentor from "../../../public/career/mentor.png";
// import colab from "../../../public/career/Global_Clients.jpg";
// import learning from "../../../public/career/learning.jpg";
// import agile from "../../../public/career/agile.png";
// import workLife from "../../../public/career/worklife.png";
// import diversity from "../../../public/career/diversity.jpg";

import mentor from "../../../public/shutterstock/Career/careeerHowWEWork.png";
import colab from "../../../public/shutterstock/Career/careerHowWeWork2.png";
import learning from "../../../public/shutterstock/Career/careerHowWeWork3.png";
import agile from "../../../public/shutterstock/Career/careerHowWeWork4.png";
import workLife from "../../../public/shutterstock/Career/careerHowWeWork5.png";
import diversity from "../../../public/shutterstock/Career/careerHowWeWork6.png";

const workItems = [
  {
    title: "Guided by Mentors, Driven by You",
    description:
      "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
    image: mentor,
  },
  {
    title: "Collaboration Without Borders",
    description:
      "Our teams across India and the U.S. collaborate seamlessly, sharing knowledge, ideas, and expertise to deliver world-class solutions.",
    image: colab,
  },
  {
    title: "Continuous Learning Culture",
    description:
      "From industry-recognized certifications to workshops and global conferences, we invest in your growth — so you can keep learning, evolving, and leading.",
    image: learning,
  },
  {
    title: "Agile + DevOps in Action",
    description:
      "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
    image: agile,
  },
  {
    title: "Flexible Work, Real Balance",
    description:
      "We offer hybrid and remote opportunities that let you work where you’re most productive — because great ideas don’t depend on location.",
    image: workLife,
  },
  {
    title: "Diversity is Our Strength",
    description:
      "We thrive on diverse perspectives. By fostering an inclusive environment where every voice is heard, we build more empathetic products and a stronger, more creative team.",
    image: diversity,
  },
];

export default function HowWeWorkSection() {
  return (
    <Section id="how-we-work" size="lg">
      <div className="container mx-auto px-4">
        <Heading
          headline="How We Work"
          subheadline="At i-Connectresources, work isn’t just about delivering projects — it’s about growing together, innovating boldly, and creating real impact every day."
          maxWidth="4xl"
        />

        {/* Industry Standard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Noise Texture for Premium Feel */}
              <div className="noisy absolute inset-0 z-10 opacity-20 pointer-events-none" />

              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:from-black" />

              {/* Content Container */}
              <div className="absolute inset-0 z-30 p-8 md:p-10 flex flex-col justify-end text-white">
                <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-slate-200/90 leading-relaxed font-light">
                  {item.description}
                </p>
                
                {/* Visual Indicator (Optional) */}
                <div className="w-12 h-1 bg-blue-500 mt-6 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
