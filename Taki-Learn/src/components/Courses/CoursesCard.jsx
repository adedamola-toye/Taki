import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

//Makes sure course names are URL safe
const encodeCourseName = (name) =>
  encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));

function CoursesCard({ course,onIsSignupOpen }) {
const {currentUser} = useAuth()
const navigate = useNavigate()

  function handleClickLearn() {
    if (!currentUser) {
      onIsSignupOpen(true);
    } else navigate(`/courses/${encodeCourseName(course.name)}`);

  }

  return (
    <div className="course-card-section">
      {course.map((course) => (
        <div key={course.id} className="course-card">
          <h3 className="courseName">{course.name}</h3>
          <p>{course.description}</p>
          <p>
            <b>Track: </b>
            {course.track}
          </p>
          {/* <Link to={`/courses/${encodeCourseName(course.name)}`}> */}
            <button onClick={handleClickLearn} >Learn</button>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}

export default CoursesCard;
