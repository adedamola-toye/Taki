import { Link } from "react-router-dom";
import "../../App.css"
function SignInPage() {


  return (
    <>
      <div className='signin-page'>

        <form action="" className='signin'>
            <input type="email" placeholder='Email..' className='signin-email'/>
            <input type="password" placeholder='Password...' className='signin-password'/>
            <button type='submit' className='signIn-button'>Sign In</button>
        </form>

        <div className='noAccount'>
        <p>No Account? <Link to="/signUp">Create an account</Link> </p>
        </div>
      </div>
    </>
  );
}

export default SignInPage;