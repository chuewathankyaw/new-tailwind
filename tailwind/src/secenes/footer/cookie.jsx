import React, { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons'
import { useEffect } from 'react';


export default function Cookies() {
 const [showPopup, setShowPopup] = useState(false);

 useEffect(() => {
   setShowPopup(true);
 }, []);

    const handleAccept = () => {
     setCookie('acceptedCookies', 'true', 1)
   // Perform actions when the user accepts the cookies
   setShowPopup(false);
    };
    const removeAccept = () => {
       setShowPopup(false)
   }

 const handlePopupTransitionEnd = () => {
   if (!showPopup) {
     // Perform actions when the pop-up transition is completed and it is not shown anymore
   }
    };
    
     const setCookie = (name, value, days) => {
       const date = new Date();
       date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
       const expires = `expires=${date.toUTCString()}`;
       document.cookie = `${name}=${value}; ${expires}; path=/`;
     };

    return (
      <>
        {showPopup && <div className="pop-upoverlay"></div>}
        <div
          className={`cookie-popup ${showPopup ? "show" : ""}`}
          onTransitionEnd={handlePopupTransitionEnd}
        >
          <div className="content">
            <p>
              This website uses cookies. By accepting, you consent to our use of
              cookies.
            </p>
            <div className="actions">
              <button onClick={handleAccept}>Accept</button>
              <button className="absolute right-6 top-4" onClick={removeAccept}>
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </>
    );
};