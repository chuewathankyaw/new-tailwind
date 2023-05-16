import React, { useState, useEffect } from "react";
import footer1 from '../../assets/curve.png'
const Footer = () => {
 useEffect(() => {
   const handleScroll = () => {
     const scrollElement = document.querySelector(".curve");
     if (scrollElement) {
       const value = 1 + window.scrollY / -500;
       scrollElement.style.transform = `scaleY(${value})`;
     }
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

  return (
  
    <>
   
        <div className="footer">
          <span className="curve">
            <img src={footer1} alt="" />
          </span>
        </div>
     
    </>
  );
};

export default Footer;
