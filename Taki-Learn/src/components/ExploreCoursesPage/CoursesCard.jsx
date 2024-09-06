
import PropTypes from "prop-types";

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
            <button>Learn</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default CoursesCard;
  