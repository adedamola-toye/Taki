import { useParams, useNavigate } from "react-router-dom";
import courses from "./coursesData";


function CongratulationsPage() {
  const { courseName } = useParams();
  const navigate = useNavigate();
  
  // Decode courseName
  const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, " ");

  const course = courses.find(
    (course) =>
      course.name &&
      typeof course.name === "string" &&
      course.name.toLowerCase() === decodedCourseName.toLowerCase()
  );

  const getSuggestedCourse = () => {
    if (course) {
      const nextCourseIndex = courses.findIndex(
        (c) => c.name.toLowerCase() === decodedCourseName.toLowerCase()
      ) + 1;
      const nextCourse = courses[nextCourseIndex];
      return nextCourse ? nextCourse.name : null;
    }
    return null;
  };

  const handleGoToSuggestedCourse = () => {
    const suggestedCourse = getSuggestedCourse();
    if (suggestedCourse) {
      const encodedCourseName = encodeURIComponent(suggestedCourse);
      navigate(`/courses/${encodedCourseName}`);
    } else {
      alert("No suggested course available");
    }
  };

  const handleGoToExploreCourses = () => {
    navigate("/explore-courses");
  };

  return (
    <div className="congratulations-page">
      <h1>Congratulations!</h1>
      <p>You have completed the course: {decodedCourseName}</p>
      <div className="balloons">
        
      </div>
      <div className="controls">
        <button onClick={handleGoToSuggestedCourse}>Go to Suggested Course</button>
        <button onClick={handleGoToExploreCourses}>Back to Explore Courses</button>
      </div>
    </div>
  );
}

export default CongratulationsPage;
