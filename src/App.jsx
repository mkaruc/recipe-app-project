import { useState } from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";


function App() {
    const [token, setToken]=useState(true);
    if(!token){
      return <Login setToken={setToken} />
    }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>


    </div>

  )
  }
export default App;