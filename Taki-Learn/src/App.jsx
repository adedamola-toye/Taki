import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//import Header from './components/homePage/header'
import About from "./components/homePage/About";
import ExploreCoursesPage from "./components/ExploreCoursesPage/Explore-Courses-Page";
// import SignInPage from './components/Sign-in/SignInPage'
// import SignUpPage from './components/Sign-in/SignUpPage'
import Home from "./components/homePage/home";
import PersonalizedQuiz from "./components/Quiz/PersonalizedQuiz";
import Frontend from "./components/Tracks/Frontend";
import Backend from "./components/Tracks/Backend"
import CyberSecurity from "./components/Tracks/CyberSecurity";
import DataScience from "./components/Tracks/DataScience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore-courses" element={<ExploreCoursesPage />} />
        {/* <Route path = "/signIn" element={<SignInPage/>}/>
        <Route path = "/signUp"element={<SignUpPage/>}/> */}
        <Route path="/quiz" element={<PersonalizedQuiz />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/data-science" element={<DataScience />} />
      </Routes>
      {/* <About id = 'about' /> */}
    </BrowserRouter>
  );
}

export default App;
