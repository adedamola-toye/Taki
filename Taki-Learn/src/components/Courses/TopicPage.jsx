import { useParams } from "react-router-dom";
import courses from "./coursesData";

function TopicPage() {
  const { courseName, topicName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, " ");
  const decodedTopicName = decodeURIComponent(topicName).replace(/-/g, " ");

  const course = courses.find(
    (course) => course.name.toLowerCase() === decodedCourseName.toLowerCase()
  );

  if (!course) {
    return <p>Course not found</p>;
  }

  const topic = course.topics.find(
    (topic) => topic.topicName.toLowerCase() === decodedTopicName.toLowerCase()
  );

  if (!topic) {
    return <p>Topic not found</p>;
  }

  return (
    <div className="topic-page">
      <h1>{topic.topicName}</h1>
      {topic.content.map((contentItem, index) => (
        <div key={index}>
          <h2>{contentItem.title}</h2>
          {contentItem.text && <p>{contentItem.text}</p>}
          {contentItem.exampleCode && (
            <pre>
              <code>{contentItem.exampleCode}</code>
            </pre>
          )}
          {contentItem.videoLink && (
            <a href={contentItem.videoLink} target="_blank" rel="noopener noreferrer">
              Watch this video
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default TopicPage;
