import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full bg-[#f9b81e] py-16 px-6 md:px-20">
      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-800 leading-relaxed mb-6">
            At CodesOrbit we are well aware that the customer's world is constantly 
            changing. Therefore, we continue to challenge ourselves to push the 
            boundaries of development. What we assure is that the technology we use 
            to develop your digital signature will not just meet the industry 
            standards but, it might just go on to create a new benchmark.
          </p>

          {/* LOCATION */}
          <div className="flex items-start gap-4 mb-5">
            <div className="text-black text-2xl">📍</div>
            <div>
              <h3 className="text-lg font-bold text-black">SIALKOT</h3>
              <p className="text-gray-900">
                Sialkot Cantt, Punjab, Pakistan
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="text-black text-2xl">✉️</div>
            <div>
              <h3 className="text-lg font-bold text-black">EMAIL</h3>
              <p className="text-gray-900">contact@yourwebsite.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="p-3 border border-gray-300 focus:outline-none text-black bg-white"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 border border-gray-300 focus:outline-none text-black bg-white"
            />

            <input
              type="text"
              placeholder="Phone Number*"
              className="p-3 border border-gray-300 focus:outline-none text-black bg-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 focus:outline-none text-black bg-white"
            />

            {/* TEXTAREA FULL WIDTH */}
            <textarea
              rows="6"
              placeholder="Project Synopsis*"
              className="p-3 border border-gray-300 focus:outline-none md:col-span-2 text-black bg-white"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-black text-white py-3 font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
