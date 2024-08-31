function Navbar(){
return(
    <>
    <nav>
        
        <nav className="navbar flex ">
            <p className="logo"><b>TakiLearn</b></p>
            <ul className="flex">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">All courses</a></li>
            </ul>
            <div className="nav--buttons">
            <a href="#">Login</a>
            <button>Sign Up</button>
            </div>
            <div className="toggle_Btn">
                <svg fill="#42A7C3" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"/></svg>
            </div>

            <div className="dropdown--menu ">
                <li><a className="dropdown--item" href="#">Home</a></li>
                <li><a className="dropdown--item" href="#">About</a></li>
                <li><a className="dropdown--item" href="#">All courses</a></li>
                <button className="dropdown--item">Sign Up</button>
            </div>
            
        </nav>
    </nav>
    </>
)
}

export default Navbar
