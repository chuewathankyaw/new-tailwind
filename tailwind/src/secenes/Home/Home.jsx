// import { ArrowForwardIcon } from "@chakra-ui/icons";
// import { Helmet } from 'react-helmet';


import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useRef } from "react";
import img1 from "../../assets/project-1.jpeg"
import img2 from '../../assets/project-2.jpeg'
import img3 from '../../assets/project-3.jpeg'
import img4 from '../../assets/project-4.jpeg'
import Navbar from "../Navbar/Navbar";
import ImgSlider from "./ImgSlider";
import Footer from "../footer/footer";

const Home = () => {
  const handleMouseMove = (e) => {
    const linkHoverReveal = e.currentTarget.querySelector(".hover-reveal");
    const linkImages = e.currentTarget.querySelector(".hidden-img");
    linkHoverReveal.style.opacity = 1;
    linkHoverReveal.style.transform = `translate(-100%, -50%) rotate(5deg)`;
    linkImages.style.transform = "scale(1, 1)";
    linkHoverReveal.style.left = e.clientX + "px";
  };

  const handleMouseLeave = (e) => {
    const linkHoverReveal = e.currentTarget.querySelector(".hover-reveal");
    const linkImages = e.currentTarget.querySelector(".hidden-img");
    linkHoverReveal.style.opacity = 0;
    linkHoverReveal.style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages.style.transform = "scale(0.8, 0.8)";
  };

   



  
  
  


  return (
    <>
      <nav className="homenav">
        <ul className="ul">
          <li className="li mt-20">
            <div
              className="link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="ml-10">
                <span>Noddles</span>
                <span className="ml-4">01</span>
              </div>

              <ArrowForwardIcon className="text-4xl mr-8" />

              <div className="hover-reveal image01">
                <img className="hidden-img" src={img1} alt="" />
              </div>
            </div>
          </li>
          <li className="li">
            <div
              className="link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="ml-10">
                <span>Noddles</span>
                <span className="ml-4">02</span>
              </div>
              <ArrowForwardIcon className="text-4xl mr-8" />
              <div className="hover-reveal image01">
                <img className="hidden-img" src={img2} alt="" />
              </div>
            </div>
          </li>
          <li className="li">
            <div
              className="link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="ml-10">
                <span>Noddles</span>
                <span className="ml-4">03</span>
              </div>
              <ArrowForwardIcon className="text-4xl mr-8" />
              <div className="hover-reveal image01">
                <img className="hidden-img" src={img3} alt="" />
              </div>
            </div>
          </li>
          <li className="li mb-36">
            <div
              className="link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="ml-10">
                <span>Noddles</span>
                <span className="ml-4">04</span>
              </div>
              <ArrowForwardIcon className="text-4xl mr-8" />
              <div className="hover-reveal image01">
                <img className="hidden-img" src={img4} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <ImgSlider />
      <ImgSlider/>
      <Footer />
    </>
  );
};
export default Home;

