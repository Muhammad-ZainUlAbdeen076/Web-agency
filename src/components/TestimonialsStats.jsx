// components/TestimonialsStats.jsx
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Working with SheCreaTech has been a game-changer. Their expertise in technology and marketing helped us scale our business efficiently. Excellent support and great results!",
    author: "Michael R.",
  },
  {
    quote:
      "SheCreaTech goes above and beyond to deliver top-quality solutions. Their attention to detail and commitment to client success make them stand out. We are beyond satisfied!",
    author: "Ayesha K.",
  },
  {
    quote:
      "SheCreaTech transformed our business with their cutting-edge solutions. Their team is highly professional, responsive, and truly understands our needs. Highly recommended!",
    author: "Sarah A.",
  },
];

const stats = [
  { value: 10, label: "Professionals team" },
  { value: 200, label: "Satisfied customers" },
  { value: 200, label: "Successful projects" },
  { value: 6, label: "Years of experience" },
];

export default function TestimonialsStats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const [start, setStart] = useState(false);

  // Detect when stats section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  // Counter animation logic
  useEffect(() => {
    if (!start) return;

    const duration = 1800; // 1.8 sec
    const steps = 60; // smooth frames
    const interval = duration / steps;

    const timers = stats.map((stat, idx) => {
      let count = 0;
      const stepValue = stat.value / steps;

      return setInterval(() => {
        count += stepValue;
        if (count >= stat.value) {
          clearInterval(timers[idx]);
          count = stat.value;
        }
        setCounters((prev) => {
          const updated = [...prev];
          updated[idx] = Math.floor(count);
          return updated;
        });
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [start]);

  return (
    <section className="relative bg-white text-gray-800 mt-5">

      {/* TESTIMONIALS */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <h2 className="text-[60px] sm:text-[60px] md:text-[80px] lg:text-[120px] font-extrabold text-gray-200 opacity-50 translate-y-6">
            Testimonial
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 relative">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm font-semibold text-red-600 tracking-wider">
              CLIENT’S REVIEWS
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
              What our client's say
            </h3>
          </div>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 md:mt-16">
            {testimonials.map((t, i) => (
              <figure key={i} className="text-center px-4 sm:px-6 md:px-8">
                <blockquote className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  “{t.quote}”
                </blockquote>
                <figcaption className="text-red-600 font-semibold text-sm sm:text-base">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="border-t border-gray-100" />

      {/* STATISTICS */}
      <div className="relative bg-gray-50" ref={statsRef}>
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <h2 className="text-[70px] sm:text-[80px] md:text-[120px] lg:text-[140px] font-extrabold text-gray-200 opacity-50 translate-y-6">
            Statistics
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 relative">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold text-red-600 tracking-wider">
              OUR SUCCESS
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
              Let’s discuss your idea
            </h3>
          </div>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="px-2 sm:px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                  {counters[idx]}+
                </div>
                <div className="mt-3 font-semibold text-sm sm:text-base text-red-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
