import { useState } from "react";
import About from "./About";
import Band from "./blackBand";
import Header from "./header";
import Login from "../Sign-in/Login";
import Signup from "../Sign-in/signUp";
import Footer from "../footer";

function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Header onIsSignupOpen={setIsSignupOpen} onIsLoginOpen={setIsLoginOpen} />
      {isLoginOpen && <Login onIsLoginOpen={setIsLoginOpen} onIsSignupOpen={setIsSignupOpen} />}
      {isSignupOpen && <Signup onIsLoginOpen={setIsLoginOpen} onIsSignupOpen={setIsSignupOpen} />}
      <Band />
      <About />
      <Footer/>
    </>
  );
}

export default Home;
