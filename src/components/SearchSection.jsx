import React from "react";
import { useTheme } from "../context/ThemeContext";

function SearchSection({
  searchTerm,
  setSearchTerm,
  propertyType,
  setPropertyType,
  priceRange,
  setPriceRange,
}) {
  const { darkMode } = useTheme();

  return (
    <section className={darkMode ? "relative -mt-20 z-20 bg-black" : "relative -mt-20 z-20 bg-white"}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={darkMode ? "bg-gray-900 rounded-3xl shadow-2xl p-8" : "bg-white rounded-3xl shadow-2xl p-8"}>

          {/* Heading */}
          <div className="mb-8">
            <p className="uppercase tracking-[4px] text-sm text-gray-500">
              Search Property
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Find Your Perfect Home
            </h2>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Search */}
            <div>
              <label className="block text-gray-600 mb-2">
                Search
              </label>

              <input
                type="text"
                placeholder="Search property..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={darkMode ? "w-full border border-gray-600 rounded-xl px-4 py-3 outline-none focus:border-blue-500 bg-gray-800 text-white" : "w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"}
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-gray-600 mb-2">
                Property Type
              </label>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className={darkMode ? "w-full border border-gray-600 rounded-xl px-4 py-3 outline-none focus:border-blue-500 bg-gray-800 text-white" : "w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"}
              >
                <option value="">All Types</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 mb-2">
                Price Range
              </label>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className={darkMode ? "w-full border border-gray-600 rounded-xl px-4 py-3 outline-none focus:border-blue-500 bg-gray-800 text-white" : "w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"}
              >
                <option value="">All Prices</option>
                <option value="500000">Below $500k</option>
                <option value="800000">Below $800k</option>
                <option value="1000000">Below $1M</option>
              </select>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SearchSection;