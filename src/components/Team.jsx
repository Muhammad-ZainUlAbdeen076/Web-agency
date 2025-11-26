import React from "react";
import member2 from "../assets/pic2.jpg";
import member3 from "../assets/m2.jpg";

// TEAM SECTION (Yellow + Black + White Theme)
// Just import and use <TeamSection />

const teamMembers = [
  {
    name: "Ali Hamza",
    role: "CEO & Founder",
    img: "https://via.placeholder.com/300x300", // replace later
  },
  {
    name: "Zain",
    role: "Frontend Developer",
    img: member2
  },
  {
    name: "Malik Shaharyar",
    role: "UI/UX Designer",
    img: member3,
  },
];

export default function Team() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-500">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl shadow-lg p-6 text-center backdrop-blur-xl hover:scale-105 duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-500"
              />

              <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
              <p className="text-yellow-500 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}