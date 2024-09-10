import { useParams } from "react-router-dom";
import courses from "./coursesData";
import { Link } from "react-router-dom";
import Navbar from "../homePage/navbar";

function CoursePage() {
  const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, " ");

  const course = courses.find(
    (course) => course.name.toLowerCase() == decodedCourseName?.toLowerCase()
  );

  if (!course) {
    return <p>Course not found</p>;
  }

  const encodedCourseName = encodeURIComponent(
    course.name.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <>
      <Navbar />
      <div className="course-page">
        <h1 className="courseHead">{course.name}</h1>
        <p className="courseDescription">{course.description}</p>
        <div className="course-topics">
          <h2>Topics</h2>
          <ol className="topics-list">
            {course.topics.map((topic) => (
              <li key={topic.id} className="topic-link">
                <Link
                  to={`/courses/${encodedCourseName}/topics/${encodeURIComponent(
                    topic.topicName
                  )}`}
                >
                  {topic.topicName}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default CoursePage;
