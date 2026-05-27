import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-12">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              EstateX
            </h2>

            <p className="text-gray-400 leading-7">
              Discover luxury homes and premium properties in the best locations around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Properties
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Email: info@estatex.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: New York, USA</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe for latest property updates.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full bg-gray-900 border border-gray-700 outline-none"
              />

              <button className="bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-gray-500 text-sm">

          <p>
            © 2026 EstateX. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>

            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;