import React from 'react';
import a3 from '../assets/a3.png';

const Process = () => {
  return (
    <>
      {/* Header */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mt-5">
        <h1 className="text-8xl md:text-[9rem] font-bold text-gray-200 opacity-40 mb-4 drop-shadow-lg tracking-tight">
          Process
        </h1>
        <p className="absolute top-2 md:top-15 left-1/4 right-1/4 text-sm sm:text-xl font-bold text-yellow-500 uppercase tracking-widest drop-shadow-md">
          HOW WE DID IT
        </p>
        <p className="absolute bottom-0 md:bottom-2 left-0 right-0 text-[12px] md:text-[2rem] font-extrabold text-black/90 uppercase tracking-widest drop-shadow-md">
          Our Process
        </p>
      </div>

      {/* Process Steps Section */}
      <section className="relative px-4 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Step Cards with Animated Icons */}
            {[
              { title: 'Info Gathering', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', desc: 'Understand your business goals.' },
              { title: 'Planning', icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', desc: 'Decide on technologies to implement.' },
              { title: 'Design', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', desc: 'Determine the look and feel of your website.' },
              { title: 'Development', icon: 'M13 10V3L4 14h7v7l9-11h-7z', desc: 'Write valid HTML/CSS code.' },
              { title: 'Test & Launch', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', desc: 'Test complete design and functionality.' },
            ].map((step, i) => (
              <div key={i} className="flex-1 text-center group">
                <div className="w-16 h-16 mx-auto bg-black rounded-full border-4 border-gray-300 flex items-center justify-center mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 animate-spin-slow">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
                <h3 className="text-black font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-12 text-center px-8">
            <p className="text-gray-700 text-sm md:text-base italic leading-relaxed bg-gray-100 p-6 rounded-lg border border-gray-200">
              We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;