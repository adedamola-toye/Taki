function Signup({ onIsSignupOpen }) {
  function handleCloseModal() {
    onIsSignupOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <div className="modal-content1 hidden">
        <form action="">
          <button className="p1" onClick={handleCloseModal}>
            &times;
          </button>
          <h1>Signup</h1>
          <label htmlFor="password" className="fa fa-envelope"></label>
          <input
            name="Username"
            className="user"
            type="text"
            placeholder="Username"
          />

          <input
            style={{ marginLeft: "16px" }}
            type="password"
            name="password"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            style={{ position: "absolute", left: "113px", top: "49%" }}
            className="fa fa-lock"
          ></label>
          <input
            style={{ marginLeft: "16px" }}
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
          <label
            htmlFor="password"
            style={{ position: "absolute", left: "113px", top: "49%" }}
            className="fa fa-lock"
          ></label>
          <br />
          {/* <a href="#" className="a">
            Forgot your password?
          </a> */}
          <button className="button">Sign Up</button>
          <br />
          <br />
          {/* <p style={{ color: "grey" }}>
            Dont have an account?{" "}
            <a className="link" href="Register.html">
              Register
            </a>
          </p> */}
        </form>
      </div>
      <div className="modal-overlay1 hidden" onClick={handleCloseModal}></div>
    </>
  );
}
export default Signup;
