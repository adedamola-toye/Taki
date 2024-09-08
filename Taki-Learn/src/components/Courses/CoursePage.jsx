import { useParams } from "react-router-dom";
import courses from "./coursesData"
import { Link } from "react-router-dom";

function CoursePage(){
    const {courseName} = useParams();
    const decodedCourseName = decodeURIComponent(courseName).replace(/-/g, ' ');

    const course = courses.find(course => course.name.toLowerCase() == decodedCourseName.toLowerCase());

    if(!course){
        return <p>Course not found</p>
    }

    const encodedCourseName = encodeURIComponent(course.name.toLowerCase().replace(/\s+/g, '-'));


    return(
        <div className="course-page">
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <div className="course-topics">
                <h2>Topics</h2>
                <ul>
                    {course.topics.map(topic =>(
                        <li key= {topic.id}>
                           <Link to={`/courses/${encodedCourseName}/topics/${topic.id}`}>
                                {topic.topicName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CoursePage;