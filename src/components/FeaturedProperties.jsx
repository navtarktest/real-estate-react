import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

function FeaturedProperties({ properties }) {
  const { darkMode } = useTheme();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <section className={darkMode ? "bg-black py-20" : "bg-white py-20"}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[4px] text-gray-500">
            Featured Listings
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Discover Premium Properties
          </h2>
        </div>

        {/* No Results */}
        {properties.length === 0 && (
          <div className="text-center text-2xl font-semibold text-gray-500">
            No properties found.
          </div>
        )}

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {properties.map((property) => (

            <motion.div
  key={property.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(property)}
                  className="absolute top-4 right-4 z-10 bg-white p-3 rounded-full shadow-lg"
                >

                  <Heart
                    size={22}
                    className={
                      isInWishlist(property.id)
                        ? "fill-red-500 text-red-500"
                        : "text-black"
                    }
                  />

                </button>

                {/* Image */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm">
                  {property.type}
                </span>

                <h3 className="text-2xl font-bold text-black mt-4">
                  {property.price}
                </h3>

                <h4 className="text-xl font-semibold mt-2">
                  {property.title}
                </h4>

                <p className="text-gray-500 mt-2">
                  {property.location}
                </p>

                <div className="flex gap-6 mt-5 text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                </div>

                <Link
                  to={`/property/${property.id}`}
                  className="block text-center mt-6 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  View Details
                </Link>

              </div>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;