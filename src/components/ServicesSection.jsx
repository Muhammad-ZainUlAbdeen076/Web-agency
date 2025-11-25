import React from 'react';
import webpic from '../assets/web.png';
import mobilepic from '../assets/mobile.png';
import softwarepic from '../assets/software.png';
import UI from '../assets/Group-82.png';



// Reusable modern 3D flip card
const ServiceCard = ({ name, icon, shortDesc }) => {
  return (
    <div className="relative w-full h-72 perspective-1000 group cursor-pointer">
      <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">

        {/* Front Side */}
        <div className="absolute inset-0  flex flex-col items-center justify-center p-6 backface-hidden ">
          <div className="text-6xl mb-4">
            <img src={icon} alt="" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-white shadow-xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden border border-yellow-500/40">
          <h3 className="text-2xl font-semibold text-black mb-3">{name}</h3>
          <p className="text-gray-700 leading-relaxed mb-4 px-2">{shortDesc}</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition-colors">
            Read More
          </button>
        </div>

      </div>
    </div>
  );
};

const servicesData = [
  {
    name: "App Development",
    icon: mobilepic,
    shortDesc: "Build seamless, innovative and mobile-first apps for iOS & Android.",
  },
  {
    name: "Web App Development",
    icon: webpic,
    shortDesc: "High-performance scalable web apps that drive digital growth.",
  },
  {
    name: "Software Development",
    icon: softwarepic,
    shortDesc: "Custom, robust software solutions engineered for your business.",
  },
  {
    name: "UI/UX Design",
    icon: UI,
    shortDesc: "Modern, user-centric interface designs to boost engagement.",
  },
];

const ServicesSection = () => {
  return (
    <div className="relative bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-500 px-4 py-10 overflow-hidden">
      {/* Background graphics - mimicking the abstract elements in the image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-linear-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full"></div>
      </div>
      
      {/* Main content - centered like the original */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-8xl md:text-[9rem] font-bold text-gray-200 opacity-30 mb-4 drop-shadow-lg tracking-tight">
          Services
        </h1>
        <p className="absolute top-5 md:top-10 left-1/4 right-1/4 text-sm sm:text-xl font-bold text-white/90 uppercase tracking-widest drop-shadow-md">
          WHAT WE OFFER
        </p>
        <p className="absolute bottom-5 md:bottom-8 left-0 right-0 text-[12px] md:text-[1.2rem] font-extrabold text-black/90 uppercase tracking-widest drop-shadow-md">
          We don’t just build websites, we build businesses!
        </p>
      </div>

      <p className="text-center  max-w-5xl mx-auto text-lg mt-4 text-gray-800">
        We offer end-to-end digital solutions that empower your business. From design to development, our expert team delivers innovative mobile apps, powerful websites, and custom solutions tailored to your unique needs. Let us help you transform your digital strategy and achieve success in the digital age through the following services.
      </p>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              icon={service.icon}
              shortDesc={service.shortDesc}
            />
          ))}
        </div>
      </div>
      
      {/* Optional subtle bottom fade or divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default ServicesSection;