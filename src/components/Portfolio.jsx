import React from "react";
import pr1 from "../assets/p1.png";
import pr2 from "../assets/p2.png";


// PORTFOLIO / PROJECTS SECTION
const projects = [
  {
    title: "Modern Apparel Website",
    img: pr1,
    category: "Web Design",
    link: "https://wooter-apparel-clone.vercel.app/",
  },
  {
    title: "E-commerce Platform",
    img: pr2,
    category: "Web Development",
    link: "https://forever-fashion-cloth.vercel.app/",
  },
  {
    title: "Creative Agency Branding",
    img: "https://via.placeholder.com/400x300",
    category: "Branding",
    link: "https://example.com/project3",
  },
  {
    title: "Mobile App UI/UX",
    img: "https://via.placeholder.com/400x300",
    category: "App Design",
    link: "https://example.com/project4",
  },
  {
    title: "Digital Marketing Campaign",
    img: "https://via.placeholder.com/400x300",
    category: "Marketing",
    link: "https://example.com/project5",
  },
  {
    title: "Portfolio Website",
    img: "https://via.placeholder.com/400x300",
    category: "Web Design",
    link: "https://example.com/project6",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-[60px] md:text-[120px] font-extrabold text-center text-gray-700 opacity-25 -mt-10 pb-5 select-none">
          Our Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-xl backdrop-blur-xl bg-white/10 cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-yellow-500/40"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-xl font-semibold text-yellow-500">
                  {project.title}
                </h3>
                <p className="text-white mt-2">{project.category}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-yellow-500 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}