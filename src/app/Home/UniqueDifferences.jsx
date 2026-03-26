// import React from "react";
// import Heading from "@/components/Heading";
// import Section from "@/components/layouts/Section";

// export function cn(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Frame() {
//   const differentiators = [
//     {
//       title: "Outcome-Driven Approach",
//       description:
//         "We engineer end-to-end digital experiences that deliver measurable business value.",
//       image:
//         "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       title: "Automation-First DNA",
//       description:
//         "Every engagement is rooted in workflow automation, AI/ML, and GenAI for efficiency.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       title: "Flexible & Scalable Engagements",
//       description:
//         "On-demand, deliverable-based services designed to scale with your business.",
//       image:
//         "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       title: "Proven High-Stakes Delivery",
//       description:
//         "Trusted across mission-critical projects where reliability matters most.",
//       image:
//         "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       title: "Trusted Across Industries",
//       description:
//         "Built for Government, Healthcare, and Enterprise with compliance and security.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <Section
//       id="differentiators"
//       size="xl"
//       background="bg-slate-200/10"
//       className="px-4"
//     >
//       <div className="container">
//         <Heading
//           headline="Our Unique Differentiators"
//           subheadline="Enterprise-grade solutions built for scale."
//           color="black"
//           maxWidth="4xl"
//         />

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
//           {differentiators.map((item, index) => (
//             <div
//               key={index}
//               className="group rounded-md  overflow-hidden bg-white "
//             >
//               {/* Image */}
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover "
//                 />
//               </div>

//               {/* Content */}
//               <div className=" pt-4 flex flex-col ">
//                 <h3 className="heading-default text-base lg:text-lg font-normal mb-1">
//                   {item.title}
//                 </h3>

//                 <p className="card-subtitle content-default">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }
import React from "react";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
 
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
 
export default function Frame() {
  const differentiators = [
    {
      title: "We measure success by your results—not our deliverables",
      description:
        "We engineer end-to-end digital experiences that deliver measurable business value.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Automation-First DNA",
      description:
        "Every engagement is rooted in workflow automation, AI/ML, and GenAI efficiency.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Scale up, down, or sideways - without friction",
      description:
        "We Offer On-demand, deliverable-based services designed to scale with your business.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Proven High-Stakes Delivery",
      description:
        "We are  Trusted across mission-critical projects where reliability matters most.",
      image:
        "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Built for high-stakes sectors like government & healthcare",
      description:
        "Our Solutions are Built for Government, Healthcare, and Enterprise Sectors with compliance and security.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
  ];
 
  return (
    <Section
      id="differentiators"
      size="xl"
      background="bg-slate-200/10"
      className="px-4"
    >
      <div className="container">
        <Heading
          headline="The i-Connect Differentiators"
          subheadline="Enterprise-grade solutions built for scale."
          color="black"
          maxWidth="4xl"
        />
 
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group rounded-md  overflow-hidden bg-white "
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />
              </div>
 
              {/* Content */}
              <div className=" pt-4 flex flex-col ">
                <h3 className="heading-default text-base lg:text-lg font-normal mb-1">
                  {item.title}
                </h3>
 
                <p className="card-subtitle content-default">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}