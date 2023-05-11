import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Footer from "./secenes/footer/footer";
import Navbar from "./secenes/Navbar/Navbar";
import Home from "./secenes/Home/Home";
import twitter from './assets/twitter.png'
import ImgSlider from "./secenes/Home/ImgSlider";
function App() {
 
  return (
    <div className="app">
      {/* <Navbar/> */}
      <Navbar />
      
      <Home />
      
      <ImgSlider/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
