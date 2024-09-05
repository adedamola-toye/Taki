import Navbar from "../homePage/navbar";
import CoursesCard from "../ExploreCoursesPage/CoursesCard";
function DataScience() {
  return (
    <>
      <Navbar />
      <div className="data-science-courses-page   courses-page">

        <div className="courses-page-heading">
        <h1>Welcome to the Data science Track</h1>
        <p>Explore the courses in this track</p>
        </div>
        <CoursesCard/>
      </div>
    </>
  );
}

export default DataScience;
