import {React , useEffect, useRef} from 'react';
import gsap from "gsap";
const Partnership = () => {

     const leftCardRef = useRef(null);
          const rightCardRef = useRef(null);
  useEffect(()=>{
         gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power3.out" }
      );

      },[])  

  return (
    <div className="max-w-7xl mx-auto px-4">
            {/* Grid */}
            <div  className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT CARD */}
              <div  ref={leftCardRef} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm h-fit">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    🤝
                  </div>
                  <div className="card-header">
                    <h3 className="card-heading-title text-lg font-semibold text-gray-900">
                      Partner With Us
                    </h3>
                    <p className="card-heading-title text-sm text-gray-500">
                      Build together, grow together
                    </p>
                  </div>
                </div>

                <p className=" card-subtitle mt-6 text-sm text-gray-600 leading-relaxed">
                  We&apos;re always open to new alliances in technology,
                  staffing, and delivery. Let&apos;s explore how we can create
                  value together.
                </p>

                <div className="mt-6 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                  Reach our partnerships desk:
                  <div className="mt-1 font-medium text-indigo-600">
                    <a 
                                                href={'mailto:info@i-connectresources.com'} 
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                info@i-connectresources.com
                                                  </a>
                  </div>
                </div>
              </div>
              {/* RIGHT CARD */}
              <div ref={rightCardRef} className="rounded-2xl border border-gray-200 bg-white  p-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    💡
                  </div>
                  <div className="card-header">
                    <h3 className="card-heading-title text-lg font-semibold text-gray-900">
                      Partnership Opportunities
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      id: 1,
                      title: "Technology Partners",
                      desc: "Joint solutions and integrations in cloud, automation, and AI",
                    },
                    {
                      id: 2,
                      title: "Staffing Partners",
                      desc: "Talent collaboration and resource sharing opportunities",
                    },
                    {
                      id: 3,
                      title: "Delivery Partners",
                      desc: "Project collaboration and global delivery networks",
                    },
                    {
                      id: 4,
                      title: "Reseller Partners",
                      desc: "White-label solutions and revenue sharing programs",
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <h4 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  )
}

export default Partnership
