import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {

  const [properties, setProperties] =
    useState([]);

  // FETCH PROPERTIES
  const fetchProperties = async () => {

    try {

      const querySnapshot =
        await getDocs(
          collection(db, "properties")
        );

      const propertyList =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      setProperties(propertyList);

    } catch (error) {

      console.log(error);
    }
  };

  // LOAD DATA
  useEffect(() => {

    fetchProperties();

  }, []);

  // ADD PROPERTY
  const addProperty = async (newProperty) => {

    try {

      await addDoc(
        collection(db, "properties"),
        newProperty
      );

      fetchProperties();

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE PROPERTY
  const deleteProperty = async (id) => {

    try {

      await deleteDoc(
        doc(db, "properties", id)
      );

      fetchProperties();

    } catch (error) {

      console.log(error);
    }
  };

  // UPDATE PROPERTY
  const updateProperty = async (
    updatedProperty
  ) => {

    try {

      const propertyRef =
        doc(
          db,
          "properties",
          updatedProperty.id
        );

      await updateDoc(
        propertyRef,
        updatedProperty
      );

      fetchProperties();

    } catch (error) {

      console.log(error);
    }
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