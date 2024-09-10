import CourseCard from "./CoursesCard";
import Navbar from "../homePage/navbar";
import { Link, useNavigate } from "react-router-dom";
import courses from "./coursesData";
import { useState } from "react";
import Login from "../Sign-in/Login";
import Signup from "../Sign-in/signUp";
import { useAuth } from "../AuthProvider";

function ExploreCourses() {
  const { currentUser } = useAuth();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(8);
  const navigate = useNavigate();

  const loadMoreCourses = () => {
    setVisibleCourses((prevCount) => prevCount + 8);
  };
  function handleTakeQuiz() {
    if (!currentUser) {
      setIsSignupOpen(true);
    } else navigate("/quiz");
  }

  return (
    <>
      <Navbar onIsSignupOpen={setIsSignupOpen} onIsLoginOpen={setIsLoginOpen} />
      {isLoginOpen && (
        <Login
          onIsLoginOpen={setIsLoginOpen}
          onIsSignupOpen={setIsSignupOpen}
        />
      )}
      {isSignupOpen && (
        <Signup
          onIsLoginOpen={setIsLoginOpen}
          onIsSignupOpen={setIsSignupOpen}
        />
      )}
      <div className="explore-courses-page  courses-page">
        <div className="explore-courses-heading  courses-page-heading">
          <h1>Explore Courses</h1>
          <p>
            Discover a wide range of tech courses tailored to help you master
            the latest skills in the industry. From web development to data
            science to cybersecurity, our courses at Taki Learn are designed to
            equip you with the tools you need to excel in the tech world
          </p>
        </div>

        {/* CARD */}
        <CourseCard
          course={courses.slice(0, visibleCourses)}
          onIsLoginOpen={setIsLoginOpen}
          onIsSignupOpen={setIsSignupOpen}
        />

        {visibleCourses < courses.length && (
          <div className="load-more-btn">
            <button onClick={loadMoreCourses}>Load More</button>
          </div>
        )}

        <div className="quiz-invitation">
          <p>
            Not sure the course for you? Take this personalized quiz to choose a
            track
          </p>
          {/* <Link  > */}
          <button onClick={handleTakeQuiz}>Take Quiz</button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default ExploreCourses;
