import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {

  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === parseInt(id)
  );

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Property Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">

          {/* Left */}
          <div className="lg:col-span-2">

            {/* Main Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <p className="text-gray-500 uppercase tracking-[3px] text-sm">
                Premium Property
              </p>

              <h1 className="text-5xl font-bold mt-3">
                {property.price}
              </h1>

              <h2 className="text-3xl font-semibold mt-4">
                {property.title}
              </h2>

              <p className="text-gray-600 mt-4 text-lg">
                {property.location}
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-6 mt-8">

                <div className="bg-gray-100 px-5 py-3 rounded-xl">
                  🛏 {property.beds} Bedrooms
                </div>

                <div className="bg-gray-100 px-5 py-3 rounded-xl">
                  🛁 {property.baths} Bathrooms
                </div>

                <div className="bg-gray-100 px-5 py-3 rounded-xl">
                  📐 {property.area}
                </div>

              </div>

            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">

              <h2 className="text-3xl font-bold mb-6">
                Property Description
              </h2>

              <p className="text-gray-600 leading-8">
                {property.description}
              </p>

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-10">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Agent"
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />

              <h3 className="text-2xl font-bold text-center mt-5">
                John Anderson
              </h3>

              <p className="text-gray-500 text-center mt-2">
                Senior Property Agent
              </p>

              <div className="mt-8 flex flex-col gap-4">

                <button className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                  Call Agent
                </button>

                <button className="border border-black py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
                  Send Message
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;