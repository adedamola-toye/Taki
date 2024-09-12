import { useParams } from "react-router-dom";
import courses from "./coursesData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseCompletionCongratulationsPage from './CourseCompletionCongratulationsPage';

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
    const completed = {}; // stores topic and completed status as key-value pair
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

    // Calculating completion percentage
    const completionPercentage = Math.round(
      (completedCount / course.topics.length) * 100
    );
    setCompletionPercentage(completionPercentage);
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

        {completionPercentage === 100 && <CourseCompletionCongratulationsPage />}

        <div className="course-completion-status">
          <h2>Overall Progress: {completionPercentage}% Complete</h2>
          <progress value={completionPercentage} max="100"></progress>
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

        {/* Embedding the Additional Resource Video */}
        {course.additonalResource && course.additonalResource.videoLink && (
          <div className="additional-resource">
            <h2>{course.additonalResource.title}</h2>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={course.additonalResource.videoLink.replace(
                  "watch?v=",
                  "embed/"
                )}
                title="Additional Resource Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Optionally, include the website link */}
{course.additonalResource.websiteLink && (
  <a
    href={course.additonalResource.websiteLink.link}
    target="_blank"
    rel="noopener noreferrer"
    className="additional-resource-link"
  >
  <b>Click this link to a detailed tutorial</b>: {course.additonalResource.websiteLink.title}
  </a>
)}

          </div>
        )}
      </div>
    </>
  );
}

export default CoursePage;
