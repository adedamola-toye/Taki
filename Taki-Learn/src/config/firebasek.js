// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAnsp6lflXrey2gd7OlVeenTVU5jG3vos",
  authDomain: "taki-learn.firebaseapp.com",
  projectId: "taki-learn",
  storageBucket: "taki-learn.appspot.com",
  messagingSenderId: "532099862120",
  appId: "1:532099862120:web:3f8413d86ca5089b3d35dd",
  measurementId: "G-JR73NEPDTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// const analytics = getAnalytics(app);