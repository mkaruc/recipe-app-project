import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Approuter = () => {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="https://github.com/mkaruc" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>


  </div>
  )
}

export default Approuter