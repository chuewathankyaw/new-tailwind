import img1 from '../../assets/project-1.jpeg'
import { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";
import Footer from '../footer/footer';


export default function ImageSlider() { 
const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <div>
    <div className={`container  ${showImage ? 'show' : ''}`}>
      <div className={`img-div flex gap-6 items-center  ${showImage ? 'show' : ''}`}>
        <img className='w-full h-80' src={img1} alt="Your Image" />
        <img className='w-full h-80' src={img1} alt="Your Image" />
      </div>
    </div>

      <Footer/>
    </div>
  );
      
 
    
}