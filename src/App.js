import './App.css';
import React from "react"
import Welcome from "./components/Welcome"
import Intro from "./components/Intro"
import Contact from "./components/Contact"
// import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Welcome />
      <Intro />
      <Contact />
    </div>     
  ) 
};

export default App;
