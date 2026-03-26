import Section from "@/components/layouts/Section";
import ourMissionGray from "../../../public/About/ourMission.png";
import ourMissionColor from "../../../public/About/ourMissionColor.png";
import ourVision from "../../../public/About/ourVision.png";
import ourVisionColor from "../../../public/About/ourVisionColor.png";
import whoWeAre from "../../../public/About/whoWeAre.jpg";
import whoWeAreColor from "../../../public/About/whoWeAreColor.jpg";
import Image from "next/image";

export default function Introduction() {
  return (
    <>
      {/* ================= WHO WE ARE ================= */}
      <Section id="who-we-are" background="bg-white" size="xl">
        <div className="container relative max-w-[1300px] grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-10">
          {/* ================= DECORATIVE BACKGROUND ================= */}
          {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div> */}

          {/* ================= TEXT ================= */}
          <div className="relative col-span-12 md:col-span-7">
            {/* Vertical Accent */}
            {/* <div className="absolute -left-6 top-14 h-24 w-0.5 bg-linear-to-b from-primary/40 to-transparent hidden md:block" /> */}

            <h2 className="text-3xl sm:text-[34px] md:text-4xl font-regular  text-primary mb-4 md:mb-6">
              Who We Are
            </h2>

            {/* Highlight block */}
            <div className="relative max-w-full md:max-w-[90%] flex items-start gap-4 rounded-xl  mb-3 md:mb-4">
              <div className="w-1 rounded-full bg-primary self-stretch" />
              <p className="text-primary text-base leading-relaxed py-2">
                To empower organizations to innovate, automate, and thrive
                through AI-driven and process-optimized solutions.
              </p>
            </div>

            <p className="card-subtitle content-default max-w-full md:max-w-[80%]">
              At i-Connectresources, we exist to solve the complex challenges
              that hold organizations back. From enterprise to government, from
              automation to infrastructure modernization, we align technology
              with purpose — delivering results that redefine how businesses
              operate, innovate, and grow.
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="
            col-span-12 md:col-span-5
            relative
            h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[360px]
            rounded-2xl
            md:pl-16 lg:pl-20 xl:pl-24
          "
          >
            {/* Outline Accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/20 rounded-2xl rotate-12 hidden md:block" />

            {/* Dot Matrix */}
            <div className="absolute bottom-6 left-6 hidden lg:grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="w-1 h-1 bg-primary rounded-full" />
              ))}
            </div>

            {/* Floating Image */}
            <div
              className="
              absolute
              left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2

              md:left-auto md:top-1/2
              md:translate-x-0 md:-translate-y-1/2
              lg:-left-16 xl:-left-20

              h-[70%] w-[70%]
              md:h-[170px] md:w-[130px]
              lg:h-[200px] lg:w-[150px]
              xl:h-[220px] xl:w-[165px]

              rounded-2xl
            border md:border-8 border-white
              z-10
              overflow-hidden
              bg-white
              shadow-xl
            "
            >
              <Image
                src={whoWeAreColor}
                alt="Who We Are"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Background Image */}
            <Image
              src={whoWeAre}
              alt="Who We Are background"
              fill
              className="object-cover opacity-80 rounded-2xl"
              priority
            />
          </div>
        </div>
      </Section>

      {/* ================= OUR VISION ================= */}
      <Section id="vision" background="bg-[#F9FAFB]" size="xl">
        <div className="container max-w-[1300px] grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Image Placeholder */}
          <div
            className="
                order-2 md:order-1
                col-span-12 md:col-span-5
                relative
                h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[360px]
                rounded-2xl
                md:pr-16 lg:pr-20 xl:pr-24
            "
          >
            {/* Floating Image */}
            <div
              className="
                absolute top-1/2

                left-1/2 -translate-x-1/2 -translate-y-1/2

                md:left-auto md:right-0
                md:translate-x-1/2 md:-translate-y-1/2

                h-[70%] w-[70%]
                md:h-[170px] md:w-[130px]
                lg:h-[200px] lg:w-[150px]
                xl:h-[220px] xl:w-[165px]

                rounded-2xl
                border md:border-8 border-white
                z-10
                overflow-hidden
                // bg-white/20
                shadow-xl
                "
            >
              <Image
                src={ourVisionColor}
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Background Image */}
            <Image
              src={ourVision}
              alt="Our Mission background"
              fill
              className="object-cover opacity-80 rounded-2xl"
              priority
            />
          </div>

          {/* Text */}
          <div className="relative order-1 md:order-2 col-span-12 md:col-span-7 md:pl-20">
            <h2 className="text-3xl md:text-4xl font-regular  text-primary mb-4">
              Our Vision
            </h2>

            <div className="relative max-w-full md:max-w-[90%] flex items-start gap-4 rounded-xl bg-linear-to-r from-primary/9 via-primary/5 to-transparent mb-3 md:mb-4">
              <div className="w-1 rounded-full bg-primary self-stretch" />
              <p className="text-primary text-base leading-relaxed py-2">
                Innovation and automation aren’t just part of what we do —
                they’re who we are.
              </p>
            </div>

            <p className="card-subtitle content-default leading-relaxed">
              At i-Connectresources, innovation and automation are in our DNA.
              We envision a future where intelligent process automation goes
              beyond improving efficiency — it redefines how organizations
              think, operate, and evolve. Our vision is to create a world where
              technology amplifies human potential, where every process is
              smarter, every decision is faster, and every experience is more
              meaningful.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= OUR MISSION ================= */}
      <Section id="mission" background="bg-white" size="xl">
        <div className="container max-w-[1300px] grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-10">
          {/* ================= TEXT ================= */}
          <div className="relative col-span-12 md:col-span-7">
            <h2 className="text-3xl sm:text-[34px] md:text-4xl font-regular  text-primary mb-4 md:mb-6">
              Our Mission
            </h2>

            {/* Highlight block */}
            <div className="relative max-w-full  md:max-w-[90%] flex items-start gap-4 rounded-xl bg-linear-to-r from-primary/9 via-primary/5 to-transparent mb-3 md:mb-4">
              <div className="w-1 rounded-full bg-primary self-stretch" />
              <p className="text-primary text-base leading-relaxed py-2">
                To empower organizations to innovate, automate, and thrive
                through AI-driven and process-optimized solutions.
              </p>
            </div>

            <p className="card-subtitle content-default max-w-full  md:max-w-[80%]">
              Our mission is to empower organizations to innovate, automate, and
              thrive through AI-driven and process-optimized solutions. We align
              strategy, technology, and execution to deliver scalable impact
              that enables businesses to grow smarter and stronger.
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="
                col-span-12 md:col-span-5
                relative
                h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[360px]
                rounded-2xl
                md:pl-16 lg:pl-20 xl:pl-24
                "
          >
            {/* Floating Image */}
            <div
              className="
                absolute
                left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2

                md:left-auto md:top-1/2
                md:translate-x-0 md:-translate-y-1/2
                lg:-left-16 xl:-left-20

                h-[70%] w-[70%]
                md:h-[170px] md:w-[130px]
                lg:h-[200px] lg:w-[150px]
                xl:h-[220px] xl:w-[165px]

                rounded-2xl
                border md:border-8 border-white
                z-10
                overflow-hidden
                bg-white
            "
            >
              <Image
                src={ourMissionColor}
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Background Image */}
            <Image
              src={ourMissionGray}
              alt="Our Mission background"
              fill
              className="object-cover opacity-80 rounded-2xl"
              priority
            />
          </div>
        </div>
      </Section>
    </>
  );
}
