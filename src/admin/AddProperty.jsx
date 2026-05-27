import React, { useState } from "react";
import { useProperties } from "../context/PropertyContext";

import {useNavigate} from "react-router-dom";

function AddProperty() {
    const { addProperty } = useProperties();
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
  title: "",
  price: "",
  location: "",
  image: "",
});

  const [imagePreview, setImagePreview] =
  useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {

    setImagePreview(reader.result);

    setFormData({
      ...formData,
      image: reader.result,
    });
  };

  reader.readAsDataURL(file);
};

  const handleSubmit = (e) => {

  e.preventDefault();

  addProperty({
    ...formData,
    image: formData.image,
    beds: 3,
    baths: 2,
    area: "2500 Sq Ft",
    type: "Villa",
    description:
      "Modern property added from admin dashboard.",
  });

  alert("Property Added!");

  setFormData({
    title: "",
    price: "",
    location: "",
    image: "",
  });

  setImagePreview("");
  navigate("/admin");
};

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold mb-10">
          Add Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <div>

  <label className="block mb-3 font-medium">
    Upload Property Image
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

          <button
            className="bg-black text-white px-8 py-4 rounded-xl"
          >
            Save Property
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProperty;