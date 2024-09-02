import Navbar from "./navbar";
import Button from "./button";
function Header() {
  return (
    <>
      <header>
        <Navbar />
        <div className="hero">
          <div className="flex hero">
            <div className="text-left">
              <p className="title">
                <b>
                  You bring the<span> expertise,</span> we will make it
                  unforgettable.
                </b>
              </p>
              <p className="quote">
                Using highly personalised activities, videos and animations you
                can energise your students and motivate them to achieve their
                learning goals as they progress through a journey.
              </p>
              
              <div>
                <div className="flex store store--btn">
                  <a >
                    <Button label="Sign up" />
                  </a>
                  <a href="#">
                    <Button label="Login" style="white-button" />
                  </a>
                </div>

              </div>
              {/* <div className="select-course flex">
            <select>
              <option>Select Course</option>
              <option>frontend</option>
              <option>backend</option>
            </select>
            <Button label="Search"/>
          </div> */}
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
