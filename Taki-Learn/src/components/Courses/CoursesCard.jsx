import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CoursesCard.propTypes = {
  course: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired,
    })
  ).isRequired,
};

//Makes sure course names are URL safe
const encodeCourseName = (name) =>
  encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));

function CoursesCard({ course }) {
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
          <Link to={`/courses/${encodeCourseName(course.name)}`}>
            <button>Learn</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CoursesCard;
