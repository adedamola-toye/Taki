
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
        <p>No Account? <a href="">Create an account</a> </p>
        </div>
      </div>
    </>
  );
}

export default SignInPage;