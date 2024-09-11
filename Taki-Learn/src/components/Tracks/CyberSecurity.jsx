
import CoursesCard from "../Courses/CoursesCard";
import courses from "../Courses/coursesData";

function CyberSecurity() {
  const cyberSecurityCourses = courses.filter((course) => course.track === "Cybersecurity")

  return (
    
    <>
      
      <div className="cybersecurity-courses-page courses-page">

        <div className="courses-page-heading">
        <h1>Welcome to the Cybersecurity Track</h1>
        <p>Explore the courses in this track</p>
        </div>
        <CoursesCard course={cyberSecurityCourses}/>
      </div>
    </>
  );
}

export default CyberSecurity;
