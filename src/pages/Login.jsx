import React, { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  useNavigate,
} from "react-router-dom";

import { auth } from "../firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");

      navigate("/admin");

    } catch (error) {

      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md space-y-6"
      >

        <h1 className="text-4xl font-bold text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <button
          className="w-full bg-black text-white py-4 rounded-xl"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;