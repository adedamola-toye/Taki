import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ExploreCourses from './components/ExploreCoursesPage/Explore-Courses-Page.jsx'
import SignInPage from './components/Sign-in/SignInPage.jsx'
import SignUpPage from './components/Sign-in/SignUpPage.jsx'

const router = createBrowserRouter([
  {path: '/', element:<App />,  },
  {path:'/courses', element: <ExploreCourses/>},
  /* {path:'/about', element: <ExploreCourses/>} */
  {path: '/signIn', element: <SignInPage/>},
  {path: '/signUp', element: <SignUpPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
