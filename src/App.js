import './App.css';
import React from "react"
import ComingSoon from "./ComingSoon"
import Welcome from "./Welcome"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <Welcome />
      <Footer />
      {/* <ComingSoon /> */}
    </div>     
  ) 
};

export default App;
