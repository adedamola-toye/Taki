/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

//Makes sure course names are URL safe
const encodeCourseName = (name) => {
  if (!name) {
    return ""; // Return an empty string or handle it in some other way
  }
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
};


function CoursesCard({ course,onIsSignupOpen }) {
const {currentUser} = useAuth()
const navigate = useNavigate()

function handleClickLearn(selectedCourse) {
  if (!currentUser) {
    onIsSignupOpen(true);
  } else {
    if (selectedCourse?.name) {
      navigate(`/courses/${encodeCourseName(selectedCourse.name)}`);
    } else {
      console.error("Course name is missing!");
    }
  }
}


return (
  <div className="course-card-section">
    {course.map((course) => (
      course && course.name ? (
        <div key={course.id} className="course-card">
          <h3 className="courseName">{course.name}</h3>
          <p>{course.description}</p>
          <p>
            <b>Track: </b>
            {course.track}
          </p>
          <button onClick={() => handleClickLearn(course)}>Learn</button>
        </div>
      ) : (
        <p key={course.id}>Course information is missing.</p>
      )
    ))}
  </div>
);

}

{/* <Link to={`/courses/${encodeCourseName(course.name)}`}> */}

export default CoursesCard;
