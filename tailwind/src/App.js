import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Footer from "./secenes/footer";
import Navbar from "./secenes/Navbar/Navbar";

function App() {
 
  return (
    <div className="app">
      {/* <Navbar/> */}
      <Navbar  />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
