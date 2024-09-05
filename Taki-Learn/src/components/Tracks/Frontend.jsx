import Navbar from "../homePage/navbar";
import CoursesCard from "../ExploreCoursesPage/CoursesCard";
function Frontend() {
  return (
    <>
      <Navbar />
      <div className="frontend-courses-page  courses-page">
        <div className="courses-page-heading">
          <h1>Welcome to the Frontend Track</h1>
          <p>Explore the courses in this track</p>
        </div>
        <CoursesCard/>
      </div>
    </>
  );
}

export default Frontend;
