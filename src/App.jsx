import { useState } from "react";
import Login from "./pages/login/Login";


import Approuter from "./router/Approuter";

function App() {
    const [token, setToken]=useState(true);
    if(!token){
      return <Login setToken={setToken} />
    }
  return (
  <Approuter />

  )
  }
export default App;