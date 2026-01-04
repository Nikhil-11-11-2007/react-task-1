import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Java from "./pages/Java"
import Python from "./pages/Python"
import AllCourses from "./pages/AllCourses"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/java" element={<Java />} />
          <Route path="/courses/python" element={<Python />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
