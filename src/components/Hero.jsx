import React from "react";
import heroDesktop from "../assets/Hero.jpg";
import heroMobilePic from "../assets/res-pic.jpg";   // mobile/tablet image
import heroMobileText from "../assets/res-text.jpg"; // image with text OR use pure text

const Hero = () => {
  return (
    <>
      {/* Desktop Banner */}
      <section className="hidden md:block w-full">
        <img
          src={heroDesktop}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="block md:hidden w-full">

        {/* 1. res-pic (image version for small screens) */}
        <img
          src={heroMobilePic}
          alt="Mobile Hero Pic"
          className="w-full h-auto object-cover"
        />

        <img src={heroMobileText} alt="" />

        </section>
    </>
  );
};

export default Hero;
