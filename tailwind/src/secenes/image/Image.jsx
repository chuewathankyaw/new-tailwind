import img1 from '../../assets/project-1.jpeg'
import { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";


export default function ImageSlider() { 
const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
      <div className="app">
                <div className="container">

      <CSSTransition
        in={showImage}
        timeout={1000}
        classNames="slide"
        unmountOnExit
      >
        <div className="image flex ml-40 ">
        <img src={img1} alt="" />
        <img src={img1} alt="" />
      </div>
              </CSSTransition>
              </div>
    </div>
  );
      
 
    
}