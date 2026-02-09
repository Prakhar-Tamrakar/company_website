"use client";
import { Calendar, Clock, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Section from "@/components/layouts/Section";
export default function BlogDetailSection({ blog }) {
  const articleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      articleRef.current,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
  }, []);
  return (
    <Section className="w-full mt-12 bg-gray-100/40">
      <div
        ref={articleRef}
        className=" container max-w-4xl  mx-auto rounded-lg bg-white p-4"
      >
        <Link href="/resources">
          <div className="mb-6 hover:text-primary tracking-wide font-medium">
         <ArrowLeft className="inline pb-1"/>   Go Back To Resources <hr className="text-gray-700/40" />
          </div>
        </Link>{" "}
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-relaxed tracking-wide">
          {blog.title}
        </h1>
        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-4">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Published by <strong>{blog.author}</strong>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Read time: {blog.readTime}
          </span>
        </div>
        {/* Divider */}
        <div className="h-px bg-gray-200 my-10" />
        {/* Quote Highlight */}
        {blog.quote && (<blockquote className="relative bg-gray-200/50 border-l-4 border-primary p-2 rounded-md mb-10 w-fit">
          <p className="text-primary italic text-base sm:text-lg leading-relaxed">
            “{blog.quote}”
          </p>
        </blockquote>)}
        <article className="space-y-6 text-gray-700 text-base leading-relaxed">
          {blog.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
        {blog.benefits &&( <div className="mt-10 space-y-3">
          {blog.benefits.map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>)}
       
        <div className="mt-16 bg-gray-200/40 rounded-2xl p-8 text-center border border-gray-200">
          {blog.footer &&(<p className="text-sm text-gray-600 mb-6">
            {blog.footer}
          </p>)}
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition">
            <Phone className="w-4 h-4" />
            Schedule a Strategy Call
          </button>
        </div>
      </div>
    </Section>
  );
}
