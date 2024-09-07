import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase2";

Login.propTypes = {
  onIsLoginOpen: PropTypes.func.isRequired,
  onIsSignupOpen: PropTypes.func.isRequired,
};

function Login({ onIsLoginOpen, onIsSignupOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (typeof onIsLoginOpen === 'function') {
      onIsLoginOpen(false);
    } else {
      console.error("onIsLoginOpen is not a function");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      handleCloseModal();
      navigate("/welcomeUser");
    } catch (error) {
      setError("Failed to log in: " + error.message);
    }
  };

  return (
    <>
      <div className="modal-content1">
        <form onSubmit={handleSubmit}>
          <button className="p1" onClick={handleCloseModal}>
            &times;
          </button>
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label htmlFor="email" className="fa fa-envelope"></label>
          <input
            id="email"
            className="user"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={{ marginLeft: "16px" }}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <button className="button">Login</button>
          <br />
          <br />
          <p style={{ color: "grey" }}>
            Dont have an account?{" "}
            <a
              className="link"
              href="#"
              onClick={() => {
                handleCloseModal();
                onIsSignupOpen(true);
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
