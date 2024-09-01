import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header'
import About from './components/About'
import  ExploreCoursesPage from './components/ExploreCoursesPage/Explore-Courses-Page'
import SignInPage from './components/Sign-in/SignInPage'
import SignUpPage from './components/Sign-in/SignUpPage'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Header/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path = "/explore-courses" element = {<ExploreCoursesPage/>}/>
        <Route path = "*" element={<Navigate to = "/"/>}/>
        <Route path = "/signIn" element={<SignInPage/>}/>
        <Route path = "/signUp"element={<SignUpPage/>}/>
      </Routes>
      {/* <About id = 'about' /> */}
    </BrowserRouter>
  )
}

export default App
