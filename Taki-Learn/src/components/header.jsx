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
                <b>You bring the<span> expertise,</span> we will make it unforgettable.</b>
              </p>
              <p className="quote">
                Using highly personalised activities, videos and animations you
                can energise your students and motivate them to achieve their
                learning goals as they progress through a journey.
              </p>
              <div>
                <div className="flex store store--btn">
                  <a >
                    <Button label="Register" />
                  </a>
                  <a href="#">
                  <Button label="Register" />
                  </a>
                </div>
              </div>
            </div>
            <img
              className="illus"
              src="./header_image.png"
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
