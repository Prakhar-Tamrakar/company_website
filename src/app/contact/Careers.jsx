import {React , useEffect, useRef} from 'react';
import gsap from "gsap";
import {
  Briefcase,
  Sparkles,
  Lightbulb,
  Globe,
  TrendingUp,
  Users,
  Mail,
} from "lucide-react";
const Careers = () => {

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT CARD */}
              <div ref={leftCardRef} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm h-fit">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100">
                    <Briefcase className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Careers & Talent
                    </h3>
                    <p className="text-sm text-gray-500">
                      Join our growing team
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                  Looking to join the team or refer talent? We&apos;re always
                  looking for passionate individuals who want to make an impact
                  in IT consulting.
                </p>

                {/* Email */}
                <div className="mt-6 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span className="font-medium text-indigo-600">
                    <a 
                                                href={'mailto:nkale@i-Connectresources.com'} 
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                nkale@i-Connectresources.com
                                                  </a>
                  </span>
                </div>
              </div>
              {/* RIGHT CARD */}
              <div ref={rightCardRef} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100">
                    <Sparkles className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why Join Us?
                  </h3>
                </div>

                {/* Feature List */}
                <div className="mt-6 space-y-4">
                  {[
                    {
                      id: 1,
                      icon: Lightbulb,
                      title: "Innovation-First Culture",
                      desc: "Work with cutting-edge technologies and drive digital transformation",
                    },
                    {
                      id: 2,
                      icon: Globe,
                      title: "Global Opportunities",
                      desc: "Collaborate with teams across US and India on enterprise projects",
                    },
                    {
                      id: 3,
                      icon: TrendingUp,
                      title: "Career Growth",
                      desc: "Clear paths for advancement and continuous learning opportunities",
                    },
                    {
                      id: 4,
                      icon: Users,
                      title: "Collaborative Environment",
                      desc: "Work with talented professionals who value teamwork and excellence",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
                      >
                        <div className="mt-0.5">
                          <Icon className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
  )
}

export default Careers
