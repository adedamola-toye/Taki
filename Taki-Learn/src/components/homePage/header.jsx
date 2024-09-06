import Navbar from "./navbar";
import Button from "./button";
function Header({onIsSignupOpen,onIsLoginOpen}) {
  return (
    <>
      <header>
        <Navbar onIsSignupOpen={onIsSignupOpen} onIsLoginOpen={onIsLoginOpen} />
        <div className="hero">
          <div className="flex hero">
            <div className="text-left">
              <p className="title">
                <b>
                Discover Your Perfect Learning Path! 
                </b>
              </p>
              <p className="quote">
              Take our personalized quiz to find the track that suits you best, and explore courses designed to help you achieve your learning goals.
              </p>
              
              <div>
                <div className="flex store store--btn">
                  <a >
                    <button onClick={()=>onIsSignupOpen(true)}>Sign Up</button>
                  </a>
                  <a href="#">
                    <button className="white-button" onClick={()=>onIsLoginOpen(true)}>Log In</button>
                  </a>
                </div>

              </div>
              
            </div>
            <img
              className="illus"
              src="./header_image.webp"
              width="450px"
              height="500px"
              alt="image"
            />
          </div>
         
        </div>
      </header>
      
    </>
  );
}

export default Header;
