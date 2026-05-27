import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { wishlist } = useWishlist();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          EstateX
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-gray-300 transition">
            Home
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Properties
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            About
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>

        

        <button
  onClick={toggleTheme}
  className="text-white mr-4"
>
  {darkMode ? <Sun size={26} /> : <Moon size={26} />}
</button>

<div className="relative text-white mr-4"> ❤️ <span className="absolute -top-2 -right-3 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
    {wishlist.length}
  </span>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-black text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-8 px-8 mt-10 text-xl font-medium">

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Home
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Properties
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            About
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Contact
          </a>

          {/* Mobile Button */}
          <button className="bg-white text-black py-3 rounded-full font-semibold mt-4">
            Get Started
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;