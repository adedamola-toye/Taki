import { Link } from "react-router-dom"
import Footer from "./footer"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./config/firebasek"
import { useEffect, useState } from "react"

function WelcomeUser(){
    const [user, setUser] = useState()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser){
                setUser(currentUser)
            }else{
                setUser()
            }
        })

        return () => unsubscribe()
    }, [])

    return(
        <>
        <div className="welcome-body">
            <div className="welcome-header">
                <h1>Welcome  </h1>
                <h3>Explore our learning paths and different courses</h3>
                <p>Not sure which path is best suited to you? Take our personalized quiz to find out and get started.</p>
                <Link to = "/quiz"><button>Take Quiz</button></Link>
            </div>
            <div className="learning-path">
               <div className="track">
                    <div className="track-top"></div>
                    <div className="track-card">
                        
                        <h3>Frontend</h3>
                    </div>
               </div>
               <div className="track">
                    <div className="track-top"></div>
                    <div className="track-card">
                        
                        <h3>Backend</h3>
                    </div>
               </div>
               <div className="track">
                    <div className="track-top"></div>
                    <div className="track-card">
                        
                        <h3>Data Science</h3>
                    </div>
               </div>
               <div className="track">
                    <div className="track-top"></div>
                    <div className="track-card">
                        
                        <h3>Cybersecurity</h3>
                    </div>
               </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default WelcomeUser