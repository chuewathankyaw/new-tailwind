import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./secenes/footer/footer";
import Navbar from "./secenes/Navbar/Navbar";
import Home from "./secenes/Home/Home";
import Careers from "./secenes/career/career";
import twitter from './assets/twitter.png'
import ImgSlider from "./secenes/Home/ImgSlider";
import Cookies from "./secenes/footer/cookie";
import ImageSlider from "./secenes/image/Image";
function App() {
 
  return (
    <div className="app">
      {/* <Navbar/> */}

      <Navbar />

      <Routes>
        <Route path="/careers" element={<Careers />} />
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<ImageSlider />} />

      </Routes>
     
    </div>
  );
}

export default App;
