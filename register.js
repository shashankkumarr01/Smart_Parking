// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRHtLOfSVmwnnuOh_AfrI_5CVNUDsDhc8",
  authDomain: "circuitcoders-parking-d062f.firebaseapp.com",
  projectId: "circuitcoders-parking-d062f",
  storageBucket: "circuitcoders-parking-d062f.firebasestorage.app",
  messagingSenderId: "542160853155",
  appId: "1:542160853155:web:9592513f6b5fd1ec864716",
  measurementId: "G-C0X9503CL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);