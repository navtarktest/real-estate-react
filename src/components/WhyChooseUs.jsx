import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function WhyChooseUs() {
  const { darkMode } = useTheme();
  return (
    <section className={darkMode ? "bg-black-100 py-20" : "bg-gray-100 py-20"} >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-sm text-gray-500">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3">
            We Provide The Best Property Experience
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className={`${
  darkMode ? "bg-gray-900" : "bg-white"
} p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition`
}
>
            <div className="text-5xl mb-5">🏡</div>

            <h3 className="text-2xl font-bold mb-4">
              Premium Properties
            </h3>

            <p className="text-gray-600 leading-7">
              Explore luxury apartments, villas, and modern homes in top locations.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className={`${
  darkMode ? "bg-gray-900" : "bg-white"
} p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition`
}
>
            <div className="text-5xl mb-5">💰</div>

            <h3 className="text-2xl font-bold mb-4">
              Best Price Guarantee
            </h3>

            <p className="text-gray-600 leading-7">
              Get the best deals and transparent pricing with zero hidden charges.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className={`${
  darkMode ? "bg-gray-900" : "bg-white"
} p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition`
}>
            <div className="text-5xl mb-5">⭐</div>

            <h3 className="text-2xl font-bold mb-4">
              Trusted By Clients
            </h3>

            <p className="text-gray-600 leading-7">
              Thousands of happy customers trust us for buying and renting homes.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;