import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import propertiesData from "../data/properties";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {

  // Load Data
  const [properties, setProperties] = useState(() => {

    const savedProperties =
      localStorage.getItem("properties");

    return savedProperties
      ? JSON.parse(savedProperties)
      : propertiesData;
  });

  // Save To LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "properties",
      JSON.stringify(properties)
    );

  }, [properties]);

  // Add Property
  const addProperty = (newProperty) => {

    setProperties([
      ...properties,
      {
        ...newProperty,
        id: Date.now(),
      },
    ]);
  };

  // Delete Property
  const deleteProperty = (id) => {

    const updatedProperties =
      properties.filter(
        (property) => property.id !== id
      );

    setProperties(updatedProperties);
  };

  const updateProperty = (updatedProperty) => {

  const updatedProperties = properties.map(
    (property) => {

      if (property.id === updatedProperty.id) {

        return {
          ...property,
          ...updatedProperty,
          image:
            updatedProperty.image || property.image,
        };
      }

      return property;
    }
  );

  setProperties(updatedProperties);
};

  return (
    <PropertyContext.Provider
      value={{
    properties,
    addProperty,
    deleteProperty,
    updateProperty,
    }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  return useContext(PropertyContext);
}