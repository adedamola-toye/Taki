import { useState, useContext, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./config/firebasek";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error2, setError] = useState();

  const signup = async function (email, password) {
    try {
      console.log("Attempting to sign up with email:", email, currentUser);
      console.log(email, password);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up successfully", userCredential);
    } catch (e) {
      throw {
        e,
        
      };
      console.log(e.code);
    }
  };
  const login = async function (email, password) {
    try {
      // eslint-disable-next-line no-unused-vars
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      throw{
        e
      }
      console.log(e.message);
    }
  };
  const logout = async function () {
    try {
      await signOut(auth);
    } catch (e) {
      throw {e}
      console.log(e.message);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { signup, login, currentUser, setCurrentUser, logout, error2 };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
export const useAuth = function () {
  return useContext(AuthContext);
};
