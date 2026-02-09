// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function SolutionsAnimation() {
//   useGSAP(() => {
//     gsap.utils.toArray(".solution-card").forEach((card) => {
//       gsap.from(card, {
//         opacity: 0,
//         y: 80,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//           end: "bottom 60%",
//           scrub: false,
//         },
//       });
//     });
//   }, []);

//   return null; // no UI, only animation logic
// }


// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function SolutionsAnimation() {
//   useGSAP(() => {
//     gsap.utils.toArray(".solution-card").forEach((card) => {
//       gsap.fromTo(
//         card,
//         {
//           scale: 0.92,
//           y: 60,
//           opacity: 0.9,
//         },
//         {
//           scale: 1,
//           y: 0,
//           opacity: 1,
//           ease: "none", // IMPORTANT for smooth scrub
//           scrollTrigger: {
//             trigger: card,
//             start: "top 98%",
//             end: "top 95%",
//             scrub: 1, // 👈 smooth scroll-linked animation
//           },
//         }
//       );
//     });
//   }, []);

//   return null;
// }
import React from 'react'

const SolutionsAnimation = () => {
  return (
    <div>
      
    </div>
  )
}

export default SolutionsAnimation
