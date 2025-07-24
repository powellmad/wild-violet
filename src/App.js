import './App.css';
import React from "react"
import Welcome from "./components/Welcome"
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Services from "./components/Services"

function App() {

  return (
    <div>
      <Welcome />
      <Intro />
      <Services />
      <Contact />
      <Footer />
    </div>     
  ) 
};

export default App;
