import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header'
import About from './components/About'
import  ExploreCoursesPage from './components/ExploreCoursesPage/Explore-Courses-Page'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Header/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path = "/explore-courses" element = {<ExploreCoursesPage/>}/>
        <Route path = "*" element={<Navigate to = "/"/>}/>
      </Routes>
      {/* <About id = 'about' /> */}
    </BrowserRouter>
  )
}

export default App
