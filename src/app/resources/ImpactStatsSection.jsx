'use client';
import { FileText, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: "500+",
    label: "Resources Published",
  },
  {
    icon: Users,
    value: "50+",
    label: "Active Readers",
  },
  {
    icon: TrendingUp,
    value: "90%",
    label: "Success Rate",
  },
  {
    icon: Award,
    value: "150+",
    label: "Client Wins",
  },
];

export default function ImpactStatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#010518] to-[#00030f] py-24">
      
      {/* Wave Top Shape */}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Our Impacts in Numbers
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Trusted by industry leaders to deliver insights that transform businesses
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Box */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/95 shadow-md">
                  <Icon className="h-6 w-6 text-gray-800" />
                </div>

                {/* Number */}
                <div className="text-3xl font-semibold text-white">
                  {item.value}
                </div>

                {/* Label */}
                <div className="mt-2 text-sm text-gray-300">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
