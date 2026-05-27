import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 h-full flex items-center"
>
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          <p className="uppercase tracking-[4px] mb-4 text-sm">
            Luxury Real Estate
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
            Find Your Dream Home Today
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Discover premium properties in the best locations with modern designs and luxury amenities.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-white text-black px-6 py-3 rounded-full font-semibold"
>
  Explore Properties
</motion.button>

            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="border border-white px-6 py-3 rounded-full font-semibold"
>
  Contact Us
</motion.button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;