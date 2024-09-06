import Navbar from "../homePage/navbar";
import CoursesCard from "../ExploreCoursesPage/CoursesCard";
import courses from "../../coursesData";

function DataScience() {

  const dataScienceCourses = courses.filter((course) => course.track === "Data Science")

  return (
    <>
      <Navbar />
      <div className="data-science-courses-page   courses-page">

        <div className="courses-page-heading">
        <h1>Welcome to the Data science Track</h1>
        <p>Explore the courses in this track</p>
        </div>
        <CoursesCard course={dataScienceCourses}/>
      </div>
    </>
  );
}

export default DataScience;
