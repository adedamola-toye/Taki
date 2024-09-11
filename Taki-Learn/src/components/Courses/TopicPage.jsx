import { useParams } from "react-router-dom";
import courses from "./coursesData";

import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

function TopicPage() {
  const [code, setCode] = useState("// Practice here");
  const [language, setLanguage] = useState("html");
  const { courseName, topicName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, " ");
  const decodedTopicName = decodeURIComponent(topicName).replace(/-/g, " ");

  const course = courses?.find(
    (course) => course.name && typeof course.name === 'string' &&
    course.name.toLowerCase() === decodedCourseName.toLowerCase()
  );
  


  if (!course) {
    return <p>Course not found</p>;
  }

  if (!course.topics || course.topics.length === 0) {
    return <p>This course does not have any topics yet</p>;
  }

  const topic = course.topics.find(
    (topic) => topic.topicName && typeof topic.topicName === 'string' &&
    topic.topicName.toLowerCase() === decodedTopicName.toLowerCase()
  );
  

  if (!topic) {
    return <p>Topic not found</p>;
  }

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>

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

        <div className="editor-container">
          <div className="language-selector">
            <label htmlFor="language">Select Language:</label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="sql">SQL</option>

            </select>
          </div>
          <MonacoEditor
            height="400px"
            language={language}
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
          />
          <div className="editor-output">
            <h2>Output:</h2>
            <iframe
              srcDoc={code}
              title="Output"
              sandbox="allow-scripts"
              style={{ width: "100%", height: "400px", border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopicPage;
