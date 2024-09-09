import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./components/homePage/About";
import ExploreCoursesPage from "./components/Courses/Explore-Courses-Page";
import Home from "./components/homePage/home";
import PersonalizedQuiz from "./components/Quiz/PersonalizedQuiz";
import Frontend from "./components/Tracks/Frontend";
import Backend from "./components/Tracks/Backend"
import CyberSecurity from "./components/Tracks/CyberSecurity";
import DataScience from "./components/Tracks/DataScience";
import Login from "./components/Sign-in/Login";
import WelcomePage from "./components/WelcomePage";
import AuthProvider from "./components/AuthProvider";
// 
import CoursePage from "./components/Courses/CoursePage";
import TopicPage from './components/Courses/TopicPage'

function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="/explore-courses" element={<ExploreCoursesPage />} />
        <Route path="/quiz" element={<PersonalizedQuiz />} />
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/welcomeUser" element = {<WelcomePage/>}/>
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path = "/courses/:courseName" element = {<CoursePage/>}/>
        <Route path = "/courses/:courseName/topics/:topicName" element={<TopicPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <About id = 'about' /> */}
    </BrowserRouter>
  
    </AuthProvider>
  );
}

export default App;
