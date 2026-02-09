import {React , useEffect, useRef} from 'react';
import gsap from "gsap";
import {Calendar , Briefcase,FileText} from 'lucide-react';
const SalesProject = () => {
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
     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            {/* LEFT CARD */}
            <div
              ref={leftCardRef}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-8">
                  <Briefcase className="text-primary h-10 w-10 mt-2" />

                  <div className="card-heading">
                    <h3 className="card-heading-title text-lg font-semibold text-gray-900 tracking-wide">
                      Sales & Project Inquiries
                    </h3>
                    <p className="card-heading-title tracking-wide">
                      Connect with our experts
                    </p>
                  </div>
                </div>

                <p className="card-subtitle text-sm text-gray-700 leading-relaxed">
                  Have a specific business challenge or project? Let’s connect
                  you with a subject matter expert who understands your needs.
                </p>
              </div>

            </div>

            {/* RIGHT CARD */}
            <div
              ref={rightCardRef}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm p-8 h-fit"
            >
              <div className="card-header">
                <h3 className="card-heading-title text-lg font-semibold">
                  What to Expect
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  "Share your business challenge or project requirements",
                  "Get matched with a subject matter expert in your domain",
                  "Receive a tailored proposal within 2-3 business days",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-semibold border border-blue-200">
                      {index + 1}
                    </div>
                    <p className=" text-base text-gray-700 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default SalesProject
