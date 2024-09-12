// import { auth } from "../../config/firebasek";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";


function Login({ onIsLoginOpen, onIsSignupOpen }) {
 const {login} = useAuth()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Store error during login
const [loading,setLoading] = useState(false)

  const navigate = useNavigate();

  function handleCloseModal() {
    onIsLoginOpen(false); // Close the login modal
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state

    try {
      // Sign in the user
      // await signInWithEmailAndPassword(auth, email, password);
      setLoading(true)
      await login(email,password)
      console.log("User signed in successfully");
      handleCloseModal(); // Close the modal after successful login
      navigate("/welcomeUser"); // Redirect to the welcome page
    } catch (error) {
      setError("Failed to log in: " + error.e?.message);
      setError("Failed to log in: " + error?.message);
    }
    setLoading(false)
  };

  return (
    <>
      <div className="modal-content1">
        <form onSubmit={handleSubmit}>
          <button className="p1" type="button" onClick={handleCloseModal}>
            &times;
          </button>
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <label htmlFor="email" className="fa fa-envelope"></label>
          <input
            id="email"
            name="email"
            className="user"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            style={{ marginLeft: "16px" }}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label
            htmlFor="password"
            style={{ position: "absolute", left: "113px", top: "49%" }}
            className="fa fa-lock"
          ></label>
          <br />

          <a href="#" className="a">
            Forgot your password?
          </a>
          <button className="button" type="submit">Login</button>
          <br />
          <br />
          <p style={{ color: "grey" }}>
            Dont have an account?{" "}
            <a
              className="link"
              href="#"
              onClick={() => {
                handleCloseModal(); // Close login modal
                onIsSignupOpen(true); // Open signup modal
              }}
            >
              Register
            </a>
          </p>
        </form>
      </div>
      <div className="modal-overlay1" onClick={handleCloseModal}></div>
    </>
  );
}

export default Login;
