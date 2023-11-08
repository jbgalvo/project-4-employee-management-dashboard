import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCy7KlOJKzbJNqj9LJu7OHVmwIHfNkOOAc",
  authDomain: "base-404-hrms.firebaseapp.com",
  projectId: "base-404-hrms",
  storageBucket: "base-404-hrms.appspot.com",
  messagingSenderId: "396043001847",
  appId: "1:396043001847:web:27b564ff635f3fbcd258f2",
  measurementId: "G-QBS5BNGSTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);