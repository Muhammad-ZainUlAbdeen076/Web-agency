import React from "react";

// PRICING PACKAGES SECTION (Fixed colors + Glass + 3D Tilt + Shine + Float)
const packages = [
  {
    title: "Basic Package",
    price: "$99",
    features: ["3 Pages Website", "Responsive Design", "Basic SEO", "1 Revision"],
  },
  {
    title: "Standard Package",
    price: "$199",
    features: [
      "6 Pages Website",
      "Premium UI/UX",
      "Standard SEO",
      "3 Revisions",
      "Speed Optimization",
    ],
  },
  {
    title: "Premium Package",
    price: "$399",
    features: [
      "10+ Pages Website",
      "Custom Design",
      "Advanced SEO",
      "Unlimited Revisions",
      "CMS Integration",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-[60px] md:text-[120px] font-extrabold text-center text-gray-700 opacity-25 -mt-10 select-none">
          Our Packages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-8 border border-white/20 shadow-xl backdrop-blur-xl bg-black/30 text-white overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:rotate-3 animate-[float_3s_ease-in-out_infinite]"
            >
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500/30 to-yellow-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-50 pointer-events-none"></div>

              {/* Card content */}
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                {pkg.title}
              </h3>
              <p className="text-4xl font-bold mb-6 text-white">
                {pkg.price}
              </p>

              <ul className="space-y-3 mb-6 text-white/90">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex}>• {feature}</li>
                ))}
              </ul>

              <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 duration-200">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}