import Navbar from "../homePage/navbar";
import CoursesCard from "../Courses/CoursesCard";
import courses from "../Courses/coursesData";

function Frontend() {
  const frontendCourses = courses.filter((course) => course.track === "Frontend Web Development")
  return (
    <>
      <Navbar />
      <div className="frontend-courses-page  courses-page">
        <div className="courses-page-heading">
          <h1>Welcome to the Frontend Track</h1>
          <p>Explore the courses in this track</p>
        </div>
        <CoursesCard course={frontendCourses}/>
      </div>
    </>
  );
}

export default Frontend;
