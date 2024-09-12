import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About";
import ExploreCoursesPage from "./components/Courses/Explore-Courses-Page";
import Home from "./components/homePage/home";
import PersonalizedQuiz from "./components/Quiz/PersonalizedQuiz";

import Frontend from "./components/Tracks/Frontend";
import Backend from "./components/Tracks/Backend"
import CyberSecurity from "./components/Tracks/CyberSecurity";
import DataScience from "./components/Tracks/DataScience";
import Login from "./components/Sign-in/Login";
import Signup from './components/Sign-in/signUp';
import WelcomePage from "./components/User/WelcomePage";
import AuthProvider from "./components/AuthProvider";
import CoursePage from "./components/Courses/CoursePage";
import TopicPage from "./components/Courses/TopicPage"
import CourseCompletionCongratulationsPage from './components/Courses/CourseCompletionCongratulationsPage'
import Navbar from './components/homePage/navbar';
import Footer from './components/footer';

function App() {

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <AuthProvider>

    <BrowserRouter>
      <Navbar onIsSignupOpen={setIsSignupOpen} onIsLoginOpen={setIsLoginOpen} />
      
      {isLoginOpen && <Login onIsLoginOpen={setIsLoginOpen} onIsSignupOpen={setIsSignupOpen} />}
      {isSignupOpen && <Signup onIsLoginOpen={setIsLoginOpen} onIsSignupOpen={setIsSignupOpen} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About onIsSignupOpen={setIsSignupOpen} onIsLoginOpen={setIsLoginOpen} />} />
        {<Route path="/explore-courses" element={<ExploreCoursesPage />} />}
        <Route path="/quiz" element={<PersonalizedQuiz />} />
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/welcomeUser" element = {<WelcomePage/>}/>
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path = "/courses/:courseName" element = {<CoursePage/>}/>
        <Route path = "/courses/:courseName/topics/:topicName" element={<TopicPage/>}/>
        <Route path="/congratulations/:courseName" element={<CourseCompletionCongratulationsPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
       <Footer/>
      {/* <About id = 'about' /> */}
    </BrowserRouter>
  
    </AuthProvider>
  );
}

export default App;
