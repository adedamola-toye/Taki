// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


//import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyCxDoyyJRT5t6OBLVvWz67zPcrYsV1U5sE",
  authDomain: "takilearn-50b07.firebaseapp.com",
  projectId: "takilearn-50b07",
  storageBucket: "takilearn-50b07.appspot.com",
  messagingSenderId: "830324954079",
  appId: "1:830324954079:web:17812ae4b858270789aa6a",
  measurementId: "G-Z29YLB65PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)
