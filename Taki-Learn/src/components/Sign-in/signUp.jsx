import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

function Signup({ onIsSignupOpen, onIsLoginOpen }) {
  const {signup } = useAuth()

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 7;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password should be at least 7 characters long.";
    }
    if (!hasUpperCase) {
      return "Password should contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
      return "Password should contain at least one lowercase letter.";
    }
    if (!hasNumber) {
      return "Password should contain at least one number.";
    }
    if (!hasSpecialChar) {
      return "Password should contain at least one special character.";
    }
    return null;
  };

  function handleCloseModal() {
    onIsSignupOpen((isOpen) => !isOpen);
  }

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "Email already in use. Please try a different email.";
      case "auth/invalid-email":
        return "Invalid email address. Please enter a valid email.";
      case "auth/weak-password":
        return "Weak password. Please enter a stronger password.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/user-not-found":
        return "No user found with this email.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit button clicked");

    setError(null);

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      setError("Passwords do not match");
      return;
    }

    // const passwordError = validatePassword(password);
    // if (passwordError) {
    //   console.log("Password validation error:", passwordError);
    //   setError(passwordError);
    //   return;
    // }

    try {
      console.log(userName)      
      setLoading(true)
     await signup(email, password);
      
      // console.log(auth,email,password)
      handleCloseModal();
      navigate("/welcomeUser");

      // navigate('./login')
    } catch (error) {
      console.error("Error signing up:", error);
      setError(getErrorMessage(error.code));
    }
    setLoading(false)
  };

  return (
    <>
      <div className="modal-content1 hidden">
        <form action="" onSubmit={handleSubmit}>
          <span className="p1" onClick={handleCloseModal}>
            &times;
          </span>
          <h1>Signup</h1>
          
          <label htmlFor="password" className="fa fa-envelope"></label>
          <input
            name="username"
            className="user"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            name="email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="password"
            style={{ position: "absolute", left: "113px", top: "49%" }}
            className="fa fa-lock"
          ></label>
          <input
            style={{ marginLeft: "16px" }}
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <label
            htmlFor="password"
            style={{ position: "absolute", left: "113px", top: "49%" }}
            className="fa fa-lock"
          ></label>
          <br />
          {/* <a href="#" className="a">
            Forgot your password?
          </a> */}

          {error && (
            <p className="error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <button disabled={loading} className="button" type="submit">
            Sign Up
          </button>
          <br />
          <br />
          <p style={{ color: "grey" }}>
           Already have an account?{" "}
            <a
              className="link"
              href="#"
              onClick={() => {
                handleCloseModal(); // Close login modal
                onIsLoginOpen(true); // Open signup modal
              }}
            >
              Login
            </a>
          </p>
        </form>
      </div>
      <div className="modal-overlay1 hidden" onClick={handleCloseModal}></div>
    </>
  );
}
export default Signup;
