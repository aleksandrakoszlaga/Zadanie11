// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore import for data operations
import { getAuth } from "firebase/auth"; // Firebase Auth import for user authentication (if needed)

// Your Firebase config (replace with your actual Firebase project credentials)
const firebaseConfig = {
  apiKey: "AIzaSyDxloNEE-EbdiNVeUrlZ4frV-1ta3mrnv8",
  authDomain: "zadanie11-44a64.firebaseapp.com",
  projectId: "zadanie11-44a64",
  storageBucket: "zadanie11-44a64.firebasestorage.app",
  messagingSenderId: "815990481818",
  appId: "1:815990481818:web:467cce3d6a5aa3356c1023",
  measurementId: "G-7H3RS7GJFT", // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);

// Export firestore and auth instances for use in your app
export { db, auth };