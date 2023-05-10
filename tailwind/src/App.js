import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Footer from "./secenes/footer/footer";
import Navbar from "./secenes/Navbar/Navbar";
import twitter from './assets/twitter.png'
function App() {
 
  return (
    <div className="app">
      {/* <Navbar/> */}
      <Navbar />
      <div>body</div>
      <div className="text-8xl hover:text-white">
        <i class="uil uil-linkedin-alt"></i>
      </div>
      <div className="text-8xl border-blue text-black hover:text-blue ">
        <i class="uil uil-facebook-f"></i>
      </div>
      {/* <div className="">
        <ion-icon name="logo-facebook"></ion-icon>
      </div> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
