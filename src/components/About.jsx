import React from "react";
import aboutImage from "../assets/About-us.png";


const About = () => {
  return (
    <section className="w-full py-10 px-6 md:px-16 lg:px-32">
      
      {/* Faded BACK TITLE */}
      <h1 className="text-[60px] md:text-[120px] font-extrabold text-center text-gray-200 opacity-30 -mt-10 select-none">
        About Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">

        {/* LEFT IMAGES */}
        <div >
          
            <img
              src={aboutImage}  // <-- replace
              alt="About Visual"
              
            />
         

          
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h3 className="text-red-600 font-bold text-lg tracking-wide">
            WHY CHOOSE US
          </h3>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mt-2">
            Get Results with Your New Website, Crafted by a Leading Web Design &
            Development Agency!
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            AHP (AliHamzaPro) is a modern, forward-thinking digital solutions agency delivering high-performance websites, smart branding, and cutting-edge technology services.

We create digital experiences that are not only visually stunning but also strategically designed to drive conversions and business growth. With expertise in UI/UX, web development, SEO, brand identity, and automation solutions — we help companies transform into powerful digital brands.

Our team brings a perfect blend of creativity, technology, and marketing intelligence to every project, ensuring results that truly elevate your business in the modern digital world.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default About;
