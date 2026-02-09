import Image from "next/image";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import { Users, Target, Lightbulb } from "lucide-react";

import mainImage from "../../../public/career/cultureOfImpact.png";
import mentorWithGrowth from "../../../public/career/workThatMatter.png";
import techPlaning from "../../../public/career/loveItHere.png";

export default function JourneySection() {
  return (
    <Section
      id="journey"
      size="lg"
      background="bg-[#f8f8ff]"
    
    //   background="bg-slate-50"
    //   className="px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <Heading
        headline="Your Journey with i-Connectresources"
        subHeadline="We’re a company that thrives on curiosity, collaboration, and continuous growth."
        maxWidth="6xl"
      />

      <div className= " container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        {/* Left Column: Visual Composition */}
        <div className="relative grid grid-cols-2 gap-4">
          {/* Main Image */}
          <div className="col-span-2 relative h-[300px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={mainImage}
              alt="Our culture at i-Connectresources"
              fill
              className="object-cover object-top"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                Our Culture
              </p>
              <h4 className="text-xl font-bold">Innovation in Action</h4>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 duration-500">
            <Image
              src={mentorWithGrowth}
              alt="Work that matters"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

          </div>

          <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 duration-500">
            <Image
              src={techPlaning}
              alt="Why you'll love it here"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="grid gap-6">
          {/* Card 1 */}
          <div className="flex gap-5 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
            {/* <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <Lightbulb className="text-blue-600 w-6 h-6" />
            </div> */}
            <div>
              <h4 className="card-heading-title ">
                A Culture of Impact
              </h4>
              <p className="card-subtitle ">
                At i-Connectresources, every idea, every workflow, and every line
                of code contributes to something bigger — real change. You won’t
                just build software; you’ll craft solutions that power hospitals,
                streamline government operations, and transform global
                enterprises.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-5 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
            {/* <div className="bg-indigo-100 p-3 rounded-xl h-fit">
              <Target className="text-indigo-600 w-6 h-6" />
            </div> */}
            <div>
              <h4 className="card-heading-title ">
                Work That Matters
              </h4>
              <p className="card-subtitle">
                Our mission is simple yet powerful — to make technology
                meaningful. From re-imagining IT operations to delivering
                AI-driven automation, we work where purpose meets innovation and
                turn bold ideas into lasting impact.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-5 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
            {/* <div className="bg-green-100 p-3 rounded-xl h-fit">
              <Users className="text-green-600 w-6 h-6" />
            </div> */}
            <div>
              <h4 className="card-heading-title ">
                Why You’ll Love It Here
              </h4>
              <p className="card-subtitle">
                We invest in people as much as in technology. You’ll grow through
                mentorship, thrive in a supportive culture, and see your work
                make a measurable difference — every single day.
              </p>
            </div>
          </div>

          {/* CTA */}
          {/* <button className="mt-4 w-fit bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Explore Opportunities
          </button> */}
        </div>
      </div>
    </Section>
  );
}
