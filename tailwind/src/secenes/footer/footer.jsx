import React, { useState, useEffect } from "react";
import footer1 from '../../assets/curve.png'
const Footer = () => {
 useEffect(() => {
   const handleScroll = () => {
     const scrollElement = document.querySelector(".curve");
     if (scrollElement) {
       const value = 1 + window.scrollY / -1500;
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
      <footer className="pb-80">
        <div className="section-p1">
          <div className="infomation">
            <div className="col">
              <img class="logo" src="../images/01.png" alt="" />
              <p>
                Your originality is our inispiration. From full-on <br />{" "}
                maximalists to fresh-faced minimalists
              </p>
              <div className="map">
                <i class="uil uil-map"></i>
                <p>No,564 San Yeik Nyein ,Yangon. ehjn@gmail.com</p>
              </div>
              <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                  <i class="uil uil-facebook"></i>
                  <i class="uil uil-twitter"></i>
                  <i class="uil uil-instagram-alt"></i>
                  <i class="uil uil-youtube"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>CATEGORIES</h4>
              <li>Cleanser & Toners</li>
              <li>Moisturisers</li>
              <li>Body Care</li>
              <li>Eyes & Lips</li>
              <li>Make-Up</li>
              <li>SkinCare Sets</li>
            </div>
            <div className="col">
              <h4>CUSTOMER SERVICE</h4>
              <li>Contact us</li>
              <li>Track Your Order</li>
              <li>Returns Policy</li>
              <li>delivery information</li>
              <li>Layaity Program</li>
              <li>Help & FAQ</li>
            </div>
            <div className="col">
              <h4>ABOUT US</h4>
              <li>About us</li>
              <li>careers</li>
              <li>Where to Buy</li>
              <li>Investor Relation</li>
              <li>Student Discount</li>
            </div>
          </div>
          <div className="sign-up">
            <div className="sign-info">
              <h2>SIGN UP FOR OUR EMAIL UPDATES</h2>
              <p>
                Sign up for emails and unlock first access to exclusive offers,
                products launches,and more
              </p>
            </div>
            <div className="logo3">
              <div className="form">
                <input type="text" placeholder="Your email address" />
                <button className="normal">Sign Up</button>
              </div>
              <img src="images/photo_2022-03-24_11-44-13.jpg" alt="" />
            </div>
          </div>
          <div class="copyright">
            <p>&copy; 2021, Tech2 ect - HTML CSS Ecommerce Template</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
