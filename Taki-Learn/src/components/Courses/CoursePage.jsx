import { useParams } from "react-router-dom";
import courses from "./coursesData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CoursePage() {
  const { courseName } = useParams();
  const [completedTopics, setCompletedTopics] = useState({});
  const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, " ");
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const course = courses.find(
    (course) =>
      course.name &&
      typeof course.name === "string" &&
      course.name.toLowerCase() === decodedCourseName?.toLowerCase()
  );

  useEffect(() => {
    if (!course || !course.topics) {
      return;
    }
    const completed = {}; //stores topic and completed status as key value pair
    let completedCount = 0;

    course?.topics.forEach((topic) => {
      const completedStatus =
        localStorage.getItem(`completed-${topic.topicName}`) === "true";
      completed[topic.topicName] = completedStatus;

      if (completedStatus) {
        completedCount += 1;
      }
    });
    setCompletedTopics(completed);

    //Calculating completion percentage
    const completionPercentage = Math.round(
      (completedCount / course.topics.length) * 100
    );
    setCompletionPercentage(completionPercentage)
  }, [course]);

  if (!course) {
    return <p>Course not found</p>;
  }

  const encodedCourseName = encodeURIComponent(
    course.name.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <>
      <div className="course-page">
        <h1 className="courseHead">{course.name}</h1>
        <p className="courseDescription">{course.description}</p>

      <div className="course-completion-status">
        <h2>Overall Progress: {completionPercentage}% Complete</h2>
        <progress value = {completionPercentage} max = "100"></progress>
      </div>

        <div className="course-topics">
          <h2>Topics</h2>
          <ul className="topics-list">
            {course.topics.map((topic) => (
              <li key={topic.id} className="topic-link">
                <Link
                  to={`/courses/${encodedCourseName}/topics/${encodeURIComponent(
                    topic.topicName
                  )}`}
                >
                  {topic.topicName}
                </Link>
                {completedTopics[topic.topicName] ? (
                  <span className="completed-status">Completed</span>
                ) : (
                  <span className="not-completed-status">Not Completed</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CoursePage;
