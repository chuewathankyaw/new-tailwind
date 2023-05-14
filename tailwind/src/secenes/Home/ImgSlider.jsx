// import { images } from './Imgarr';
// const ImgSlider = () => {
//     return (
//         <>

//             <div className="slider bodyslider">
//                 <div className="slide-track">
//                     {images.map((data) => (
//                         <div className="slide">
//                             <img src={data.img} alt="img1" />
//                         </div>
//                     )
//                     )}
//                 </div>
//             </div>

//         </>
//     );
// };
// export default ImgSlider;

import React from "react";
 import { images } from './Imgarr';
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ImgSlider = () => {
    const [isVisible, setIsVisible] = useState(false);
    const textContainerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const textContainer = textContainerRef.current;
        const textContainerTop = textContainer.offsetTop;
        const textContainerHeight = textContainer.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTop &&
          windowScrollTop <= textContainerTop + textContainerHeight &&
          !isVisible
        ) {
          setIsVisible(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isVisible]);


    return (
      <>
        {/* <div className="mt-20 ml-20 scrolling-text-container">
          <h1 className="text-6xl font-bold italic	scrolling-text">
            Our Successful <br></br> Customer
          </h1>
        </div> */}
        <div className="container">
          <div
            className={`item ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}
            ref={textContainerRef}
          >
            <h1 className="text-6xl ml-20 font-bold italic">
              Our Successful <br></br> Customer
            </h1>{" "}
          </div>
        </div>
        <div className="">
          <Marquee speed={30} className="marquee" gradient={false}>
            {images.map((data) => (
              <div className="slide">
                <img className="w-full h-40" src={data.img} alt="img1" />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="-mt-10">
          <Marquee
            speed={30}
            className="marquee"
            gradient={false}
            direction="right"
          >
            {images.map((data) => (
              <div className="slide">
                <img className="w-full h-40" src={data.img} alt="img1" />
              </div>
            ))}
          </Marquee>
        </div>
      </>
    );
};

export default ImgSlider;