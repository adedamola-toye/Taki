import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

Navbar.propTypes = {
  onIsSignupOpen: PropTypes.func.isRequired,
  onIsLoginOpen: PropTypes.func.isRequired,
};

function Navbar({ onIsSignupOpen, onIsLoginOpen }) {

  function dropDown() {
    const dropdown = document.querySelector(".dropdown--menu");
    dropdown.style.display = "block";
  }

  return (
    <>
      <nav>
        <nav className="navbar flex ">
          <p className="logo">
            <b>TakiLearn</b>
          </p>
          <ul className="flex">
            <li>
              <Link to="/" className="active">Home</Link>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <Link to="/explore-courses">All courses</Link>
            </li>
          </ul>
          <div className="nav--buttons">
            <a href="#" onClick={() => onIsLoginOpen(true)}>Login</a>
            <button onClick={() => onIsSignupOpen(true)}>Sign up</button>
          </div>
          <div className="toggle_Btn" onClick={() => dropDown()}>
            <svg
              fill="#10C843"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
            >
              <path d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z" />
            </svg>
          </div>
          <div className="dropdown--menu ">
            <li>
              <Link className="dropdown--item" to="/">Home</Link>
            </li>
            <li>
              <Link className="dropdown--item" to="/about">About us</Link>
            </li>
            <li>
              <Link className="dropdown--item" to="/explore-courses">All courses</Link>
            </li>
            <button className="dropdown--item" onClick={() => onIsSignupOpen(true)}>Sign Up</button>
          </div>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
