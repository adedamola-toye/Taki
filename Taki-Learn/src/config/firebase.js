// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGjrHjBQYQ2doESYqgHecDjzU8NdbZP78",
  authDomain: "hatchdev-proj.firebaseapp.com",
  projectId: "hatchdev-proj",
  storageBucket: "hatchdev-proj.appspot.com",
  messagingSenderId: "216927956070",
  appId: "1:216927956070:web:400b2d0751cc37c4add1a7",
  measurementId: "G-GNQW3XLHWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);