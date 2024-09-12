import { Link, /* Navigate */ } from "react-router-dom"
import Footer from "../footer"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebasek"
import { useEffect, useState } from "react"
import Navbar from "./homePage/navbar"



function WelcomeUser(){
    const [userName, setUserName] = useState()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser){
                setUserName(currentUser.displayName)
                console.log(userName)
                console.log(currentUser)
            }else{
                // eslint-disable-next-line no-undef
                setUser()
            }
        })

        return () => unsubscribe()
    }, [])

   

    return(
        <>
        <Navbar/>
        <div className="welcome-body">
            <div className="welcome-header">
                <h1>Welcome  {userName}</h1>
                <h3>Explore our learning paths and different courses</h3>
                <p>Not sure which path is best suited to you? Take our personalized quiz to find out and get started.</p>
                <Link to = "/quiz" className="link"><button>Take Quiz</button></Link>
            </div>
            <div className="welcome-learning">
                <h2>Learning Tracks</h2>
                <div className="learning-path">
                    <div className="track " >
                        <div className="track-top"></div>
                        <div className="track-card">
                            <h3>Frontend</h3>
                            <p>Master the art of crafting stunning and responsive websites with our Frontend Development courses. Learn HTML, CSS, JavaScript, and the latest frameworks like React and Angular to build interactive user interfaces that deliver exceptional user experiences.</p>
                            <Link to="/frontend"><button>See Courses</button></Link>
                        </div>
                    </div> 
                    <div className="track ">
                        <div className="track-top"></div>
                        <div className="track-card" >
                            
                            <h3>Backend</h3>
                            <p>Dive into the world of server-side programming with our Backend Development courses. Gain expertise in languages like Python, Node.js, and Java, and learn to build robust, scalable applications that power the backend of any web or mobile app.</p>
                            <Link  to="/backend"><button>See Courses</button></Link>
                        </div>
                    </div>
                    <div className="track" >
                        <div className="track-top"></div>
                        <div className="track-card" >
                            
                            <h3>Data Science</h3>
                            <p>Unlock the power of data with our comprehensive Data Science courses. From Python programming and data visualization to machine learning and AI, you'll acquire the skills needed to turn raw data into actionable insights and drive data-driven decisions.</p>
                            <Link to="/data-science"><button>See Courses</button></Link>
                        </div>
                    </div>
                    <div className="track" >
                        <div className="track-top"></div>
                        <div className="track-card" >
                            
                            <h3>Cyber Security</h3>
                            <p>Protect digital assets and secure networks with our Cybersecurity courses. Learn the essentials of ethical hacking, network security, and threat management to safeguard sensitive information and combat cyber threats in today’s digital landscape.</p>
                            <Link to="/cybersecurity"><button>See Courses</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
export default WelcomeUser