import { useState } from "react";
import About from "./About";
import Band from "./blackBand";
import Header from "./header";
import Login from "../Sign-in/Login";
import Signup from "../Sign-in/signUp";

function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Header onIsSignupOpen={setIsSignupOpen} onIsLoginOpen={setIsLoginOpen} />
      {isLoginOpen && <Login onIsLoginOpen={setIsLoginOpen} />}
      {isSignupOpen && <Signup onIsSignupOpen={setIsSignupOpen} />}
      <Band />
      <About />
    </>
  );
}

export default Home;
