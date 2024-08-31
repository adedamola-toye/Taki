import Navbar from "./navbar";

function Header() {
  return (
    <>
      <header>
        <Navbar />
        <div className="hero">
          <div className="flex hero">
            <div className="text-left">
              <p className="title">
                <b>You bring the expertise, we'll make it unforgettable.</b>
              </p>
              <p className="quote">
                Using highly personalised activities, videos and animations you
                can energise your students and motivate them to achieve their
                learning goals as they progress through a journey.
              </p>
              <div>
                <div className="flex store--btn">
                  <a href="#">
                    <img
                      src="img/appstore.webp"
                      className="store"
                      height="40px"
                      alt="appstore button"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="img/playstore.webp"
                      className="store"
                      height="40px"
                      alt="playstore button"
                    />
                  </a>
                </div>
              </div>
            </div>
            <img
              className="illus"
              src="img/illus.webp"
              width="640px"
              height="550px"
              alt="image"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
