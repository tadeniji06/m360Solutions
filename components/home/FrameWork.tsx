import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const FrameWork = () => {
  const frameworkSteps = [
    {
      number: "1",
      title: "Discover",
      description: "We take out time to study your business, assess its strength and weaknesses, the determine your brands current standing",
      color: "bg-orange-500"
    },
    {
      number: "2", 
      title: "Define",
      description: "We define the parameters that would be required to achieve your desired results - choosing our strategy based on current time frame",
      color: "bg-red-500"
    },
    {
      number: "3",
      title: "Design", 
      description: "The most important thing in business is to design the right strategy that suit your brand and can assure success and growth.",
      color: "bg-cyan-500"
    },
    {
      number: "4",
      title: "Develop",
      description: "The most important thing in business is to develop the right strategy that suit your brand and can assure success and growth.",
      color: "bg-emerald-500"
    },
    {
      number: "5",
      title: "Deploy",
      description: "With the right solution in hand and with the goal in mind. We deploy our strategy and get to work to help you plug all your marketing loopholes and scale your brand",
      color: "bg-purple-600"
    },
    {
      number: "6",
      title: "Deliver", 
      description: "We never lose sight of the end result desired. We keep propping and working until we have achieved or surpassed every set goal. Your growth is our only priority",
      color: "bg-slate-700"
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Take your Marketing to the next level with our{" "}
              <span className="text-orange-500">6-D Framework</span>
            </h2>
          </div>
          
          <Link href={'/contact'}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 flex-shrink-0">
              Book Consultation
              <Icon icon="material-symbols:arrow-forward" className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Framework Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworkSteps.map((step, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-12 translate-x-8 -translate-y-8">
                <div className={`w-full h-full ${step.color} rounded-full`}></div>
              </div>

              {/* Step Number Circle */}
              <div className="mb-6 relative">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                
                {/* Dotted Arrow (except for last item) */}
                {index < frameworkSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 z-0">
                    <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
                    <Icon 
                      icon="material-symbols:arrow-forward" 
                      className="absolute -top-2 -right-2 w-4 h-4 text-gray-400" 
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-12 h-1 ${step.color} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default FrameWork;