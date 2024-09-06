import Navbar from "../homePage/navbar";
import CoursesCard from "../ExploreCoursesPage/CoursesCard";
import courses from "../../coursesData";

function Backend() {
  const backendCourses = courses.filter((course) => course.track === "Backend Web Development")
  return (
    <>
      <Navbar />
      <div className="backend-courses-page  courses-page">
        <div className="courses-page-heading">
          <h1>Welcome to the Backend Track</h1>
          <p>Explore the courses in this track</p>
        </div>
        <CoursesCard course ={backendCourses}/>
      </div>
    </>
  );
}

export default Backend;
