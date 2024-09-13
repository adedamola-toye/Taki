//import Button from "./button";
//import { useState } from 'react';
//import Navbar from "../components/homePage/navbar";
//import PropTypes from "prop-types";

const About = () => {

  
  
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar onIsSignupOpen={onIsSignupOpen} onIsLoginOpen={onIsLoginOpen} /> */}
      
      {/* Trigger modals if login or signup is clicked */}
      {/* {isLoginOpen && <Login onIsLoginOpen={setIsLoginOpen} onIsSignupOpen={setIsSignupOpen} />}
      {isSignupOpen && <Signup onIsLoginOpen={setIsLoginOpen} onIsSignupOpen={setIsSignupOpen} />} */}

      <section className="about-section" id="about">
        <div className="about-content">
          <h4>About Us</h4>
          <h2>
            e-Learning providing the best opportunities to the students around
            the globe.
          </h2>
          <p>
            Welcome to Taki Learn, where education meets innovation. We are a
            passionate team of educators, tech enthusiasts, and industry experts
            dedicated to making learning accessible, engaging, and effective for
            everyone. Our platform offers a wide range of courses tailored to
            empower learners of all ages and backgrounds, providing them with
            the skills they need to succeed in today’s rapidly evolving world.
          </p>
          <p>
            At Taki Learn, we believe that learning should be a lifelong
            journey, and our mission is to create an inclusive space where
            knowledge is at your fingertips. Whether you are looking to advance
            your career, explore new interests, or gain new skills, our expertly
            designed courses and interactive tools are here to guide you every
            step of the way. Join our global community of learners today and
            take the next step toward unlocking your full potential!
          </p>
          {/* <Button label="Join Us"  /> */}
        </div>
        <div className="about-image">
          <div className="shadow-box">
            <img src="./Rectangle 13.webp" alt="" className="image1" />
            <img src="./Rectangle 14.webp" alt="" className="image2" />
          </div>
        </div>
      </section>

      <section className="contri-section">
        <h2>Meet the Team</h2>
        <div className="contribution">
          <div className="member-card">
            <h3>Adedamola Toye</h3>
            <ul>
              <li>Planning and Ideation</li>
              <li>Explore courses page</li>
              <li>Personalised quiz to choose track</li>
              <li>Page navigation</li>
              <li>Course content</li>
              <li>Course page and Topic Page styling</li>
              <li>Deployment</li>
              

            </ul>
          </div>
          <div className="member-card">
            <h3>Kehinde</h3>
            <ul>
              <li>Planning and Ideation</li>
              <li>Home page</li>
              <li>Navbar</li>
              <li>Signin/out</li>
              <li>Styling</li>
              <li>Authentication</li>
            </ul>
          </div>
          <div className="member-card">
            <h3>Obinka Divine</h3>
            <ul>
              <li>About us</li>
              <li>Styling</li>
              <li>Members contribution section</li>
              <li>Course content</li>
            </ul>
          </div>

          <div className="member-card">
            
            <h3>Idayat</h3>
            <ul>
              <li>Planning and Ideation</li>
              <li>About us section</li>
              <li>Worked on CSS course</li>
            </ul>
          </div>

          <div className="member-card">
            <h3>Abdullah</h3>
            <ul>
              <li>Planning, Ideation and UX</li>
              <li>Deployment on vercel</li>
            </ul>
          </div>
          
        </div>
      </section>
      

    </>
  );
};


export default About;
