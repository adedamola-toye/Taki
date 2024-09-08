import { useParams } from "react-router-dom";
import courses from "./coursesData";
import Navbar from "../homePage/navbar"

function TopicPage() {
  const { courseName, topicName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, " ");
  const decodedTopicName = decodeURIComponent(topicName).replace(/-/g, " ");

  const course = courses?.find(
    (course) => course.name.toLowerCase() === decodedCourseName.toLowerCase()
  );

  if (!course) {
    return <p>Course not found</p>;
  }

  // Check if the course has topics
  if (!course.topics || course.topics.length === 0) {
    return <p>This course does not have any topics yet</p>;
  }

  // Find the topic within the course
  const topic = course.topics.find(
    (topic) => topic.topicName.toLowerCase() === decodedTopicName.toLowerCase()
  );

  if (!topic) {
    return <p>Topic not found</p>;
  }

  return (
    <>
      <Navbar/>
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
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={contentItem.videoLink.replace(
                  "watch?v=",
                  "embed/"
                )}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
    
  );
}

export default TopicPage;
