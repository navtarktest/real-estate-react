import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";

import PropertyDetails from "./pages/PropertyDetails";

import AdminDashboard from "./admin/AdminDashboard";
import AddProperty from "./admin/AddProperty";
import EditProperty from "./admin/EditProperty";
import { useProperties } from "./context/PropertyContext";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function HomePage() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const { properties } = useProperties();

  const filteredProperties = properties.filter((property) => {

    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      propertyType === "" || property.type === propertyType;

    const propertyPrice = parseInt(
      property.price.replace(/[$,]/g, "")
    );

    const matchesPrice =
      priceRange === "" || propertyPrice <= parseInt(priceRange);

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div
  className={
    darkMode
      ? "bg-black text-white transition duration-500"
      : "bg-white text-black transition duration-500"
  }
>
      <Navbar />

      <Hero />

      <SearchSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <FeaturedProperties properties={filteredProperties} />

      <WhyChooseUs />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/add-property"
  element={
    <ProtectedRoute>
      <AddProperty />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/edit-property/:id"
  element={
    <ProtectedRoute>
      <EditProperty />
    </ProtectedRoute>
  }
/>

<Route
  path="/login"
  element={<Login />}
/>

      </Routes>

      

    </BrowserRouter>
  );
}

export default App;