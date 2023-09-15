// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLz4vK6nPHmz_RD4f3gOX41Nhy3FlTgoc",
  authDomain: "netflixgpt-e44ae.firebaseapp.com",
  projectId: "netflixgpt-e44ae",
  storageBucket: "netflixgpt-e44ae.appspot.com",
  messagingSenderId: "603711768197",
  appId: "1:603711768197:web:7c1a8f9ced0e93b6e04bec",
  measurementId: "G-3Z139Z9DWK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
