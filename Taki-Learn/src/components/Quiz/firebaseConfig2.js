
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMHBDP8xIsjUOxhzZYB1dyUT60JYzcYPs",
  authDomain: "takilearn-track-quiz.firebaseapp.com",
  projectId: "takilearn-track-quiz",
  storageBucket: "takilearn-track-quiz.appspot.com",
  messagingSenderId: "945251863905",
  appId: "1:945251863905:web:c8b6f7610161f90b514920",
  measurementId: "G-Q6XG1GB68L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db }

