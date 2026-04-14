"use client";
import React, { useEffect, useRef } from "react";
import { CheckCircle, Settings } from "lucide-react";
import Link from "next/link";
import categories from "@/constants/constServiceCategory";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import Heading from "@/components/Heading";
import gsap from "gsap";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";
export default function ServiceCategories() {
  return (
    <Section id="OldServices" className="w-full bg-white overflow-hidden">
      <div className="container mx-auto">
        <Heading
          maxWidth="max-w-[800px]"
          headline="Our Solutions"
          subHeadline="Our Solutions focus on business outcomes and real-world impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {categories.map((cat) => (
            <ServiceCard key={cat.id} cat={cat} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          {/* <Link href="/contact#form" className="bg-primary text-white px-6 py-2 rounded-xl hover:text-blue-300 transition-colors duration-300">
                Request Call Back 
          </Link> */}
          <ModernCapsuleCTA text="Request Call Back " href="/contact#form" />
        </div>
      </div>
    </Section>
  );
}
/* -------------------------------- CARD -------------------------------- */
function ServiceCard({ cat }) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const revealRefs = useRef([]);
  const setting = useRef(null);
  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const icon = iconRef.current;
    const heading = headingRef.current;
    const reveals = revealRefs.current;
    const settings = setting.current;
    const mm = gsap.matchMedia();
    let tl;
    mm.add(
      {
        mobile: "(max-width: 640px)",
        tablet: "(min-width: 641px) and (max-width: 1023px)",
        desktop: "(min-width: 1024px)",
      },
      (context) => {
        const { mobile, tablet } = context.conditions;
        /* ---------------- Initial States ---------------- */
        gsap.set(content, {
          y: mobile ? 0 : tablet ? 90 : 120,
        });
        gsap.set(icon, {
          width: mobile ? 48 : tablet ? 64 : 80,
          height: mobile ? 48 : tablet ? 64 : 80,
        });
        gsap.set(settings, {
          width: mobile ? 5 : tablet ? 35 : 45,
          height: mobile ? 5 : tablet ? 35 : 45,
        });
        gsap.set(heading, {
          fontSize: mobile ? "1.4rem" : tablet ? "1.6rem" : "1.8rem",
        });
        gsap.set(reveals, { autoAlpha: 0, y: 10 });
        /* ---------------- Timeline ---------------- */
        tl = gsap.timeline({ paused: true });

        tl.to(content, {
          y: mobile ? 4 : tablet ? 2 : 2,
          duration: mobile ? 0.55 : 0.5,
          ease: "power3.out",
          background: "rgba(0, 0, 0, 0.66)",
        })
          .to(
            icon,
            {
              width: mobile ? 30 : tablet ? 50 : 50,
              height: mobile ? 30 : tablet ? 50 : 50,
              duration: 0.6,
              y: 8,
              ease: "power2.out",
            },
            "<",
          )
          .to(
            settings,
            {
              width: mobile ? 19 : tablet ? 23 : 27,
              height: mobile ? 19 : tablet ? 23 : 27,
              rotate: 360,
              duration: 0.6,
              ease: "power2.out",
            },
            "<",
          )
          .to(
            heading,
            {
              fontSize: mobile ? "0.99rem" : tablet ? "1rem" : "1.5rem",
              duration: 0.2,
              ease: "power2.out",
              whiteSpace: mobile ? "normal" : "normal",
            },
            "<",
          )
          .to(
            reveals,
            {
              autoAlpha: 1,
              y: 4,
              stagger: 0.2,
              duration: mobile ? 0.5 : 0.3,
            },
            "-=0.25",
          );

        mobile
          ? tl.play()
          : card.addEventListener("mouseenter", () => tl.play());
      },
    );
    card.addEventListener("mouseleave", () => tl.reverse());

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-fit   lg:h-[430px] md:h-[550] w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl xl:h-400px"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={cat.img} alt={cat.heading} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative h-full px-4 flex flex-col items-start md:px-8 md:py-1 text-white"
      >
        {/* Icon */}
        <div
          ref={iconRef}
          className=" mb-6 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur mt-2 md:mb-8 md:p-2"
        >
          <cat.icon ref={setting} />
        </div>
        {/* Heading */}
        <h3 ref={headingRef} className="font-bold  mb-2 md:mb-3 ">
          {cat.heading}
        </h3>
        {/* Description */}
        <p
          ref={(el) => (revealRefs.current[0] = el)}
          className="text-sm  mb-5 md:tracking-normal md:text-md text-white md:mb-6 "
        >
          {cat.subHeading}
        </p>
        {/* Features */}
        <ul
          ref={(el) => (revealRefs.current[1] = el)}
          className="space-y-1.5 md:space-y-1  mb-5  md:mb-4"
        >
          {cat.featureList.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm md:text-sm lg:tracking-wide md:pb-1 "
            >
              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-1" />
              {item}
            </li>
          ))}
        </ul>
        {/* Client Outcome */}
        <div
          ref={(el) => (revealRefs.current[2] = el)}
          className="w-fit h-fit rounded-lg bg-white/18 backdrop-blur px-4 py-2  mb-6"
        >
          <p className="text-xs mb-1 tracking-widest uppercase text-white/80">
            Client Outcome
          </p>
          <p className="text-xs tracking-tight  md:tracking-normal">
            {cat.footerContent}
          </p>
        </div>
        {/* Buttons */}
      </div>
    </div>
  );
}
