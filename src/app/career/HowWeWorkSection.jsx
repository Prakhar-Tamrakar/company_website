// "use client";

// import Image from "next/image";
// import Section from "@/components/layouts/Section";
// import Heading from "@/components/Heading";
// import img from '../../../public/About/certified_Experts.png'

// const workItems = [
//   {
//     title: "Guided by Mentors, Driven by You",
//     description:
//       "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
//   },
//   {
//     title: "Collaboration Without Borders",
//     description:
//       "Our teams across India and the U.S. collaborate seamlessly, sharing knowledge, ideas, and expertise to deliver world-class solutions.",
//   },
//   {
//     title: "Continuous Learning Culture",
//     description:
//       "From industry-recognized certifications to workshops and global conferences, we invest in your growth — so you can keep learning, evolving, and leading.",
//   },
//   {
//     title: "Agile + DevOps in Action",
//     description:
//       "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
//   },
//   {
//     title: "Flexible Work, Real Balance",
//     description:
//       "We offer hybrid and remote opportunities that let you work where you’re most productive — because great ideas don’t depend on location.",
//   },
// ];

// export default function HowWeWorkSection() {
//   return (
//     <Section id="how-we-work" size="lg">
//       {/* Heading */}
//       <Heading
//         headline="How We Work"
//         subHeadline="At i-Connectresources, work isn’t just about delivering projects — it’s about growing together, innovating boldly, and creating real impact every day."
//         maxWidth="4xl"
//       />

//       {/* Cards */}
//       <div className="container mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {workItems.map((item, index) => (
//           <div
//             key={index}
//             className="group relative h-[240px] rounded-2xl overflow-hidden shadow-lg"
//           >
//             {/* Image */}
//             <Image
//               src={img}
//               alt={item.title}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/55" />

//             {/* Content */}
//             <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
//               <h4 className="text-lg font-semibold mb-2 leading-snug">
//                 {item.title}
//               </h4>
//               <p className="text-sm text-white/90 leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// }

"use client";

import Image from "next/image";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import img from "../../../public/About/ourMission.png";
import mentor from "../../../public/career/mentor.png";
import agile from "../../../public/career/agile.png";

import colab from "../../../public/career/Global_Clients.jpg";
import learning from "../../../public/career/learning.jpg";
import workLife from "../../../public/career/worklife.png";

const workItems = [
  {
    title: "Guided by Mentors, Driven by You",
    description:
      "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
  },
  {
    title: "Collaboration Without Borders",
    description:
      "Our teams across India and the U.S. collaborate seamlessly, sharing knowledge, ideas, and expertise to deliver world-class solutions.",
  },
  {
    title: "Continuous Learning Culture",
    description:
      "From industry-recognized certifications to workshops and global conferences, we invest in your growth — so you can keep learning, evolving, and leading.",
  },
  {
    title: "Agile + DevOps in Action",
    description:
      "We combine agility and innovation to move fast and deliver smarter, ensuring every solution we build creates measurable value.",
  },
  {
    title: "Flexible Work, Real Balance",
    description:
      "We offer hybrid and remote opportunities that let you work where you’re most productive — because great ideas don’t depend on location.",
  },
];

export default function HowWeWorkSection() {
  return (
    <Section id="how-we-work" size="lg">
      <Heading
        headline="How We Work"
        subheadline="At i-Connectresources, work isn’t just about delivering projects — it’s about growing together, innovating boldly, and creating real impact every day."
        maxWidth="4xl"
      />

      <div className="container mt-16 space-y-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-12 gap-6 ">
          {/* 3 cols */}
          <div className="relative col-span-12 md:col-span-4 h-[300px] rounded-2xl overflow-hidden">
            <div className="noisy absolute inset-0 z-10" />
            <Image src={mentor} alt="" fill className="object-cover" />

            {/* Card Content */}
            <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end text-white bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h4 className="text-lg font-semibold mb-1">
                {workItems[0].title}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {workItems[0].description}
              </p>
            </div>
          </div>

          {/* 6 cols */}
          <div className="relative col-span-12 md:col-span-4 h-[300px] rounded-2xl overflow-hidden">
            <div className="noisy absolute inset-0 z-10" />
            <Image src={colab} alt="" fill className="object-cover" />

            <div
              className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white bg-linear-to-t from-black/80 via-black/40 to-transparent"
            >
              <h4 className="text-xl font-semibold mb-2">
                {workItems[1].title}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed max-w-[90%]">
                {workItems[1].description}
              </p>
            </div>
          </div>

          {/* 3 cols */}
          <div className="relative col-span-12 md:col-span-4 h-[300px] rounded-2xl overflow-hidden">
            <div className="noisy absolute inset-0 z-10" />
            <Image src={learning} alt="" fill className="object-cover" />

            <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end text-white bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h4 className="text-lg font-semibold mb-1">
                {workItems[2].title}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {workItems[2].description}
              </p>
            </div>
          </div>
        </div>
        {/* ================= BOTTOM GRID ================= */}
        <div className="grid grid-cols-12 gap-6">
          {/* 8 cols */}
          {/* 8 cols – Card 4 */}
          <div className="relative col-span-12 md:col-span-7 h-[300px] rounded-2xl overflow-hidden">
            <div className="noisy absolute inset-0 z-10" />
            <Image src={agile} alt="" fill className="object-cover" />

            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h4 className="text-xl font-semibold mb-2">
                {workItems[3].title}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed max-w-[80%]">
                {workItems[3].description}
              </p>
            </div>
          </div>

          {/* 4 cols – Card 5 */}
          <div className="relative col-span-12 md:col-span-5 h-[300px] rounded-2xl overflow-hidden">
            <div className="noisy absolute inset-0 z-10" />
            <Image src={workLife} alt="" fill className="object-cover" />

            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h4 className="text-lg font-semibold mb-2">
                {workItems[4].title}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {workItems[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
