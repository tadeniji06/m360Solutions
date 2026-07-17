import { hero } from "@/assets";
import Image from "next/image";

import { ExternalLink, Megaphone, Briefcase } from "lucide-react";
import { Dmlogo, Crmlogo } from "@/assets";

const liveProducts = [
  {
    name: "DM360",
    description:
      "Supercharge your growth. Launch targeted campaigns, manage multi-channel reach, and automate your entire marketing funnel from a powerful single interface.",
    url: "https://dm360.com/",
    icon: (
      <img
        src={Dmlogo.src}
        alt="DM360 logo"
        className="w-full h-auto object-cover p-4"
      />
    ),
    btnColor: "bg-red-600",
    btnHoverColor: "hover:bg-red-700",
  },
  {
    name: "CRM360",
    description:
      "CRM360 is a comprehensive CRM solution that helps businesses manage their customer relationships and sales processes efficiently.",
    url: "https://crm360online.com/",
    icon: (
      <img
        src={Crmlogo.src}
        alt="CRM360 logo"
        className="w-auto h-24 object-cover p-4"
      />
    ),
    btnColor: "bg-zinc-900",
    btnHoverColor: "hover:bg-black",
  },
  {
    name: "Leadgen360",
    description:
      "Leadgen360 is a comprehensive lead generation solution that helps businesses capture and convert leads efficiently.",
    url: "https://leadgen360.com/",
    icon: (
      <img
        src={Crmlogo.src}
        alt="CRM360 logo"
        className="w-auto h-24 object-cover p-4"
      />
    ),
    btnColor: "bg-zinc-900",
    btnHoverColor: "hover:bg-black",
  },
  {
    name: "Academy360",
    description:
      "Academy360 is a comprehensive academy solution that helps businesses train and develop their employees efficiently.",
    url: "https://academy360.com/",
    icon: (
      <img
        src={Crmlogo.src}
        alt="CRM360 logo"
        className="w-auto h-24 object-cover p-4"
      />
    ),
    btnColor: "bg-zinc-900",
    btnHoverColor: "hover:bg-black",
  },
];

export function LiveProducts() {
  return (
    <section
      className="py-24 w-full border-t border-zinc-200 dark:border-zinc-800"
      id="live-products"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold border border-green-200 dark:border-green-900/50 mb-4 tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Now
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white mb-4">
            Access The Ecosystem
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Experience the power of Biz360Prime today. These flagship modules
            are fully deployed and ready to integrate into your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {liveProducts.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white dark:bg-black rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 flex flex-col items-start"
            >
              <div
                className={`w-48 h-32 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-zinc-100 relative bg-white overflow-hidden`}
              >
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                {product.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-1 leading-relaxed">
                {product.description}
              </p>

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all shadow-md group-hover:scale-105 ${product.btnColor} ${product.btnHoverColor}`}
              >
                Launch Application <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Solutions = () => {
  return (
    <div className="bg-primary-blue text-white py-16 px-6 lg:px-20">
      {/* Header Section */}
      {/*<div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Business Management Solution
        </h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          A cloud-based platform designed to simplify and automate Business
          processes, ensuring your workforce operates at its best.
        </p>
      </div>*/}

      <LiveProducts />

      {/* Hero Image Section */}
      {/*<div className="max-w-4xl mx-auto mt-16">
        <Image
          src={hero}
          alt="Business Management Solution"
          className="rounded-2xl shadow-lg w-full object-cover"
          priority
        />
      </div>*/}
    </div>
  );
};

export default Solutions;
