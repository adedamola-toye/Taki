import CourseCard from './CoursesCard'

function ExploreCourses(){
    return(
        <div className="explore-courses-page">
             {/* HEADER */}

            <div className = "explore-courses-heading">
                <h1>Explore Courses</h1>
                <p>Discover a wide range of tech courses tailored to help you master the latest skills in the industry. From web development to data science  to cybersecurity, our courses at Taki Learn are designed to equip you with the tools you need to excel in the tech world</p>
            </div>
            

            {/* CARD */}
            <CourseCard/>
        </div>
       
    )
}

export default ExploreCourses