'use client';

import { Calendar, Clock, CheckCircle, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BlogDetailSection() {
  const articleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      articleRef.current,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="w-full bg-white mt-24 py-8">
      <div
        ref={articleRef}
        className="max-w-4xl  mx-auto rounded-lg bg-gray-50 p-4"
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-relaxed tracking-wide">
         {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-4 mb-4">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Published by <strong>{blog.author}</strong>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Read time: 4 min
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-10" />

        {/* Quote Highlight */}
        <blockquote className="relative bg-gray-100/50 border-l-4 border-blue-600 px-6 py-5 rounded-md mb-10">
          <p className="text-blue-700 italic text-base sm:text-lg leading-relaxed">
            “Without an accurate CMDB, you’re managing change in the dark.”
          </p>
        </blockquote>

        {/* Content */}
        <article className="space-y-6 text-gray-700 text-base leading-relaxed">
          {blog.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {/* Benefits */}
        <div className="mt-10 space-y-3">
         {blog.benefits.map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Ready to transform your IT Service Management?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Speak with our experts and discover how CMDB accuracy can unlock
            operational excellence.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition">
            <Phone className="w-4 h-4" />
            Schedule a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}
