import React from 'react';
import { Link } from 'react-router-dom';

function Footer({onIsLoginOpen, onIsSignupOpen}) {
  return (
    <>
      <footer>
        <div>
            <p className="logo">
                <b>TakiLearn</b>
            </p>
            <ul>
                <li>
                <Link to="/" className='footer-link'>Home</Link>
                </li>
                <li>
                <a href="/#about" className='footer-link'>About us</a>
                </li>
                <li>
                <Link to="/explore-courses" className='footer-link'>All courses</Link>
                </li>
                <li>
                <a href='#' onClick={() => onIsLoginOpen(true)} className='footer-link'>Log In</a>
                </li>
                <li>
                <a href="#" onClick={() => onIsSignupOpen(true)} className='footer-link'>Sign Up</a>
                </li>

            </ul>
        </div>
        <div>
            <p className='logo'>
                <b>Tracks</b>
            </p>
            <ul>
                <li>
                <Link to="/frontend" className='footer-link'>Frontend </Link>
                </li>
                <li>
                <Link to="/backend" className='footer-link'>Backend</Link>
                </li>
                <li>
                <Link to="/data-science" className='footer-link'>Data Science</Link>
                </li>
                <li>
                <Link to="/cybersecurity" className='footer-link'>Cyber Security</Link>
                </li>
            </ul>
        </div>
        
      </footer>
    </>
  );
}

export default Footer;