import React from "react";

import {
  Navigate,
} from "react-router-dom";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

          setLoading(false);
        }
      );

    return () => unsubscribe();

  }, []);

  if (loading) {

    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  if (!user) {

    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;