import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-black py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">AHP</h2>
          <p className="text-sm leading-6 text-gray-200">
            Subscribe to AHP AliHamzaPro — your hub for modern tech solutions.
            Get the latest updates on development, branding, automation, and
            smart digital experiences.
          </p>
        </div>

        {/* Office Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pakistan</h3>
          <p className="text-sm text-gray-300">Daska Road,</p>
          <p className="text-sm text-gray-300 mb-3">Sialkot Pakistan</p>
          <p className="text-sm text-gray-300">alihamzapro@agency.com</p>
          <p className="text-sm font-semibold mt-1">+92 0300-0000000</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Mobile App Development</li>
            <li>Web App Development</li>
            <li>E-Commerce Development</li>
            <li>UI/UX Design</li>
           
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center border-b border-gray-300 pb-2 mb-5">
            <input
              type="email"
              placeholder="Enter your email id"
              className="bg-transparent w-full outline-none text-sm placeholder-gray-300"
            />
            <span className="ml-2 cursor-pointer ">→</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <i className="fa-brands fa-facebook cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-whatsapp cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
