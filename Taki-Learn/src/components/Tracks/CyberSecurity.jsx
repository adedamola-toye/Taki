import Navbar from "../homePage/navbar";
import CoursesCard from "../ExploreCoursesPage/CoursesCard";
function CyberSecurity() {
  return (
    <>
      <Navbar />
      <div className="cybersecurity-courses-page courses-page">

        <div className="courses-page-heading">
        <h1>Welcome to the Cybersecurity Track</h1>
        <p>Explore the courses in this track</p>
        </div>
        <CoursesCard/>
      </div>
    </>
  );
}

export default CyberSecurity;
