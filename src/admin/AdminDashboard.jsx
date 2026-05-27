import React from "react";
import {
  signOut,
} from "firebase/auth";

import {
  useNavigate,
} from "react-router-dom";

import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useProperties } from "../context/PropertyContext";

function AdminDashboard() {

const {
  properties,
  deleteProperty,
} = useProperties();

const navigate = useNavigate();

const handleLogout = async () => {

  try {

    await signOut(auth);

    alert("Logout Successful!");

    navigate("/login");

  } catch (error) {

    alert(error.message);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-72 bg-black text-white p-8">

        <h2 className="text-3xl font-bold mb-10">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-5">

          <Link
            to="/admin"
            className="hover:text-gray-300"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/add-property"
            className="hover:text-gray-300"
          >
            Add Property
          </Link>

          <button
  onClick={handleLogout}
  className="text-left hover:text-red-400 transition"
>
  Logout
</button>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl font-bold">
            Property Listings
          </h1>

          <Link
            to="/admin/add-property"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Add New
          </Link>

        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-black text-white">

              <tr>
                <th className="p-5 text-left">Image</th>
                <th className="p-5 text-left">Title</th>
                <th className="p-5 text-left">Price</th>
                <th className="p-5 text-left">Type</th>
                <th className="p-5 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {properties.map((property) => (

                <tr
                  key={property.id}
                  className="border-b"
                >

                  <td className="p-5">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-40 h-24 min-w-[160px] object-cover rounded-lg border"
                    />
                  </td>

                  <td className="p-5 font-semibold">
                    {property.title}
                  </td>

                  <td className="p-5">
                    {property.price}
                  </td>

                  <td className="p-5">
                    {property.type}
                  </td>

                  <td className="p-5">

                    <div className="flex gap-3">

                      <Link
                        to={`/admin/edit-property/${property.id}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </Link>

                      <button
  onClick={() => deleteProperty(property.id)}
  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
>
  Delete
</button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;