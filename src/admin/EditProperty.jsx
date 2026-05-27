import React, { useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useProperties } from "../context/PropertyContext";

function EditProperty() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    properties,
    updateProperty,
  } = useProperties();

  // Find Property
  const property = properties.find(
    (item) => item.id === id
  );

  const [imagePreview, setImagePreview] =
  useState(property?.image || "");

  // Form State
  const [formData, setFormData] =
    useState({
      title: property?.title || "",
      price: property?.price || "",
      location: property?.location || "",
      type: property?.type || "",
      image: property?.image || "",
    });

  // Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleImageUpload = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  // LIMIT SIZE
  if (file.size > 900000) {

    alert(
      "Image too large. Please upload image below 900KB."
    );

    return;
  }

  const reader = new FileReader();

  reader.onloadend = () => {

    const imageBase64 = reader.result;

    setImagePreview(imageBase64);

    setFormData((prev) => ({
      ...prev,
      image: imageBase64,
    }));
  };

  reader.readAsDataURL(file);
};

  // Submit
  const handleSubmit = (e) => {

  e.preventDefault();

  updateProperty({
    ...property,
    ...formData,
  });

  alert("Property Updated Successfully!");

  navigate("/admin");
};

  // Not Found
  if (!property) {

    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Property Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold mb-10">
          Edit Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Property Title"
            className="w-full border p-4 rounded-xl"
          />

          {/* Price */}
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-4 rounded-xl"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-4 rounded-xl"
          />

          {/* Type */}
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="">
              Select Property Type
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Penthouse">
              Penthouse
            </option>
          </select>

          <div>

  <label className="block mb-3 font-medium">
    Update Property Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="w-full border p-4 rounded-xl"
  />
{imagePreview && (

  <img
    src={imagePreview}
    alt="Preview"
    className="w-full h-64 object-cover rounded-2xl mt-5"
  />

)}
</div>

          {/* Button */}
          <button
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            Update Property
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProperty;