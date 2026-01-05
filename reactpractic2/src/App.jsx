import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Java from "./pages/Java"
import Python from "./pages/Python"
import AllCourses from "./pages/AllCourses"
import Footer from "./components/Footer"
import Layout from "./pages/Layout"

const App = () => {

  const allrouter = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/courses',
      element:<Courses/>,
      children:[
        {
          path:'/courses',
          element:<AllCourses/>
        },
        {
          path:'/courses/java',
          element:<Java/>
        },
        {
          path:'/courses/python',
          element:<Python/>
        }
      ]
    },
    
  ]
    }
  ])
  return (
    <div className='h-screen bg-black text-white'>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/java" element={<Java />} />
          <Route path="/courses/python" element={<Python />} />
        </Route>
      </Routes> */}
      <RouterProvider router={allrouter} />
      {/* <Footer /> */}
    </div>
  )
}

export default App

// [
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/courses',
//       element:<Courses/>,
//       children:[
//         {
//           path:'/courses/java',
//           element:<Java/>
//         },
//         {
//           path:'/courses/python',
//           element:<Python/>
//         }
//       ]
//     },
    
//   ]