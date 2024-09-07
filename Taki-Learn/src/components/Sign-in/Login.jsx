import {auth} from "../../config/firebase2"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

Login.propTypes = {
  onIsLoginOpen: PropTypes.func.isRequired,
  onIsSignupOpen: PropTypes.func.isRequired,
};

function Login({ onIsLoginOpen,onIsSignupOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); //store error during login
  const navigate = useNavigate();
  console.log(onIsSignupOpen)

  function handleCloseModal() {
    onIsLoginOpen((isLoginOpen) => !isLoginOpen);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const signIn = async() => {
      try{
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
        handleCloseModal(); //Close modal after successful login
        navigate("/welcomeUser"); 
      }
      catch(error){
        setError("Failed to log in: " + error.message)
      }
    }
    signIn()
  }
  return (
    <>
      <div className="modal-content1 hidden">
        <form onSubmit={handleSubmit}>
          <button className="p1" onClick={handleCloseModal}>
            &times;
          </button>
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}


          <label htmlFor="password" className="fa fa-envelope"></label>
          <input
            name="Email"
            className="user"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            style={{ marginLeft: "16px" }}
            type="password"
            name="password"
            placeholder="Password"
            value = {password}
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
            <a className="link" href="#" onClick={()=> {handleCloseModal();onIsSignupOpen(true)}}>
              Register
            </a>
          </p>
        </form>
      </div>
      <div className="modal-overlay1 hidden" onClick={handleCloseModal}></div>
    </>
  );
}
export default Login;
