import { useState, useContext, createContext } from "react";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebasek";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const signup = async function (email, password) {
    try {
      console.log("Attempting to sign up with email:", email);
      console.log(email, password);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User signed up successfully", userCredential);
    } catch (e) {
      console.log(e.message);
    }
  };
  const login = async function (email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e.message);
    }
  };
  // const signout = async function () {
  //   try {
  //     await signOut(auth)
  //   }catch(e){
  //     console.log(e.message)
  //   }
  // }

  return (
    <AuthContext.Provider value={{ signup, login,currentUser,setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = function () {
  return useContext(AuthContext);
};
