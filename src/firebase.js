import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLxaPPGItgbuQlYU_j4Dqf8s_3NLWYlFA",
  authDomain: "real-estate-react-1be93.firebaseapp.com",
  projectId: "real-estate-react-1be93",
  storageBucket: "real-estate-react-1be93.firebasestorage.app",
  messagingSenderId: "851215822365",
  appId: "1:851215822365:web:a8d708313ee1160de4a0f4",
  measurementId: "G-T756TFGCLK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);