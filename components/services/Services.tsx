import Image from "next/image";
import Link from "next/link";
import { services } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const ACCENTS = [
  {
    text: "text-[var(--ink)]",
    tint: "bg-[var(--ink)]/8",
    ring: "group-hover:border-[var(--ink)]/40",
  },
  {
    text: "text-[var(--orange)]",
    tint: "bg-[var(--orange)]/8",
    ring: "group-hover:border-[var(--orange)]/50",
  },
  {
    text: "text-[var(--yellow-deep,#b8860b)]",
    tint: "bg-[var(--yellow)]/15",
    ring: "group-hover:border-[var(--yellow)]/60",
  },
];

const Services = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Unlock Revenue Growth for Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive solutions designed to elevate your brand
            and drive measurable results across all digital channels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Icon tile */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-105 ${accent.tint}`}
                >
                  <service.icon
                    className={`w-7 h-7 ${accent.text}`}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <h3
                    className={`text-lg font-bold text-[var(--ink)] transition-colors duration-300 group-hover:${accent.text.replace("text-", "")}`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Hover border accent */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 ${accent.ring}`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Every business is unique. Let's discuss how we can create a tailored
            strategy that fits your specific goals and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/contact"}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3">
                Schedule Consultation
                <Icon
                  icon="material-symbols:calendar-month"
                  className="w-5 h-5"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
