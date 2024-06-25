import { Routes , Route } from "react-router-dom"
import Property from "./pages/Property"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { useEffect } from "react"

function App() {  
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id"  element={<Property />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
