// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- Added this for the database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDty5os84vgLNRZTDAHErIeYUO9cZ8BnaA0",
  authDomain: "hyperlocall.firebaseapp.com",
  projectId: "hyperlocall",
  storageBucket: "hyperlocall.firebasestorage.app",
  messagingSenderId: "43216293091",
  appId: "1:43216293091:web:8b4b2de5dbd428e2f389d6",
  measurementId: "G-13PVX571LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Firestore
export const db = getFirestore(app);